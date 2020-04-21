/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

You can return the array with its elements in any order.

test case: 
[1,2,3,5], [1,2,3,4,5] // should return [4]

input: 2 arrays
output: 1 array
edge cases: if both arrays are empty, just return an empty array
*/

let diffArray = (arr1, arr2) => {
  if (arr1.length === 0 && arr2.length === 0) {
    return [];
  }

  //merge the array
  let merged = arr1.concat(arr2);
  //filter the two arrays and return the item that's not included in both arrays
  let newArr = merged.filter(
    (item) => !arr1.includes(item) || !arr2.includes(item)
  );
  return newArr;
};

console.log(diffArray([1, 2, 3, 4, 5], [1, 2, 3, 5])); // return [4]
console.log(
  diffArray(
    ['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
    ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
  )
); // return ["pink wool"]
