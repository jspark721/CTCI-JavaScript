/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  if (digits.length === 0) {
    return;
  }

  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i] = digits[i] + 1;
      return digits;
    } else {
      //means number is 9, then turn it to 0, and the for loop will run again and the prev number in the array will be added and then returned
      digits[i] = 0;
    }
  }
  //edge case if all numbers are 9, it will all be [0,0] so we need to add 1 to the front of the array
  digits.unshift(1);
  return digits;

  //or return [1, ...digits];
};

console.log(plusOne([1, 2, 3, 4])); // [1,2,3,5]
console.log(plusOne([2, 3, 9])); //[2,4,0]
console.log(plusOne([9, 9, 9])); // [1, 0, 0, 0]
