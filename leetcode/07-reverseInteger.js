/*
Given a 32-bit signed integer, reverse digits of an integer

input: number
output: number, reversed
edge cases: number is null?
*/

const reverse = function (x) {
  let string = x.toString().split('').reverse();
  let num = parseInt(string.join(''));
  //check for overflow
  if (num > Math.pow(2, 31) - 1 || num < Math.pow(-2, 31)) {
    return 0;
  } else if (x < 0) {
    return -Math.abs(num);
  }
  return num;
};

console.log(reverse(123)); // 321
console.log(reverse(-123)); // -321
