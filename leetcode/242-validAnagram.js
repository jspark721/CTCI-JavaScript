/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 *
 * input: string
 * output: boolean
 * edge cases: if first string does not equal the length of second string or emtpy strings
 * constraints: ? what about spaces? do they count?
 */
var isAnagram = function (s, t) {
  if (s === '' && t === '') {
    return true;
  }
  if (s.length !== t.length) {
    return false;
  }

  let hash = {};
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (!hash[char]) {
      hash[char] = 0;
    }
    hash[char]++;
  }

  for (let j = 0; j < t.length; j++) {
    let char = t[j];
    if (!hash[char]) {
      hash[char] = 1;
    } else {
      hash[char]--;
    }
  }
  console.log(hash);
  for (let key in hash) {
    if (hash[key] > 0) {
      return false;
    }
  }
  return true;
};

console.log(isAnagram('told', 'dolt'));
console.log(isAnagram('rat', 'car')); // false
