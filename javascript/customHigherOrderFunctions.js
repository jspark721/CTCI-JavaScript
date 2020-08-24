/**
 * implement custom higher order functions
 *
 * map();
 * sort();
 * filter();
 * reduce();
 */

//the map() method creates a new array with the results of calling a provided function on every element in the calling array

let array = [1, 2, 3, 4, 5];

const squareArray = array.map((num) => num * num);
console.log(squareArray);

Array.prototype.customMap = function (callback) {
  const resultArray = [];
  for (let i = 0; i < this.length; i++) {
    resultArray.push(callback(this[i]));
  }
  return resultArray;
};

const multiplyByTwo = array.customMap(function (val) {
  return val * 2;
});

console.log(multiplyByTwo);

//sort() method -- this method is used to sort the elements of an array (insertion sort, selecton sort, merge sort, bubble sort)

//merge sort with recursion
const mergeSort = (array) => {
  if (array.length <= 1) {
    return array;
  }

  //get mid
  let mid = Math.floor(array.length / 2);

  //divide the array into left and right
  let left = array.slice(0, mid);
  let right = array.slice(mid);

  //using recursion, combine the left and right
  return merge(mergeSort(left), mergeSort(right));
};
//implement merge helper function
function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  //concatenate values into result array in order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  //concat here because there will be one element remaining from either left or right
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const mylist = [2, 10, 1, 21, 30, 3, 4];
console.log(mergeSort(mylist));

// filter() method -- creates a new array with all elements that pass the test implemented by the provided function

let numbers = [2, 1, 20, 4, 21, 3, 8];

//use filter method to just get even numbers
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);

/* how does filter work?
1. creates a new results empty array
2. loop through the array elements
3. calls the filter function with curernt element as the argument
4. if the result is true, we push the element to the results array
5. return the results array after going through all the elements
*/

Array.prototype.customFilter = function (callback) {
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    let filterArray = callback(arr[i]);
    console.log(filterArray);
    if (filterArray) {
      results.push(arr[i]);
    }
  }
  return results;
};

const oddNumbers = numbers.filter((num) => num % 2 !== 0);
console.log(oddNumbers);
const largeNumbers = numbers.filter((num) => num > 10);
console.log(largeNumbers);

//the reduce() method -- it executes a reducer function (that you provide) on each member of the array resulting in a single output value

//example of how to use the reduce() method
let nums = [1, 2, 3, 4, 5];

const sumReducer = (accumulator, currentValue) => {
  return accumulator + currentValue;
};

const sum = nums.reduce(sumReducer);
console.log(sum); // prints 15

// a reducer function is written as the sum between the accumulator and current value -- when you pass the reducer function to the reduce() method, it will loop through each number in the array and adds it to the accumulator starting at (0 in the beginning) -- which itself becomes the new accumulator for the next iteration, this continues until the end of the array and returns the accumulator as a result

/* before the first iteration, accumulator = 0;
1st iteration, accumulator += 1; // accumulator = 1;
2nd iteration, accumulator += 2; // accumulator = 3;
3rd iteration, accumulator += 3 // accumulator = 6; ... & so on

the reducer function's returned value is assigned to the accumulator whose value is remembered accros each iteration throughout the array, and it ultimately becomes the final single resulting value
*/

//implement our custom reduce method
/*
1. initialize accumulator variable with 0 or initialValue argument from the reduce()
2. loop through the array elements
3. call the reducer function with the accumulator and current element as the arguments
4. return accumulator after going through all the elements
*/

//reduce function takes two arguments, a callback and an initial value

const customReduce = function (callback, initialValue, array) {
  let value = initialValue;

  for (let i = 0; i < array.length; i++) {
    let currentValue = array[i];
    value = callback(value, currentValue);
  }
  return value;
};
const customSum = customReduce(sumReducer, 0, nums);
console.log(customSum);
