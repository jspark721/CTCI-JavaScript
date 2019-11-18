/* classic example of a divide & conquer method is the --

BINARY SEARCH
-- search for a value in a sorted array by cutting the side of the search area in half

binary search has to be sorted

if the array is not sorted, then LINEAR SEARCH may be better -- linear search, searches for a value in an array by checking each value in order

after data is separated into smaller lists, the merge step combines two sorted lists into one sorted list
*/

// LINEAR SEARCH

//implement linear search -- takes two arguments, the first one is a list and the item that you are looking for

function linearSearch(list, item) {
  let index; // -1 means it was not found

  list.forEach((listItem, i) => {
    if (listItem === item ) {
      index = i;
    }
  });
  return index; // if there is a duplicate, it will return the last index
}

console.log(linearSearch([2, 3, 8, 21, 1, 15, 90], 90))

// the time complexity of linear search is O(n)


/* BINARY SEARCH
 a search of a sorted array by repeatedly splitting the array in half. Binary search is fast since with each iteration, half of the array is determined to be unwanted instead of just one wrong value
*/

function binarySearch(list, item) {
  let min = 0;
  let max = list.length - 1; // because array index starts at 0
  let guess;

  while (min <= max) {
    guess = Math.floor((min + max)/2); // just start in the middle
    // so the guess will be at index 2
    if(list[guess] === item) {
      return guess;
    } else {
      if(list[guess] < item) {
        min = guess + 1;
      } else {
        max = guess - 1;
      }
    }
  }
  return 'item not found';
}

let array = [2, 6, 7, 90, 103]
let numberToFind = 90;

console.log(binarySearch(array, numberToFind))

/* divide and conquer is a recursive algorithm

always going to be working on sub problems, and the divide part is we're going to break it down in each call, and conquer part is we're going to do work on each subset

recursive calls to a subset of the problems

0. recognize base case
1. divide: break problem down during each call
2. conquer: do work on each subset
3. combine: solutions

*/
