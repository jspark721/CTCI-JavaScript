/*
Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

Follow up:

Could you solve this problem without using the library's sort function?
Could you come up with a one-pass algorithm using only O(1) constant space?
*/

const sortColors = (arr) => {
  if (arr.length === 0) return arr;

  let left = 0;
  let mid = 0;
  let right = arr.length - 1;

  /*
  Object: arr[mid] == 1
   */

  while (mid <= right) {
    if (arr[mid] < 1) {
      arr[mid] = arr[left];
      arr[left] = 0;
      left++;
      mid++;
    } else if (arr[mid] > 1) {
      arr[mid] = arr[right];
      arr[right] = 2;
      right--;
    } else {
      mid++;
    }
  }
  return arr;
};

console.log(sortArray([0, 1, 2, 1]));
console.log(sortArray([1, 0, 2]));
console.log(sortArray([1, 0]));

//time complexity: O(n)
//space complexity: O(1)
