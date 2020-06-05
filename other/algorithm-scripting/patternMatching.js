/*
Given a set of strings words and a string pattern return a list of all of the strings in words that matches the pattern of the pattern string.

Example 1:
Input:
words = ["aa", "bb"]
pattern = "cc"
Output: ["aa", "bb"]
Explanation: Both strings repeat letters just as the pattern string does.


*/

const findAndReplacePattern = (words, pattern) => {
  const result = [];

  words.forEach((word) => {
    if (isAligned(word, pattern)) {
      result.push(word);
    }
  });

  return result;
};

const isAligned = (word, pattern) => {
  if (word.length !== pattern.length) return false;

  const wordToPattern = Array(256).fill(0);
  const patternToWord = Array(256).fill(0);

  //for every step, we build a cross mapping and see if it breaks
  for (let i = 0; i < word.length; i++) {
    let wordChar = word.charAt(i).charCodeAt(0);
    let patternChar = pattern.charAt(i).charCodeAt(0);

    if (wordToPattern[wordChar] == 0) {
      wordToPattern[wordChar] = patternChar;
    }

    if (patternToWord[patternChar] == 0) {
      patternToWord[patternChar] = wordChar;
    }

    if (
      wordToPattern[wordChar] != patternChar ||
      patternToWord[patternChar] !== wordChar
    ) {
      return false;
    }
  }
  return true;
};

console.log(findAndReplacePattern(['aaa', 'bb', 'zhz', 'xyx'], 'ghg'));
