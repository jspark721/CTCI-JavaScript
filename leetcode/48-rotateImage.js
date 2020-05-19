/*
You are given an n x n 2D matrix representing an image.

Rotate the image by 90 degrees (clockwise).

Note: You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.
*/

const rotateImage = function (matrix) {
  let n = matrix.length;
  for (let row = 0; row < n; row++) {
    for (let col = row; col < n; col++) {
      //switch rows and cols
      let temp = matrix[row][col];
      matrix[row][col] = matrix[col][row];
      matrix[col][row] = temp;
    }
  }

  //swap the column
  for (let i = 0; i < matrix.length; i++) {
    matrix[i].reverse();
  }
  return matrix;

  //  reversecolumn matrix;
  // return matrix.forEach((col) => (col = col.reverse()));
};

const inputMatrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
//output [[7,4,1], [8,5,2], [9,6,3 ]]

console.log(rotateImage(inputMatrix));
