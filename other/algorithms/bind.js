// implement Function.prototype.bind() 

function bind(fn, context) {
    return function() {
        fn.call(context); 
        /* you can pass arguments by using a spread 
        fn.apply(context, [...arguments]);
        */
    }
}

const foo = function() {
    console.log(this.bar);
}

let baz = foo.bind({bar: 'Hello'});

baz(); //returns Hello