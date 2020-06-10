function matrixElementsSum(matrix) {
  let total = 0;
  let zeroArray = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == 0) {
        zeroArray.push(j);
      } else if (zeroArray.indexOf(j) === -1) {
        total += matrix[i][j];
      }
    }
  }
  return total;
}

console.log(
  matrixElementsSum([
    [0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3],
  ])
);
