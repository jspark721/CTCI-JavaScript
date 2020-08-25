/*
Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it.

Example:

Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]

*/

const generateTriangle = (numRows) => {
  let triangle = [];

  if (numRows === 0) {
    return triangle;
  }

  let firstRow = [1];
  triangle.push(firstRow);

  for (let i = 1; i < numRows; i++) {
    let prevRow = triangle[i - 1];
    let row = [1]; //add 1 to first of each row
    for (let j = 1; j < i; j++) {
      row.push(prevRow[j - 1] + prevRow[j]);
    }
    row.push(1);
    triangle.push(row);
  }
  return triangle;
};
