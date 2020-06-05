/*
Given a string, determine the length of the longest possible palindromic string that can be constructed using the characters of the string. 

Example 1:
Input: "aabbc"
Output: 5 
Explanation: The longest palindromes possible are {"abcba", "bacab"}

*/
const longestPalindrome = (s) => {
  let matches = 0;
  let unmatched = new Set();

  for (let i = 0; i < s.length; i++) {
    const c = s[i];

    if (unmatched.has(c)) {
      unmatched.delete(c);
      matches++;
      console.log(unmatched, matches);
    } else {
      unmatched.add(c);
    }
  }

  let length = matches * 2;
  if (unmatched.size !== 0) {
    console.log(length);
    length++; //place 1 unmatched odd in the middle
  }
  return length;
};

console.log(longestPalindrome('abcabcad')); // 5
