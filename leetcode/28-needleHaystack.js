/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 * 
 * Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "hello", needle = "ll"
Output: 2
Example 2:

Input: haystack = "aaaaa", needle = "bba"
Output: -1

i: string
o: index number
e: empty needle or haystack // return 0
c: optimize
 */
// var strStr = function (haystack, needle) {
//   if (needle.length == 0 || haystack == needle) return 0;
//   if (needle.length > haystack.length) return -1;

//   for (let i = 0; i < haystack.length; i++) {
//     //when the character in haystack equals first char of needle, check the length of the needle
//     if (haystack[i] === needle[0]) {
//       let nLength = needle.length;
//       let newNeedle = haystack.split('').splice(i, nLength);
//       if (newNeedle.join('') == needle) {
//         return i;
//       }
//     }
//   }
//   return -1;
// };

// console.log(strStr('aaa', 'a')); // returns 1 instead of 0

var strStr = function (haystack, needle) {
  if (needle.length == 0) return 0;
  if (needle.length > haystack.length) return -1;

  for (let i = 0; i < haystack.length; i++) {
    //when the character in haystack equals first char of needle, check the length of the needle
    console.log(haystack.slice(i, i + needle.length));
    if (
      haystack[i] === needle[0] &&
      haystack.slice(i, i + needle.length) === needle
    ) {
      return i;
    }
  }
  return -1;
};

console.log(strStr('hello', 'll'));
console.log(strStr('aaaaa', 'bba'));
console.log(strStr('aaaabbbbaa', 'bbb')); // 4
console.log(strStr('a', 'a')); // 0
console.log(strStr('aaa', 'a')); // 0
console.log(strStr('', 'a')); // -1
