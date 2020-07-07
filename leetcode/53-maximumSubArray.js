/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.


*/
var maxSubArray = function (nums) {
  if (nums.length === 0) return -1;
  if (nums.length === 1) return nums[0];

  let sum = 0;
  let maxSum = nums[0];

  for (let i = 0; i < nums.length; i++) {
    sum = Math.max(nums[i], sum + nums[i]);
    maxSum = Math.max(sum, maxSum);
  }
  return maxSum;
};

/*

You are given a list of n-1 integers and these integers are in the range of 1 to n. There are no duplicates in list. 
One of the integers is missing in the list. Write an efficient code to find the missing integer.

input: array
output: number

examples --- 
input: [5,4,2,1]
output: 3

questions: is the array sorted? it doesn't explicitly say it's sorted, so we're going to assume it's not sorted
only distinct numbers, no duplicates
array integer values are from range 1 to n
1 < arr[i] < n

edge cases: empty array
constraints: optimize -- get faster time complexity

*/

const findMissingInteger = (arr) => {
  //edge case
  if (arr.length === 0) return -1;

  let n = arr.length;
  let sum = (n * (n + 1)) / 2; // sum of all numbers from 0 to n by series computation formula
  let actualSum = 0;

  for (let i = 0; i < n; i++) {
    actualSum += arr[i];
  }
  return sum - actualSum;
};

console.log(findMissingInteger([3, 5, 2, 4])); // return 1;
console.log(findMissingInteger([1, 6, 8, 3, 5, 2, 4])); // return 7;

// time complexity: O(n)
// space complexity: O(n) space because the space increases with input size of the array
