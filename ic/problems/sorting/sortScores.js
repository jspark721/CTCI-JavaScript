/**
 * Write a function that takes:

an array of unsortedScores
the highestPossibleScore in the game
and returns a sorted array of scores in less than O(n\lg{n})O(nlgn) time.

For example:

const unsortedScores = [37, 89, 41, 65, 91, 53];
const HIGHEST_POSSIBLE_SCORE = 100;

sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE);
// returns [91, 89, 65, 53, 41, 37]

JavaScript
We’re defining n as the number of unsortedScores because we’re expecting the number of players to keep climbing.

And, we'll treat highestPossibleScore as a constant instead of factoring it into our big O time and space costs because the highest possible score isn’t going to change. Even if we do redesign the game a little, the scores will stay around the same order of magnitude.
 */

const sortScores = (unorderedScores, highestScore) => {
  const scoreCounts = new Array(highestScore + 1).fill(0);
  unorderedScores.forEach((score) => {
    scoreCounts[score]++;
  });
  console.log(scoreCounts);

  let sorted = [];
  //for each of the item in the scoreCounts
  for (let score = highestScore; score >= 0; score--) {
    let count = scoreCounts[score];
    console.log(count);
    for (let time = 0; time < count; time++) {
      sorted.push(score);
    }
  }
  return sorted;
};

console.log(sortScores([5, 10, 3, 2, 7], 10));
