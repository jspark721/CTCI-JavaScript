/**
 * We have our lists of orders sorted numerically already, in arrays. Write a function to merge our arrays of orders into one sorted array.
 *
 *
 */

// const mergeArrays = (arr1, arr2) => {
//   if (arr1.length === 0) {
//     return arr2;
//   }
//   if (arr2.length === 0) {
//     return arr1;
//   }

//   //initialize an empty merged array
//   let mergedArr = [];

//   let maxLength = Math.max(arr1.length, arr2.length);

//   for (let i = 0; i < maxLength; i++) {
//     if (arr1[i] < arr2[i]) {
//       mergedArr.push(arr1[i], arr2[i]);
//     } else {
//       mergedArr.push(arr2[i], arr1[i]);
//     }
//   }
//   return mergedArr;
// };
//the above code won't work because if one array is greater in length, it would just push in an undefined

const mergeArrays = (arr1, arr2) => {
  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;

  //initilize empty merged array
  const mergedArr = [];

  let arr1Index = 0;
  let arr2Index = 0;
  let mergedIndex = 0;
  let arrLengthSum = arr1.length + arr2.length;

  while (mergedIndex < arrLengthSum) {
    const isArr1Empty = arr1Index >= arr1.length;
    const isArr2Empty = arr2Index >= arr2.length;

    //if arr1 is not empty and (arr2 is empty or current element in arr1 is less than current element in arr2)
    if (!isArr1Empty && (isArr2Empty || arr1[arr1Index] < arr2[arr2Index])) {
      mergedArr[mergedIndex] = arr1[arr1Index];
      arr1Index++;
    } else {
      //from arr2
      mergedArr[mergedIndex] = arr2[arr2Index];
      arr2Index++;
    }

    mergedIndex++;
  }
  return mergedArr;
};

const myArray = [3, 4, 6, 10, 11, 15];
const alicesArray = [1, 5, 8, 12, 14, 19];

console.log(mergeArrays(myArray, alicesArray));
// logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]
console.log(mergeArrays([1, 2, 3, 4, 5], [1, 2, 3]));

//time complexity: O(n)
//space complexity: O(n) -- creating new merged array
