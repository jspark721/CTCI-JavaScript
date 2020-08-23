/**
 * implement custom higher order functions
 *
 * map();
 * reduce();
 * sort();
 * filter();
 */

//the map() method creates a new array with the results of calling a provided function on every element in the calling array

let array = [1, 2, 3, 4, 5];

const squareArray = array.map((num) => num * num);
console.log(squareArray);

Array.prototype.customMap = function (callback) {
  const resultArray = [];
  for (let i = 0; i < this.length; i++) {
    resultArray.push(callback(this[i], i, this));
  }
  return resultArray;
};

const multiplyByTwo = array.customMap(function (val, index, array) {
  return val * 2;
});

console.log(multiplyByTwo);
