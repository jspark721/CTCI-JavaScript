/*

Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

Note:

The solution set must not contain duplicate quadruplets.

Example:

Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.

A solution set is:
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]

*/

const fourSum = (nums, target) => {
  let result = [];
  if (nums.length < 4) return result;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 3; i++) {
    for (let j = i + 1; j < nums.length - 2; j++) {
      let lo = j + 1;
      let hi = nums.length - 1;

      while (lo < hi) {
        let sum = nums[i] + nums[j] + nums[lo] + nums[hi];
        if (sum === target) {
          result.push([nums[i], nums[j], nums[lo], nums[hi]]);

          while (nums[lo] === nums[lo + 1]) lo++;
          while (nums[hi] === nums[hi - 1]) hi--;
          lo++;
          hi--;
        } else if (sum < target) {
          lo++;
        } else {
          hi--;
        }
      }
      while (nums[j] === nums[j + 1]) j++;
    }
    while (nums[i] === nums[i + 1]) i++;
  }
  return result;
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
console.log(fourSum([0, 0, 0, 0], 0));
console.log(fourSum([1, 3, 4], 8));

//universal solution to solve any n-sum problem
var nSum = function (nums, target, k) {
  nums.sort((a, b) => a - b);
  const result = [];

  // k represents N-sum,
  // if k = 3 : 3Sum, if k = 4 : 4Sum, if k = 5, 5Sum;
  function recurse(arr, tar, res, k) {
    if (k === 2) {
      twoSum(arr, tar, res);
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      while (arr[i] === arr[i - 1]) i++;
      recurse(arr.slice(i + 1), tar - arr[i], [...res, arr[i]], k - 1);
    }
  }

  function twoSum(arr, tar, res) {
    let low = 0,
      high = arr.length - 1;

    while (low < high) {
      const sum = arr[low] + arr[high];
      if (sum === tar) {
        result.push([...res, arr[low], arr[high]]);
        while (arr[low] === arr[low + 1]) low++;
        while (arr[high] === arr[high - 1]) high--;
        low++;
        high--;
      } else if (sum < tar) low++;
      else high--;
    }
  }

  recurse(nums, target, [], k);
  return result;
};

const array = [1, 4, 2, 7, 5, -1, 3]; //[1,2,7], [1,4,5], [4,7,-1]
console.log(nSum(array, 10, 4));
