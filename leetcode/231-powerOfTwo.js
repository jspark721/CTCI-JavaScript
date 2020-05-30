/*
given an integer, write a function to determine if it's a power of two

example: input: 1, output: true, explanation: 2^0 = 1

input 16, output: true, explanation: 2^4 = 16;
*/

const isPowerOfTwo = function (n) {
  if (n == 0) return false;

  let log = Math.floor(Math.log2(n));
  let power = Math.pow(2, log);
  console.log(`log: ${log}, power: ${power}`);
  return power == n;
};

console.log(isPowerOfTwo(256)); // return true;
console.log(isPowerOfTwo(65536));
console.log(isPowerOfTwo(3));

const isPowerOfTwoWhileLoop = function (n) {
  if (n < 1) return false;

  let i = 1;
  while (i < n) {
    i *= 2;
  }
  return i === n;
};

/*
time complexity is O(logN) -- if our input doubles, our while loop runs one more time
space complexity: O(1)
*/
