/************* BRUTE FORCE *****************/
// let firstDuplicate = function(array) {
//   let smallerSecondIndex = array.length;
//
//   for(let i = 0; i < array.length; i++) {
//     for(let j = i + 1; j < array.length; j++) {
//       if(array[i] === array[j]) {
//         smallerSecondIndex = Math.min(smallerSecondIndex, j);
//       }
//     }
//   }
//   if(smallerSecondIndex === array.length) {
//     return -1; //means no duplicate
//   } else {
//     return array[smallerSecondIndex];
//   }
// };

/************** HASH TABLE, O(n) time complexity *********/
let firstDuplicate = function(array) {
  let hash = {};
  for(let i = 0; i < array.length; i++) {
    let num = array[i];
    if(hash[num]) {
      return num; //if it already exists, return the first number/duplicate
    } else {
      hash[num]= 1;
    }
  }
};
// but space O(n) space complexity

let a = [2, 1, 3, 5, 3, 2];

firstDuplicate(a);

/******** space complexity O(1) & time complexity O(n) *****/

let firstDuplicate2 = function(arr) {
  for(let i = 0; i < arr.length; i++) {
    if(arr[Math.abs(arr[i])- 1] < 0) { //if the number is negative
        return Math.abs(arr[i]);
    } else {
      arr[Math.abs(arr[i])-1] = -arr[Math.abs(arr[i]) - 1];
    }
  }
  return -1;
}

firstDuplicate2(a);
