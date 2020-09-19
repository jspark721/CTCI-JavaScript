/*
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

I: array
O: array
C: optimize
E: empty array, no duplicates

example = [-3, -1, 1, 0, 2, 10, -2, 8]
output = [
  [-3, 1, 2],
  [-2, 0, 2],
  [-1, 0, 1]
]

input=[1,2,3,4]
output=[]
no triplets found
*/

const threeSums = (array) => {
  let result = [];
  if (array.length < 0) return result;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const result = [];

  //edge case: if array is empty or less than 3 numbers
  if (nums.length < 3) {
    return result; // return an empty array
  }
  //sort the array
  nums.sort((a, b) => a - b);

  //iterate through the array, i will be the anchor pointer
  //iterate until length-2 so high pointer won't be undefined
  for (let i = 0; i < nums.length - 2; i++) {
    //since array is already sorted, if nums[i] is greater than 0, you can stop
    if (nums[i] > 0) {
      break;
    }
    //if iterator is the same as previous, skip duplicates
    if (nums[i] === nums[i - 1]) {
      continue;
    }

    let lo = i + 1;
    let hi = nums.length - 1; // at the end of the array

    //walk to pointers to meet in the middle while finding all possible values
    while (lo < hi) {
      let sum = nums[i] + nums[lo] + nums[hi];
      if (sum === 0) {
        result.push([nums[i], nums[lo], nums[hi]]);

        // //skip duplicates for lo & hi
        while (nums[lo] === nums[lo + 1]) {
          lo++;
        }
        while (nums[hi] === nums[hi - 1]) {
          hi--;
        }
        //move lo and hi pointers inward
        lo++;
        hi--;
        continue;
      }
      if (sum > 0) {
        hi--;
      } else {
        lo++;
      }
    }
  }

  return result;
};

/***************THREE SUM using twosum function*******************
 *
 */

const findThreeSum = (A) => {
  A.sort((a, b) => a - b);

  const allThreeSums = new Set();
  const secondToLastIndex = A.length - 2;

  for (let i = 0; i < secondToLastIndex; i++) {
    findTwoSum(i, A, allThreeSums);
    console.log(allThreeSums);
  }

  return Array.from(allThreeSums);
};

const findTwoSum = (rootIndex, A, allThreeSums) => {
  let left = rootIndex + 1;
  let right = A.length - 1;

  while (left < right) {
    const threeNumberSum = A[rootIndex] + A[left] + A[right];
    if (threeNumberSum == 0) {
      allThreeSums.add([A[rootIndex], A[left++], A[right--]]);
    } else if (threeNumberSum < 0) {
      left++;
    } else {
      right--;
    }
  }
};

console.log(threeSum([0, 1, 5, -5, -1, 4, 5]));
