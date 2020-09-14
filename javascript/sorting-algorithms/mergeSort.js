/**
 * efficient, a divide and conquer fast-sorting algorithm
 *
 * 1. divide the unsorted list into n sublists, each containing one element
 * 2. repeatedly merge sublists to produce new sorted sublist until there is only one sublist remaining
 *
 * two major subroutines
 * split -- split subroutine splits an array in half and recursively sorts the left and right halves, they later merge in the merge subroutine
 * merge -- merge subroutine merges two sorted sequence in 0(len(left) + len(right)) time (overarchingly O(n) time with respect to the original input size)
 */

// const mergeSort = (array, left, right) => {
//   if (left > right) return;

//   const mid = Math.floor(array.length / 2);
//   const leftHalf = mergeSort(array, left, mid);
//   const rightHalf = mergeSort(array, mid + 1, right);

//   return merge(leftHalf, rightHalf);
// };

// //helper functions
// const merge = (arr1, arr2) => {
//   let sorted = [];

//   while (arr1.length && arr2.length) {
//     if (arr1[0] < arr2[0]) sorted.push(arr1.shift());
//     else sorted.push(arr2.shift());
//   }

//   return sorted;
// };

//

var mergeSort = function (nums) {
  if (nums.length <= 1) {
    return nums;
  }

  const mid = Math.floor(nums.length / 2);
  const leftArray = mergeSort(nums.slice(0, mid));
  const rightArray = mergeSort(nums.slice(mid));
  return merge(leftArray, rightArray);
};

function merge(left, right) {
  let leftIndex = 0;
  let rightIndex = 0;
  const result = [];

  //concatenate values into the results array in order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++; //after we add the left number, we will move the left pointer
    } else {
      result.push(right[rightIndex]);
      rightIndex++; // move the right cursor
    }
  }

  //we need to concat here because there will be one element remaining from either left OR the right
  // this is important because if we don't do this las step, we will have an incomplete list of elements at the end because the while loop condition will fail once one of the two arrays are exhausted, but it won't always be equal
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

console.log(mergeSort([2, 5, 10, 9, 3, 7]));
