/*
calculate the hourglass sum for every hourglass in the 2D array and return the maximum hourglass sum

input= [
  [-9 ,-9, -9,  1, 1, 1 ],
  [0, -9,  0,  4, 3, 2 ],
  [-9, -9, -9,  1, 2, 3],
  [0,  0,  8,  6, 6, 0],
  [0,  0,  0, -2, 0, 0],
  [0,  0,  1,  2, 4, 0]
]

16 hourglass sums are

-63, -34, -9, 12, 
-10,   0, 28, 23, 
-27, -11, -2, 10, 
  9,  17, 25, 18

output: return 28 as that's the highest sum
*/

const hourglassSum = (arr) => {
  if (arr.length === 0) return;

  let resultsSum = [];
  let sum;
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = 0; j < arr[0].length - 2; j++) {
      sum =
        arr[i][j] +
        arr[i][j + 1] +
        arr[i][j + 2] +
        arr[i + 1][j + 1] +
        arr[i + 2][j] +
        arr[i + 2][j + 1] +
        arr[i + 2][j + 2];
      resultsSum.push(sum);
    }
  }
  let maxSum = -Infinity;
  for (let i = 0; i < resultsSum.length; i++) {
    maxSum = Math.max(resultsSum[i], maxSum);
  }

  return maxSum;
};
const array2D = [
  [-9, -9, -9, 1, 1, 1],
  [0, -9, 0, 4, 3, 2],
  [-9, -9, -9, 1, 2, 3],
  [0, 0, 8, 6, 6, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

console.log(hourglassSum(array2D));

//time complexity: O(N*M) but we are also iterating through the results array again
//space complexity: O(N) creating a new results array

//to avoid using extra space, we can avoid creating a results array and just only store the maxSum only if it's greater than the current sum

const hourglassSumSaveSpace = (arr) => {
  if (arr.length === 0) return;

  let sum;
  let maxSum = -Infinity;
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = 0; j < arr[0].length - 2; j++) {
      sum =
        //top of hourglass
        arr[i][j] +
        arr[i][j + 1] +
        arr[i][j + 2] +
        //middle of hourglass
        arr[i + 1][j + 1] +
        //bottom of hourglass
        arr[i + 2][j] +
        arr[i + 2][j + 1] +
        arr[i + 2][j + 2];

      if (sum > maxSum) {
        maxSum = sum;
      }
    }
  }

  return maxSum;
};
console.log(hourglassSumSaveSpace(array2D));
