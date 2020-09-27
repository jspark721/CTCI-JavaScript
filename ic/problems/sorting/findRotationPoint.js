/**
 * write a function for finding the index of the "rotation point" which is where I started working from the beginning of the dictionary. this array is huge (there are lots of words i don't know) so we want to be efficient here
 *
 * assume all words are lowercased
 *
 * input: array of words
 * output: index
 * constraints: optimize
 * edge cases: empty dictionary
 */

//javascript uses the so-called 'dictionary' or 'lexicographical order so strings can be compared letter by letter
//'Z' > 'A' will return true
//'Glow' > 'Glee' will return true

const findRotationPoint = (dictionary) => {
  if (dictionary.length === 0) return -1;

  for (let i = 0; i < dictionary.length; i++) {
    if (dictionary[i] > dictionary[i + 1]) {
      return i + 1;
    }
  }
  return false;
};

//time complexity: O(n)
//space complexity: O(1)

//but we can do better, we can get it to O(lg n) time

//at each iteration, we go right if the item we're looking at is greater than the first item, and we go left if the item we're on is less than the first time

const rotationPointBinary = (words) => {
  if (words.length === 0) return;

  let left = 0;
  let right = words.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (words[mid] >= words[0]) {
      //go right
      left = mid;
    } else if (words[mid] <= words[0]) {
      //go left
      right = mid;
    }
    console.log(`left ${left} right ${right}`);
    if (left === mid) break;
  }
  return right;
};
const words = [
  'ptolemaic',
  'retrograde',
  'supplant',
  'undulate',
  'xenoepist',
  'asymptote', // <-- rotates here!
  'babka',
  'banoffee',
  'engender',
  'karpatka',
  'othellolagkage',
];

console.log(rotationPointBinary(words));
console.log(rotationPointBinary([100, 200, 1, 2, 3, 5]));
console.log(rotationPointBinary([1, 2, 3]));

//time complexity: O(log n)
//space complexity: O(1)
