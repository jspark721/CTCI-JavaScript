/**
 *
 * write a function for doing an in-place shuffle of an array
 *
 * the shuffle must be "uniform" meaning each item in the original array must have the same probability of ending up in each spot in the final array
 *
 *
 */

//algorithm to get a random number that is >= floor and <= ceiling
function getRandom(floor, ceiling) {
  return Math.floor(Math.random() * (ceiling - floor + 1) + floor);
}

//the first idea
/*
walk through the array and swap each element with a random other element like so:

*/

function naiveShuffle(array) {
  for (let i = 0; i < array.length; i++) {
    let secondIndex = getRandom(0, array.length - 1);

    if (i !== secondIndex) {
      let temp = array[i];
      array[i] = array[secondIndex];
      array[secondIndex] = temp;
    }
  }
}

//better solution,
//choose a random item to move to the first index, then we choose a random other item to move to the second index
//we "place" an item in an index by swapping it with the item currently at that index, instead of going through a loop and switching first and second index

const shuffle = (array) => {
  if (array.length <= 1) return;

  //walk through from beginning to end
  for (let i = 0; i < array.length - 1; i++) {
    //choose a random not yet placed item to place there (could also be the item currently in that spot, must be an item AFTER the current item because the items before has all already been placed)
    let randomChoiceIndex = getRandom(i, array.length - 1);

    //place our random choice in the spot by swapping
    if (i !== randomChoiceIndex) {
      let chosenIndex = array[i];
      array[i] = array[randomChoiceIndex];
      array[randomChoiceIndex] = chosenIndex;
    }
  }
  return array;
};

console.log(shuffle([1, 2, 3, 4, 5]));

//this is known as the Fisher-Yates shuffle or Knuth shuffle
//time complexity: O(n)
//space complexity: O(1)
