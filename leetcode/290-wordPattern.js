/*
Given a pattern and a string str, find if str follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

Example 1:

Input: pattern = "abba", str = "dog cat cat dog"
Output: true
Example 2:

Input:pattern = "abba", str = "dog cat cat fish"
Output: false
Example 3:

Input: pattern = "aaaa", str = "dog cat cat dog"
Output: false

*/

// const wordPattern = (pattern, str) => {
//   let words = str.split(' ');
//   if (pattern.length !== words.length) return false;

//   let hash = new Map();
//   let seen = [];
//   for (let i = 0; i < pattern.length; i++) {
//     console.log(hash);
//     let word = words[i];
//     let char = pattern[i];
//     if (!hash.has(char)) {
//       if (seen.includes(word)) {
//         return false;
//       } else {
//         hash.set(char, word);
//         seen.push(word);
//       }
//     } else {
//       if (hash.get(char) !== word) return false;
//     }
//   }

//   return true;
// };

const wordPattern = function (pattern, str) {
  str = str.split(' ');

  if (str.length !== pattern.length) return false;

  let hash = {};
  let hash2 = {};

  for (let i = 0; i < pattern.length; i++) {
    console.log(hash);
    console.log(hash2);
    if (hash[pattern[i]] || hash2[str[i]]) {
      if (hash[pattern[i]] !== str[i]) {
        return false;
      }
      if (hash2[str[i]] !== pattern[i]) {
        return false;
      }
    } else {
      hash[pattern[i]] = str[i];
      hash2[str[i]] = pattern[i];
    }
  }

  return true;
};

console.log(wordPattern('abbca', 'dog cat cat horse dog'));
