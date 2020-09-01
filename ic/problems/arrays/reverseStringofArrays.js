/**
 * Write a function that takes an array of characters and reverses the letters in place. ↴
 */

//strings are immutable, so we have to make the string into an array to reverse it in place
//The goal of this question is to practice manipulating strings in place. Since we're modifying the input, we need a mutable ↴ type like an array, instead of JavaScript's immutable strings.

const reverseString = (arr) => {
  if (arr.length === 0) {
    return arr;
  }

  //reverse in place, so we can take two pointer approach and swap it until we reach the middle
  let mid = Math.floor(arr.length / 2);
  let left = 0;
  let right = arr.length - 1;

  while (left <= mid) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
  return arr;
};

//  ['h','e','y'] => ['y','e','h']
console.log(reverseString(["h", "e", "l", "l", "o"]));
console.log(reverseString(["j", "u", "l", "i", "e"]));
console.log(reverseString(["f", "o", "o", "d"]));

//time complexity: O(n/2) because we're only going through the middle of the list
//space complexity: O(1) because it's switched in place
