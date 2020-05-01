//examples of reduce function

let list = ['a', 'b', 'c'];

let reduceList = list.reduce(function (accumulator, letter) {
  return accumulator + letter.toUpperCase();
});

console.log(reduceList); // returns aBC since a becomes the seed

let reduceAll = list.reduce(function (accumulator, letter) {
  return accumulator + letter.toUpperCase();
}, '');

console.log(reduceAll); // returns ABC since '' starts as the seed

const concacatenateStringWithSpaces = (list) => {
  return list.reduce((acc, string) => acc + string + ' ', '');
};

let testString = ['practice', 'using', 'the', 'reduce', 'function'];
console.log(concacatenateStringWithSpaces(testString));

//map over the function and square everything and then subract it with reduce
const squaresAndSubracts = (list) => {
  return list.map((num) => num * num).reduce((prevNum, val) => prevNum - val);
};

const numList = [10, 5, 4, 2, 1];

console.log(squaresAndSubracts(numList));

const phrase = [
  'the',
  'seahawks',
  'are',
  'going',
  'to',
  'the',
  'superbowl',
  '#goHawks',
];

const seahawks = (list) => {
  return list.reduce((acc, word) => {
    return acc + word + ' ';
  }, '');
};

console.log(seahawks(phrase));

/* the reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value

let result = arr.reduce(callback, initValue);
arr - the array to run the reduce function on
callback - the function to execute on each element in the array
initValue - an optionally supplied initial value, if this value is not supplied, the 0th element is used as the initial value
*/

let addNums = [2, 3, 5, 100, 7];

let result = addNums.reduce((acc, currVal) => {
  return acc + currVal;
});

console.log(result);

// the first time callback is called, acc and currVal can be one of two values -- if no initial value is provided, then acc will be equal to the first value in the array, and the currVal will be equal to the second -- so without initValue, answer is 117, if we put a initValue of 10, the answer will be 127

/* object example for reduce

if initialValue isn't provided, reduce() will execute the callback function starting at index 1, skipping the first index (0) If initialValue is provided, it will start at index 0

*/

let animal = [
  { name: 'Harvey', type: 'Dog', age: 8 },
  { name: 'Simba', type: 'Cat', age: 5 },
];

let getAge = animal.reduce((acc, val) => {
  console.log(`acc: ${acc} + val: ${val.age}`);
  return acc + val.age;
}, 0);

console.log('Total Age:', getAge);

const array1 = [1, 2, 3, 4, 5];
const reducer = (accumulator, currentVal) => accumulator + currentVal;

console.log(array1.reduce(reducer)); // return 1 + 2 + 3 + 4 + 5 which is 15
console.log(array1.reduce(reducer, 10)); // return 25 because it adds the 10 as an initial value

const nestedArray = [
  [3, 4],
  [5, 6],
  [7, 8, [9, 10]],
];
const flattenArray = nestedArray.reduce((acc, val) => acc.concat(val), []);

console.log(flattenArray);
