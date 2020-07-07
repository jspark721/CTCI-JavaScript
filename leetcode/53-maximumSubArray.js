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

Write an efficient program to find the sum of contiguous subarray within a one-dimensional array of numbers which has the largest sum.

can it have duplicates?
can it have negative numbers?, assuming there are negative numbers because if not, the answer would be just the sum of all the numbers to get the largest sum

are we returning the subarray? or the largest sum?
I will assume that we will return the largest sum

example: 
input: array [1,-1, 5, 3, 3, -5, 10, 2]
output: 18 because 5 + 3 + 3 + -5 + 10 + 2 = 18 the largest sum of the array

example:
input: [2, -4, 5, 3, -5]
output: 8

index 0
sum = max of (2, or (2 + 0 = 2)) = 2
maxSum = max of (2, or 2) because maxSum starts at the value of arr[0] and we compare it to get the max of the sum or maxSum

index 1
sum = max of (-4 or (-4 + 2) = -2)) = -2
maxSum = max of (2, 2) = 2

index 2
sum = max of (5 or (-2 + 5) = 3) = 5
maxSum = max of (2, 5) = 5

index 3
sum = max of (3 or (5 + 3) = 8) = 8
maxSum = max of (5, 8) = 8

index 4
sum = max of (-5 or (8 + -5) = 3) = 3
maxSum = max of (8,3) = 8

so return 8!


*/

const largestSumOfSubArray = (arr) => {
  //edge cases
  if (arr.length === 0) return -1;
  if (arr.length === 1) return arr[0];

  let sum = 0;
  let maxSum = arr[0];

  for (let i = 0; i < arr.length; i++) {
    //if value at arr[i] is less than sum + arr[i], make the max number become the value of the sum
    sum = Math.max(arr[i], sum + arr[i]);
    console.log(`sum ${sum}, maxSum ${maxSum}`);

    //get the max between sum or current maxSum
    maxSum = Math.max(sum, maxSum);
  }

  return maxSum;
};

console.log(largestSumOfSubArray([1, -1, 5, 3, 3, -5, 10, 2])); //return 18 (5+3+3+-5+10+2)
console.log(largestSumOfSubArray([2, -4, 5, 3, -5])); // return 8;
