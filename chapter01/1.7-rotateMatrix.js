//given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees.

//input: array of arrays (nxn matrix)
//output: rotated matrix - 90 deg clockwise

/* Input: [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

Output: [
  [7, 4, 1],
  [8, 5, 2],
  [9, 6, 3]
];

matrix[row][col]

for i = each row
for j = each column
*/

const rotateMatrix = (matrix) => {
  if (matrix.length === 0) return;

  for (let row = 0; row < matrix.length; row++) {
    for (let col = row; col < matrix.length; col++) {
      let temp = matrix[row][col];
      console.log(
        `temp: ${temp}, row: ${matrix[row][col]}, col: ${matrix[col][row]}`
      );
      matrix[row][col] = matrix[col][row];
      matrix[col][row] = temp;
    }
  }
  matrix.forEach((num) => num.reverse());
  return matrix;
};

console.log(
  rotateMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
