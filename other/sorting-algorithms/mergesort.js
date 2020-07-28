/* implement a merge sort to sort the array in ascending order

1. check if array is empty or only has one value
2. get middle index
3. split array into two sides, left and right
4. use recursive function call to merge the array 
5. create new array
6. check if either array is empty

time complexity: O(n log n)
space complexity: O(n) 


*/

const sortArray = (arr) => {
  //edge case if array is empty or only has one value
  if (arr.length <= 1) {
    return arr;
  }

  //using merge sort, need to divide the array in half so we need to find the midpoint
  let mid = Math.floor(arr.length / 2);

  //divide the array into left side and right side
  let leftSide = arr.slice(0, mid);
  let rightSide = arr.slice(mid, arr.length);

  console.log(`split: [${leftSide}] [${rightSide}]`);
  //use recursion to combine left and right side
  return mergeArray(sortArray(leftSide), sortArray(rightSide));
};

const mergeArray = (left, right) => {
  let result = [];

  //while there are values in the left and the right array
  while (left.length && right.length) {
    //find lower value
    if (left[0] <= right[0]) {
      //add the left value to the result array, and remove it from the left array
      result.push(left.shift()); //shift removes the first element of the left array
    } else {
      //if right is less, then we add the value in the right side array first into the result array
      result.push(right.shift());
    }
  }

  //merge the left array
  while (left.length) {
    result.push(left.shift());
  }
  //merge the right array
  while (right.length) {
    result.push(right.shift());
  }

  //return the result array
  return result;
};

console.log(sortArray([21, 4, 1, 7, 2, 15]));
console.log(sortArray([12, 15, 2, 3, 8, 21, 19, 11, 100]));
