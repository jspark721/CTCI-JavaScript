/*
Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.

I: string
O: number (the index of the first non repeating character)
*/

const firstUniqueChar = function (s) {
  if (s.length === 0) return -1;
  if (s.length === 1) return 0;

  const hash = {};
  //make a hash table and include the number of times each char occurs in the string
  for (let index of s) {
    if (hash[index]) {
      hash[index]++;
    } else {
      hash[index] = 1;
    }
  }
  //loop through the string and once you find the first non-repeating, so if hash key = 1, return the index of that character
  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]] === 1) {
      return i;
    }
  }
  console.log(hash);
  return -1;
};

console.log(firstUniqueChar('loveleetcode'));
