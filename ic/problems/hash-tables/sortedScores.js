/**
 *  Write a function that takes:
 *    1. an array of unsortedScores
 *    2. the highestPossibleScore in the game
 *  and returns a sorted array of scores in less than O(n log n) time
 *
 * input: array, number
 * output: sorted array
 * constraints: optimize -- get it to O(n) time
 * edge cases: empty scores array
 */

//highest possible score = 100
// scores are between 0 and 100

const sortedScores = (scores, highestScore) => {
  //edge case, if scores are empty, just return
  if (scores.length === 0) return scores;

  const scoreCounts = new Array(highestScore + 1).fill(0);
  scores.forEach((score) => {
    scoreCounts[score]++;
  });

  const sortedScores = [];
  //for each item in score counts
  for (let score = highestScore; score >= 0; score--) {
    let count = scoreCounts[score];

    //for the number of times the score occurs
    for (let time = 0; time < count; time++) {
      sortedScores.push(score);
    }
  }
  return sortedScores;
};

console.log(sortedScores([37, 89, 41, 65, 91, 54], 100)); // returns [91,89,65,31,37]

//time complexity: O(2n)
//space complexity: O(n) creating two new arrays

//the above solution uses extra space, can we sort the array in place?

const sortScores = (scores, highscore) => {
  if (scores.length < 2) {
    return scores;
  }

  const mid = Math.floor(scores.length / 2);
  const left = sortScores(scores.slice(0, mid));
  const right = sortScores(scores.slice(mid));

  function merge(leftArray, rightArray) {
    let result = [];
    while (leftArray.length && rightArray.length) {
      if (leftArray[0] > rightArray[0]) {
        result.push(leftArray.shift());
      } else {
        result.push(rightArray.shift());
      }
    }
    return result.concat(leftArray, rightArray);
  }
  return merge(left, right);
};

console.log(sortScores([30, 40, 20, 50, 90], 100));

//time complexity: O(n log n)
//space complexity: O(1)
