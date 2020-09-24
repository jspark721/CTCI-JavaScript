/*
Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

*/

const wordSearch = (board, word) => {
  if (board.length === 0 || word.length === 0) return false;

  let result = false;

  function checkWord(i, j, k) {
    if (!result) {
      //we need to check the boundaries
      if (i < 0 || j < 0 || i >= board.length || j >= board[0].length) {
        //its out of boundary
        return;
      }
      //is it a wrong character?
      if (board[i][j] !== word[k]) {
        return;
      }
      //did we find every character from the word? if yes, return true, else, keep exploring characters for all directions
      if (k == word.length - 1) {
        //means we found the correct path
        result = true;
        return;
      }

      board[i][j] = null; //mark our path so we don't go back and forth
      //now check all directions
      checkWord(i + 1, j, k + 1);
      checkWord(i - 1, j, k + 1);
      checkWord(i, j + 1, k + 1);
      checkWord(i, j - 1, k + 1);
      board[i][j] = word[k]; //reset our board! very important
    }
  }

  for (let idx = 0; idx < board.length; idx++) {
    for (let char = 0; char < board[0].length; char++) {
      if (board[idx][char] === word[0]) {
        checkWord(idx, char, 0);
        if (result) return result;
      }
    }
  }
  return result;
};

const board = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E'],
];
const board2 = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'E', 'S'],
  ['A', 'D', 'E', 'E'],
];

console.log(wordSearch(board2, 'ABCESEEEFS'));
