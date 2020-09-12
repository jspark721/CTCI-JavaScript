/*
write an efficient function that checks whether any permutation of an input string is a palindrome

you can assume the input string only contains lowercase letters

input: string
output: boolean
edge cases: empty string -- retruns true? or false?
constraints: optimize

create a new set with the string characters, if it's not in the set, just add it, but if it's in the set, delete the character
if the set size is greater than 1, that means the permutation is not a palindrome

*/

const isPalindrome = (string) => {
  if (string.length === 0) return true;

  const set = new Set();
  for (let i = 0; i < string.length; i++) {
    if (set.has(string[i])) {
      set.delete(string[i]);
    } else {
      set.add(string[i]);
    }
  }
  console.log(set);
  return set.size <= 1;
};

console.log(isPalindrome('civic'));
console.log(isPalindrome('ivicc'));
console.log(isPalindrome('tacocat'));
console.log(isPalindrome('civil'));

//time complexity: O(n) -- going through the string once and adding/deleting from the set
//space complexity: O(n) -- using a new set, but we can also look at it this way, there are only so many different characters, the ASCII character set has 128 characters, so it would be O(k) where k is number of unique characters used, which can be treated as a constant so O(1)
