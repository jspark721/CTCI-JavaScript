/*
Your are given an array of positive integers nums.

Count and print the number of (contiguous) subarrays where the product of all the elements in the subarray is less than k.

Example 1:
Input: nums = [10, 5, 2, 6], k = 100
Output: 8
Explanation: The 8 subarrays that have product less than 100 are: [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6].
Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.
*/

const subArrayProductLessThanK = (nums, k) => {
  if (nums.length === 0 || k <= 0) return 0;

  let product = 1;
  let answer = 0;
  let low = 0;
  for (let high = 0; high < nums.length; high++) {
    product *= nums[high];
    while (product >= k) {
      //shrink the window
      product /= nums[low];
      low++;
    }
    answer += Math.max(0, high - low + 1);
    console.log(
      `low: ${low}, high: ${high}, prod: ${product}, answer ${answer}`
    );
  }
  return answer;
};

console.log(subArrayProductLessThanK([10, 5, 2, 6], 100));
