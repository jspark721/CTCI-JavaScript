// a promise is a proxy for a value that is not necessarily known when the promise is created
// a promise is it'll return something eventually

/* 

 This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

a Promise is in one of these states;
pending: initial state, neither fulfilled nor rejected
fulfilled: meaning that the operation completed successfully
rejected: meaning that the operation failed

async
await
are promises

*/


// convert this callback into a promise
// function returnApple(callback) {
//     setTimeout(()=> {
//         callback('apple');
//     }, 500);
// };


// problem: sleep -- create a sleep function that takes one parameter (time) and will wait "time" ms

/* 
async function run() {
    await sleep(500);
    console.log('hello');
    await sleep(500);
    console.log('world);
}

create a function that is not going to execute until some elapsed time
*/

function sleep(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(); // resolve the promise after time 
        }, time);
    });
}


/* create a function to turn any function into a "promisfied" function -- any function to be promisfied will always have a callback as the last argument
the callback will always have this signature: 

function(result) {

}

const exampleFn = function(x, y, callback) {

}

const promisedFn = promisfy(exampleFn);

promisedFn().then(...).then(...)

*/

function promisfy(fn) {
    return function(...args) {
        return new Promise(function (resolve, reject) {
            function callback(result) {
                resolve(result);
            }
            fn.apply(this, args.concat(callback));
        });
    }
}