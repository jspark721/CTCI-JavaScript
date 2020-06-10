/*
given a string, deteermine if a permutation of the string could form a palindrome

input: "code"
output: false

input: "aab"
output: true;

input: string
output: boolean
edge cases: empty strin input
constraints: optimize

*/

const palindromePermutation = (string) => {
  if (string.length == 0) return;

  let unmatched = new Set();

  for (let i = 0; i < string.length; i++) {
    if (unmatched.has(string[i])) {
      unmatched.delete(string[i]);
    } else {
      unmatched.add(string[i]);
    }
  }
  return unmatched.size <= 1;
};

console.log(palindromePermutation('civic')); //true
console.log(palindromePermutation('carerac')); //true
console.log(palindromePermutation('code')); //false
