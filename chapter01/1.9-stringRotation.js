/*
String Rotation: assume you have a method isSubstring which checks if one word is a substring of another. Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring (e.g. "waterbottle" is a rotation of "erbottlewat")

input: two strings
output: boolean
constraints: optimize
edge cases: empty strings

*/

const isSubstring = (str1, str2) => {
  if (str1.length === 0 || str2.length === 0 || str2.length !== str1.length) {
    return false;
  }

  return (str2 + str2).includes(str1);
};

console.log(isSubstring("waterbottle", "erbottlewat")); //true
console.log(isSubstring("harvey", "arveyh")); // true
console.log(isSubstring("helloworld", "wrldhelloo")); //false

//Time complexity: O(n) -- going through the new string once to see if str1 is included
//Space complexity: O(n) -- creating a new string (str2 + str2)
