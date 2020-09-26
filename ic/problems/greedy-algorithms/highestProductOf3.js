/**
 * Given an array of integers, find the highest product you can get from three of the integers.

The input arrayOfInts will always have at least three integers.
 */

function highestProductOf3(array) {
  if (array.length < 3) {
    throw error('invalid input');
  }

  array.sort((a, b) => b - a);

  let highestProductOf2 = array[0] * array[1];
  let lowestProductOf2 = array[array.length - 1] * array[array.length - 2];

  //because there could be 2 negative numbers
  let maxProductOf2 = Math.max(highestProductOf2, lowestProductOf2);

  if (highestProductOf2 < lowestProductOf2) {
    return maxProductOf2 * array[0];
  }

  return maxProductOf2 * array[2];
}

console.log(highestProductOf3([1, 2, 3, 4])); //24
console.log(highestProductOf3([-5, 4, 8, 2, 3])); //96
console.log(highestProductOf3([-10, 1, 3, 2, -10])); // 300

//time complexity: O(n log n) because of the sorting
//space complexity: O(1)

//we can optimize, and do better - get O(n) by not using sorting but using a for loop to keep track of the highest and lowest numbers

const highestProductOfThree = (array) => {
  if (array.length < 3) {
    throw error('invalid input');
  }

  //just initialize the variables
  let highest = Math.max(array[0], array[1]);
  let lowest = Math.min(array[0], array[1]);

  let highestProductOf2 = array[0] * array[1];
  let lowestProductOf2 = array[0] * array[1];

  let highestProductOf3 = array[0] * array[1] * array[2];

  for (let i = 2; i < array.length; i++) {
    let current = array[i];
    highest = Math.max(highest, current);
    lowest = Math.min(lowest, current);
    highestProductOf2 = Math.max(
      highestProductOf2,
      current * highest,
      current * lowest
    );
    lowestProductOf2 = Math.min(
      lowestProductOf2,
      current * highest,
      current * lowest
    );
    highestProductOf3 = Math.max(
      highestProductOf3,
      current * highestProductOf2,
      current * lowestProductOf2
    );
  }
  return highestProductOf3;
};

console.log(highestProductOfThree([-10, 1, 3, 2, -10]));
console.log(highestProductOfThree([3, 4, 2, 1, 5]));

//time complexity: O(n)
//space complexity: O(1)
