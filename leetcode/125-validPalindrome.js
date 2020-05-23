/*
Given a string, determine if it's a palindrome, ignore cases and only alphanumeric characters 

i: string
o: boolean
e: empty string is valid // so return true
c: ignore cases, only alphanumeric
*/

// const isPalindrome = (s) => {
//   if (s.length == 0) return true;

//   let removeNonAlpha = s.replace(/\W/g, '');
//   let reverse = removeNonAlpha.split('').reverse().join('');

//   return reverse.toLowerCase() == removeNonAlpha.toLowerCase();
// };

const isPalindrome = (s) => {
  if (s.length == 0) return true;

  s = s.replace(/\W/g, '').toLowerCase();
  let reverse = s.split('').reverse().join('');

  return s == reverse;
};

const isPalindromeTwoPointer = (s) => {
  if (s.length == 0) return true;

  s = s.replace(/\W/g, '').toLowerCase();
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};
console.log(isPalindromeTwoPointer('A man, a plan, a canal: Panama')); // true
console.log(isPalindromeTwoPointer('race a car')); // false
