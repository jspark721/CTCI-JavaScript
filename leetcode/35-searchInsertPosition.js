/**
 * Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
 * 
 * 
Input: nums = [1,3,5,6], target = 5
Output: 2

Input: nums = [1,3,5,6], target = 7
Output: 4
 */

const searchInsert = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      return mid;
    }
  }
  return left;
};

const searchInsertRecursion = (nums, target) => {
  function binarySearch(arr, target, start, end) {
    const mid = Math.floor((start + end) / 2);
    if (start > mid) return start;
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] < target) {
      return binarySearch(arr, target, mid + 1, end);
    }
    if (arr[mid] > target) {
      return binarySearch(arr, target, start, mid - 1);
    }
  }

  return binarySearch(nums, target, 0, nums.length - 1);
};

console.log(searchInsertRecursion([1, 3, 4, 5, 6], 7)); // return 5
console.log(searchInsertRecursion([1, 3, 5, 6], 2)); // return 1
