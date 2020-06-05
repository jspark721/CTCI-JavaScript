/**
 * @param {string} s
 * @return {number}
 *
 * input: 'abccccdd'
 * output: 7
 * explanation: one longest palindrome that can be built is dccaccd' whos length is 7
 *
 * a 1
 * b 1
 * c 4
 * d 2
 */
var longestPalindrome = function (s) {
  if (s.length == 0) return 0;

  let count = 0;
  let hashset = new Set();

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (hashset.has(char)) {
      hashset.delete(char);
      count++;
    } else {
      hashset.add(char);
    }
  }

  let length = count * 2;
  if (hashset.size !== 0) {
    length++;
  }
  return length;
};

// find the length of the longest palindrome

//if the character count is even (if it's divisible by 2), we can just add that to the ongoing sum because even number means it can be on both sides to make the palindrome

const palindromeLength = (s) => {
  let result = 0;
  let hash = {};

  for (let char of s) {
    console.log(hash);
    console.log(result);
    hash[char] = (hash[char] || 0) + 1;
    if (hash[char] % 2 == 0) {
      result += 2;
    }
  }
  console.log(result);
  if (s.length > result) {
    return result + 1;
  } else {
    return result;
  }
};

console.log(palindromeLength('abccccb'));
