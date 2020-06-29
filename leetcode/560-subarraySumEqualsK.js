/*
Count Subarrays That Sum To K
Given an array of integers arr and an integer value k, return the total amount of unique, contiguous, subarrays that sum to k in arr.

Example 1:
Input: [1, 0, -1, 1] k = 0
Output: 4
Explanation: 4 subarrays sum up to 0

               i j
[1, 0, -1, 1] [1,1]
[1, 0, -1, 1] [0,2]
[1, 0, -1, 1] [1,3]
[1, 0, -1, 1] [2,3]

Example 2:
Input: [3, 7, -4, -2, 1, 5] k = 3
Output: 2
Explanation: 2 subarrays sum up to 3

                      i j
[3, 7, -4, -2, 1, 5] [0,0]
[3, 7, -4, -2, 1, 5] [1,2]


*/

// Solution
/* Cumulative Sum Cache

record cumulative sums from index 0 to index i (inclusive) for all indices i

then scan all subarrays (there are O(n^2) subarrays) and do an O(1) sum check 

this improves upon not having a cumulative sum cache, we would check O(n^2) subarrays then for each, do an O(n) sum scan over the subarray leading to an overall performance of O(n^3)

*/

const countSubarrays = (arr, k) => {
  const sums = [];
  sums.push(arr[0]);

  console.log(sums);

  for (let i = 1; i < arr.length; i++) {
    sums.push(sums[i - 1] + arr[i]);
    console.log(sums);
  }

  let count = 0;
  for (let start = 0; start < arr.length; start++) {
    for (let end = start; end < arr.length; end++) {
      let tempSum = sums[end];
      console.log(tempSum);
      if (start !== 0) {
        tempSum -= sums[start - 1];
      }
      if (tempSum === k) {
        count += 1;
      }
    }
  }
  return count;
};

console.log(countSubarrays([1, 0, -1, 1], 0));

let nums = [2, 2, 2, 1, 2, 2, 1, 2, 2, 2];
let k = 2;
console.log(countSubarrays(nums, k));
