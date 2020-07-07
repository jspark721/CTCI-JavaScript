/*
Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

*/

//this solution uses a hash table and so it uses an extra space
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (!hash[num]) {
      hash[num] = 0;
    }
    hash[num]++;
  }
  for (num in hash) {
    if (hash[num] === 1) {
      return num;
    }
  }
};

/* 
solve this problem using time complexity O(log n) and space complexity of O(1)

*/

//use binary search and find midpoint since it's sorted and split it in half each time

const findSingleNumber = (arr) => {
  if (arr.length == 0) return -1;

  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    console.log(`mid ${mid} left ${left} right ${right}`);

    if (mid % 2 !== 0) {
      if (arr[mid] === arr[mid - 1]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    if (mid % 2 === 0) {
      if (arr[mid] === arr[mid + 1]) {
        left = mid + 2;
      } else {
        right = mid;
      }
    }
    if (left === right) {
      return arr[left];
    }
  }
  return -1;
};

console.log(findSingleNumber([1, 1, 2, 2, 3, 4, 4]));
console.log(findSingleNumber([1, 1, 3, 3, 4, 5, 5, 7, 7, 8, 8]));
console.log(findSingleNumber([1, 1, 2, 3, 3]));
