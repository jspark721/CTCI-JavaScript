/* given a string s, find the longest palindromic substring in s. you may assume that the maximum length of s is 1000 

input: "babad"
output: "bab"
note: "aba" is also a valid answer

input: "cbbd"
output: "bb"

input: string
output: string
constraints: optimize
edge case: empty string

*/

//use two pointers

const longestPalindrome = (s) => {
  if (s.length == null || s.length < 1) return '';

  let max = '';
  for (let i = 0; i < s.length; i++) {
    //this loop is to take into account different palindromes like 'aba' and 'abba'
    for (let j = 0; j < 2; j++) {
      let left = i;
      let right = i + j;
      while (s[left] && s[left] === s[right]) {
        left--;
        right++;
      }

      //here imagine we get into string like 'sabbad', then right = 5, left = 0, and actual length of 'abba' should be 4
      // 5 - 0 - 1 = 4
      if (right - left - 1 > max.length) {
        max = s.substring(left + 1, right);
      }
    }
  }

  return max;
};

console.log(longestPalindrome('ccd'));
console.log(longestPalindrome('cbbd'));
