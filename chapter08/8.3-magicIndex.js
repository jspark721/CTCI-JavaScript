/*
A magic index in an array A[0...n-1] is defined to be an index such that A[i] = i; Given a sorted array of distinct integers, write a method to find the magic index, if one exists in an array. FOLLOW UP: What if the values are not distinct?

*/

const magicIndex = (arr) => {
  if (arr.length === 0) return -1;

  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (mid > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
    if (mid === arr[mid]) {
      return mid;
    }
  }
  return -1;
};

//questions: do we return multiple magic index? or just return the first magic index?
//if the array does NOT have distinct numbers, the above algorithm will not work and can miss the magic index as we are comparing the mid index with the mid value and if there are duplicated numbers it would skip the magic index on the left side of the mid
//in this case, if the mid value is 1, we can check what is at index 1 and if it equals the mid value, we can return that index since the mid value is 1 and the array is sorted, there won't be any other numbers greater than 1 on the left side
//so we can skip all the indices that are bigger than the middle value
// const magicIndex2 = (arr) => {
//   if (arr.length === 0) return -1;

//   let magicIndices = [];
//   let left = 0;
//   let right = arr.length - 1;
//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);

//     if (mid > arr[mid]) {
//       let midValue = arr[mid];
//       if (midValue === arr[midValue]) {
//         magicIndices.push(midValue);
//       } else {
//         left = mid + 1;
//       }
//     } else {
//       right = mid - 1;
//     }

//     if (mid === arr[mid]) {
//       magicIndices.push(mid);
//     }
//   }
//   return magicIndices;
// };

function giveMeMagic(sortedArr) {
  const endArray = sortedArr.length - 1;
  function findMagic(arr, minIndex, maxIndex) {
    const middleIndex = Math.ceil((minIndex + maxIndex) / 2);
    const middleValue = arr[middleIndex];

    if (middleValue === middleIndex) {
      return middleIndex;
    }
    if (minIndex > maxIndex) {
      return -1;
    }

    const maxIndexLeft =
      middleValue < middleIndex ? middleValue : middleIndex - 1;
    const left = findMagic(arr, 0, maxIndexLeft);

    if (left >= 0) {
      return left;
    }

    const minIndexRight =
      middleValue > middleIndex ? middleValue : middleIndex + 1;
    const right = findMagic(arr, minIndexRight, maxIndex);

    return right;
  }
  return findMagic(sortedArr, 0, endArray);
}

console.log(findMagic([-20, 1, 1, 1, 3, 9, 20]));
console.log(findMagic([-20, 1, 1, 1, 3, 4, 5, 7, 20]));
