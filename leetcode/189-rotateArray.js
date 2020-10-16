/*
Given an array, rotate the array to the right by k steps, where k is non-negative.

Follow up:

Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
Could you do it in-place with O(1) extra space?


input: nums = [1,2,3,4,5,6,7] k = 3
output: [5,6,7,1,2,3,4]
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  if (nums.length == 0 || k == 0) {
    return nums;
  }

  k = k % nums.length;

  while (k > 0) {
    nums.unshift(nums.pop());
    k--;
  }
};

var rotateArray = function (array, d) {
  if (array.length === 0) return array;

  let rotation = d % array.length;

  while (rotation > 0) {
    let val = array.pop();
    array.unshift(val);
    rotation--;
  }

  return array;
};
