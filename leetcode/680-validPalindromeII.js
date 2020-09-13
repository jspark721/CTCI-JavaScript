/**
 * given a non-empty string s, you may delete at most one character. judge whether you can make it a palindrome
 *
 * 'aba' true
 * 'abca' true -- you can delete the character 'c'
 *
 * input: string
 * output: boolean
 * constraints: optimize
 * edge cases: empty string
 */

// have two pointers i & j starting at opposite ends
// if they match, then move the pointers in
// if they are not the same, -- can we remove one of the other and will it be a palindrome?

const validPalindrome = (string) => {
  if (string.length === 0) return true;

  let i = 0;
  let j = string.length - 1;

  while (i < j) {
    if (string[i] !== string[j]) {
      //can we remove the character at i, would the remainder of the string be a palindrome?
      return (
        isPalindrome(string, i + 1, j) || //remove the ith character
        isPalindrome(string, i, j - 1)
      ); //remove the jth character
    }
    i++;
    j--;
  }
  return true;
};

//helper palindrom function after removing a character
const isPalindrome = (string, i, j) => {
  while (i < j) {
    if (string[i] !== string[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};

console.log(validPalindrome('aba'));
console.log(validPalindrome('abca'));
console.log(validPalindrome('tebbem'));
console.log(validPalindrome('heyh'));

//time complexity: O(3n) -- going through it once, then going through again after removing i character, and another time going through after removing j character
//space complexity: O(1) -- not using any extra space
