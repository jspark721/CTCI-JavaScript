/*
write a function `sum` that takes an array of numbers as an input. the function should return the total sum of all elements. the function must be recursive

*/

// const sum = (arr) => {
//   if (arr.length === 0) return 0;
//   //rest variable that takes all the array except for the first item in the array
//   const rest = arr.slice(1);

//   return arr[0] + sum(rest);
// };

//time complexity: O(n^2)
//space complexity: O(n) -- but slicing the array creates more copies of the array

const sum = (array) => {
  return _sum(array, 0);
};

const _sum = (array, i) => {
  if (i === array.length) return 0;

  return array[i] + _sum(array, i + 1);
};

//time complexity: O(n)
//space complexity: O(n)
console.log(sum([1, 4, 6, 8])); //19
console.log(sum([4, 10, 20])); //34
console.log(sum([0])); // 0
