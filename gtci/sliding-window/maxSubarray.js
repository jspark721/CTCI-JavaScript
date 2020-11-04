/**
Problem:
- Given an array of positive numbers and a positive number k, find the maximum sum of any contiguous subarray of size k.

Example:
Input [2, 1, 5, 1, 3, 2], k=3
Output 9
Explanation: Subarray with maximum sum is [5, 1, 3].

- view each contiguous subarray as a sliding window of k elements
- as we move to the next subarray, slide the window by one element to resuse the sum from previous array and update the maximum sum
*/

const maxSubarray = (nums, k) => {
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  let max = sum;
  for (let j = k; j < nums.length; j++) {
    sum = sum - nums[j - k] + nums[j];
    max = Math.max(sum, max);
  }

  return max;
};

console.log(maxSubarray([2, 1, 5, 1, 3, 2], 3));
