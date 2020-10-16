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
