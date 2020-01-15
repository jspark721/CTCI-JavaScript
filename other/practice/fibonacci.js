//write a function fib() that takes an integer n and returns the nth Fibonacci number

/*

fib(0) returns 0
fib(1) returns 1
fib(2) returns 1
fib(3) returns 2
fib(4) returns 3
fib(5) returns 5
*/

//recursive function 

function fibonacci(n) {
    if (n === 0 || n === 1) {
      return n;
    }
    return fib(n - 1) + fib(n - 2);
}
  
fibonacci(7);
  
//time complexity: O(2^n) exponential time cost
//space complexity: O(n) hidden space cost in the call stack

const fib = function(num) {
    //edge cases
    //if num is < 0

    if(num < 0) {
        throw new Error('index was negative');
    } else if (num === 0 || num === 1) {
        return num;
    }

    //build the fibonacci serires from the bottom up so track the previous 2 numbers at each step

    let prevPrev = 0; // 0th fibonacci
    let prev = 1; // 1st fibonacci
    let current; // declare current fibonacci

    for(let i = 1; i < num; i++) {
        //iteration 1: current = 2nd fibonacci
        //iteration 2: current = 3rd fibonacci
        //iteration 3: currrent = 4th fibonacci
        //to get the nth fibonacci .. do n-1 iterations (index starts at 0)

        current = prev + prevPrev;
        console.log('current num: ' + current);
        prevPrev = prev;
        console.log('prevPrev num: ' + prevPrev);
        prev = current;
        console.log('prev num: ' + prev);
        console.log('----end of iteration----');
    }

    return current;
}

fib(6); //8
fib(3); // 2 

// time complexity: O(n)
// space complexity: O(1)