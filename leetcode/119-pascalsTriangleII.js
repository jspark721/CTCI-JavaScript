/*

Given an integer rowIndex, return the rowIndexth row of the Pascal's triangle.

Notice that the row index starts from 0.
In Pascal's triangle, each number is the sum of the two numbers directly above it.

Example 1:

Input: rowIndex = 3
Output: [1,3,3,1]
Example 2:

Input: rowIndex = 0
Output: [1]
Example 3:

Input: rowIndex = 1
Output: [1,1]

*/

const getRow = function (rowIndex) {
  let triangle = [];
  let firstRow = [1];
  triangle.push(firstRow);

  for (let i = 1; i < rowIndex + 1; i++) {
    let prev = triangle[i - 1];
    let current = [1];
    for (let j = 1; j < i; j++) {
      current[j] = prev[j - 1] + prev[j];
    }
    current.push(1); //add 1 to the end of the row
    triangle.push(current); //push the row to triangle
  }

  return triangle[rowIndex];
};
