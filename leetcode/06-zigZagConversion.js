/*
Given a string s and an integer value rows return the "zigzag" encoding of s read off row-by-row.

Example 1:
Input:
s = "YELLOWPINK"
rows = 4

Output: "YPEWILONLK"
Explanation: There are 4 rows in the zigzag formatted string.

Y     P    (row 1: "YP")
E   W I    (row 2: "EWI")
L O   N    (row 3: "LON")
L     K    (row 4: "LK")

*/

const zigzag = (s, rows) => {
  const output = Array(rows).fill('');

  let row = 0;
  let down = false;

  for (let i = 0; i < s.length; i++) {
    output[row] += s[i];
    console.log(output);
    console.log(`row: ${row} rows: ${rows}`);
    if (row == 0 || row == rows - 1) {
      down = !down;
    }
    if (rows > 1) {
      if (down == true) {
        row++;
      } else {
        row--;
      }
    }
  }
  return output.join('');
};

// console.log(zigzag('yellowpink', 4));

const convert = (s, numRows) => {
  let result = [];
  let row = 0;
  let down = false;

  for (let i = 0; i < s.length; i++) {
    //append letter to current row
    result[row] = (result[row] || '') + s[i];
    if (down) {
      row--;
      if (row === 0) {
        down = !down;
      } // reverse direction if goingUp and reaching top
    } else {
      row++;
      if (row === numRows - 1) {
        down = !down; // reverse direction after reaching bottom
      }
    }
  }
  return result.join('');
};

console.log(convert('yellowpink', 4));
