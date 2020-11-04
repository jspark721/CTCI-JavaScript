/**
 * Given an array consisting of n integers, find the contiguous subarray of given length k that has the maximum average value. And you need to output the maximum average value.
 * 
Input: [1,12,-5,-6,50,3], k = 4
Output: 12.75
Explanation: Maximum average is (12-5-6+50)/4 = 51/4 = 12.75
 */

const findMaxAverage = (nums, k) => {
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  let max = sum;
  for (let j = k; j < nums.length; j++) {
    sum = sum - nums[j - k] + nums[j];
    max = Math.max(sum, max);
  }
  return max / k;
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4)); // 12.75
