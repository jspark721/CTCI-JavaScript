/**
 * some() method tests whether at least one element in the array passes the test implemented by the provided function
 *
 * it returns a boolean value
 */

const array = [1, 2, 3, 4, 5];

const even = (element) => element % 2 === 0;

console.log(array.some(even)); //will return true because some of the numbers are even

//polyfill -- some() method was added in the ECMA-262 standard in the 5th edition and might not be available in all browsers

if (!Array.prototype.some) {
  Array.prototype.some = function (func, thisArg) {
    'use strict';
    if (this === null) {
      throw new TypeError('Array.prototype.some called on null or undefined');
    }

    if (typeof func !== 'function') {
      throw new TypeError();
    }

    let t = Object(this);
    let len = t.length >>> 0;

    for (let i = 0; i < len; i++) {
      if (i in t && func.call(thisArg, t[i], i, t)) {
        return true;
      }
    }
    return false;
  };
}

console.log([2, 4, 5, 8, 7, 1].some((num) => num > 10)); //false
console.log([12, 4, 1, 3, 15, 20].some((num) => num < 10)); //true

const fruits = ['apple', 'banana', 'watermelon', 'mango', 'blueberry'];

function checkAvailability(arr, val) {
  return arr.some((arrVal) => val === arrVal);
}

console.log(checkAvailability(fruits, 'kiwi')); //false
console.log(checkAvailability(fruits, 'banana')); //true
