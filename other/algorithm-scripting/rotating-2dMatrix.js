/**
 * @param {Array<Array<number>>} matrix
 * @return {Array<Array<number>>}
 */
// const rotate = (matrix) => {
//   if (matrix.length === 0) return [];

//   for (let row = 0; row < matrix.length; row++) {
//     for (let col = row; col < matrix.length; col++) {
//       let temp = matrix[row][col];

//       matrix[row][col] = matrix[col][row];
//       matrix[col][row] = temp;
//     }
//   }

//   return matrix.forEach((item) => item.reverse());
// };

// const rotate = (matrix) => {
//   const size = matrix.length - 1;

//   for (let layer = 0; layer < Math.floor(matrix.length / 2); layer++) {
//     for (let i = layer; i < size - layer; i++) {
//       const topFence = matrix[layer][i]; // starts at top left of layer
//       const rightFence = matrix[i][size - layer]; // starts at top right of layer
//       const bottomFence = matrix[size - layer][size - i]; // starts at bottom right of layer
//       const leftFence = matrix[size - i][layer]; // starts at bottom left of layer

//       // rotate 90 degrees clockwise element by element
//       matrix[layer][i] = leftFence; // set value walking top fence
//       matrix[i][size - layer] = topFence; // set value walking right fence
//       matrix[size - layer][size - i] = rightFence; // set value walking bottom fence
//       matrix[size - i][layer] = bottomFence; // set value walking left fence
//     }
//   }

//   return matrix;
// };

const rotate = function (matrix) {
  let size = matrix.length - 1;
  for (let layer = 0; layer < Math.floor(matrix.length / 2); layer++) {
    for (let num = layer; num < size - layer; num++) {
      let topLeft = matrix[layer][num];
      let topRight = matrix[num][size - layer];
      let bottomRight = matrix[size - layer][size - num];
      let bottomLeft = matrix[size - num][layer];

      matrix[layer][num] = bottomLeft;
      matrix[num][size - layer] = topLeft;
      matrix[size - layer][size - num] = topRight;
      matrix[size - num][layer] = bottomRight;
    }
  }
  return matrix;
};

console.log(
  rotate([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ])
);
