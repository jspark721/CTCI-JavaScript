/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  //create a seen hash map
  const map = {};

  //loop through the board and get all the values in board[row][col]
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      let value = board[row][col];
      if (value !== '.') {
        //initialize all the keys for the hash map
        let keyRow = `row ${row} has ${value}`;
        let keyCol = `col ${col} has ${value}`;
        let keyBox = `box ${Math.floor(row / 3)}-${Math.floor(
          col / 3
        )} has ${value}`;

        //if the value of these keys do exist, return false;
        if (map[keyRow] || map[keyCol] || map[keyBox]) {
          return false;
        }
        map[keyRow] = true;
        map[keyCol] = true;
        map[keyBox] = true;
      }
    }
  }
  //none of the values repeat so sudoku is valid
  return true;
};

let sudokuBoard = [
  ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

console.log(isValidSudoku(sudokuBoard)); //false
