/* given an array of integers, return indices of the two numbers such that they add up to a specific target.

you may assume that each input would have exactly one solution, and you may not use the same element twice

example:
given nums = [2, 7, 11, 15]
target = 9

because nums[0] + nums[1] = 2 + 7 = 9, return [0,1]
*/

//brute force
const twoSums = (array, target) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        result.push(i, j);
      }
    }
  }
  return result;
};

let array = [2, 7, 11, 15];
let target = 9;
console.log(twoSums(array, target));

// this solution checks all combinations by looping each element x and find if there is another value that equals to 'target - x '
// time complexity of O(n^2)
// space complexity of O(1)

//hash table version to improve time complexity

const twoSums2 = function (nums, target) {
  let hash = {};
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (hash[diff] !== undefined && hash[diff] !== i) {
      result = [hash[diff], i];
    }
    hash[nums[i]] = i;
  }
  return result;
};

console.log(twoSums2(array, target));
console.log(twoSums2([3, 3], 6));
