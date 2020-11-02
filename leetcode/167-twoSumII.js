/**
 * Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.

Note:

Your returned answers (both index1 and index2) are not zero-based.
You may assume that each input would have exactly one solution and you may not use the same element twice.
 

Example 1:

Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.
 */

//different from two sums since the array is already sorted

//use two pointers
const twoSumII = (numbers, target) => {
  let p1 = 0;
  let p2 = numbers.length - 1;

  while (numbers[p1] + numbers[p2] !== target) {
    if (numbers[p1] + numbers[p2] === target) {
      return [p1 + 1, p2 + 1];
    } else if (numbers[p1] + numbers[p2] > target) {
      p2--;
    } else {
      p1++;
    }
  }
};

const twoSum = (numbers, target) => {
  let start = 0;
  let end = numbers.length - 1;
  while (start < end) {
    let sum = numbers[start] + numbers[end];
    if (sum === target) {
      return [start + 1, end + 1];
    }
    if (sum > target) {
      end--;
    } else {
      start++;
    }
  }
};

console.log(twoSumII([2, 7, 10, 11], 9));
console.log(twoSumII([-1, 0, 3], 2));
