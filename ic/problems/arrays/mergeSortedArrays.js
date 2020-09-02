/**
 * We have our lists of orders sorted numerically already, in arrays. Write a function to merge our arrays of orders into one sorted array.
 *
 *
 */

const mergeArrays = (arr1, arr2) => {
  if (arr1.length === 0) {
    return arr2;
  }
  if (arr2.length === 0) {
    return arr1;
  }

  //initialize an empty merged array
  let mergedArr = [];

  let maxLength = Math.max(arr1.length, arr2.length);

  for (let i = 0; i < maxLength; i++) {
    if (arr1[i] < arr2[i]) {
      mergedArr.push(arr1[i], arr2[i]);
    } else {
      mergedArr.push(arr2[i], arr1[i]);
    }
  }
  return mergedArr;
};

const myArray = [3, 4, 6, 10, 11, 15];
const alicesArray = [1, 5, 8, 12, 14, 19];

console.log(mergeArrays(myArray, alicesArray));
// logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]
console.log(mergeArrays([1, 2, 3, 4, 5], [1, 2, 3, 4, 10]));

//time complexity: O(n)
//space complexity: O(n) -- creating new merged array
