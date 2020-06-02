/**
 * @param {Array<Array<number>>} matrix
 * @return {Array<Array<number>>}
 */
const rotate = (matrix) => {
  const rotated = [];
  if (matrix.length === 0) return rotated;

  for (let row = 0; row < matrix.length; row++) {
    for (let col = row; col < matrix.length; col++) {
      let temp = matrix[row][col];

      matrix[row][col] = matrix[col][row];
      matrix[col][row] = temp;
    }
  }

  return matrix.forEach((item) => item.reverse());
};

console.log(
  rotate([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ])
);
