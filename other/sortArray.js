const sortArray = (arr) => {
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
