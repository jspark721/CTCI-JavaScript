/*
write an algorithm such that if an element in an MxN matrix is 0, its entire column and row are set to 0;
*/

const zeroMatrix = (matrix) => {
  if (matrix == null || matrix.length == 0) return;

  let col0 = 1;
  let row = matrix.length;
  let col = matrix[0].length;

  for (let i = 0; i < row; i++) {
    if (matrix[i][0] === 0) {
      col0 = 0;
    }
    for (let j = 1; j < col; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = matrix[0][j] = 0;
      }
    }
  }

  for (let i = row - 1; i >= 0; i--) {
    for (let j = col - 1; j > 0; j--) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
    if (col0 === 0) {
      matrix[i][0] = 0;
    }
  }
  return matrix;
};
console.log(
  zeroMatrix([
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
  ])
);
