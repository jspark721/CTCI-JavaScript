/**
 * given an array of n positive integers and a positive integer s, find the minimal length of a contiguous subarray of which the sum >= s, if there isn't one, return 0 instead
 *
 * input: s = 7, nums = [2,3,1,2,4,3]
 * ouput: 2
 * explanation: subarray [4,3] has the minimal length under the problem constraint
 *
 * time complexity: O(n) using two pointers, left and right
 * space complexity: O(1) only constant space required for left, right,sum, and minlength
 */

const minSubarraySum = (nums, s) => {
  if (nums.length === 0) return 0;

  let left = 0;
  let right = 0;
  let sum = 0;
  let minLength = 0;

  while (right < nums.length) {
    sum += nums[right];
    while (sum >= s) {
      if (minLength === 0 || minLength > right - left + 1) {
        minLength = right - left + 1;
      }
      sum -= nums[left];
      left++;
    }
    right++;
  }
  return minLength;
};

console.log(minSubarraySum([2, 3, 1, 2, 4, 3], 7));
