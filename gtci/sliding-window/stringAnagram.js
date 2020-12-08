/**
 * problem: given a string and a pattern, find all anagrams of the pattern in the given string
 * return them as a list of anagrams' starting indices
 *
 * input: string="ppqp" pattern="pq"
 * output: [1,2]
 *
 * input: string="abbcabc" pattern="abc"
 * output: [2,3,4]
 *
 * input: s="cbaebabacd" p="abc"
 * output: [0,6]
 * explanation: the substring with start index = 0 is "cba" which is an anagram of "abc"
 * the substring with start index = 6 is "bac" which is an anagram of "abc"
 *
 * time complexity: O(n)
 * space complexity: O(m) where m is the number of distinct characters in the map
 */

//1. build a hash map consisting of characters and their counts, save the number of unique characters as uniqueChars
//2. iterate the input s using 2 pointers left and right. make adjustments in hash and uniqueChars
//3. keep expanding the right pointer, when the desired searching length is reached, we can start shrinking left pointer
//4. unlike other sliding window problems, left pointer at max would only move 1 position

const findAnagrams = (string, pattern) => {
  let hash = {};
  let uniqueChars = 0;

  for (let char of pattern) {
    if (!hash[char]) {
      uniqueChars++;
      hash[char] = 1;
    } else {
      hash[char]++;
    }
  }
  let result = [];
  let left = 0;
  let right = 0;
  while (right < string.length) {
    if (hash[string[right]]) {
      hash[string[right]]--;
    }
    if (hash[string[right]] === 0) {
      uniqueChars--;
    }
    if (uniqueChars == 0) {
      result.push(left);
    }
    if (right - left + 1 === pattern.length) {
      if (hash[string[left]]) {
        hash[string[left]]++;
      }
      if (hash[string[left++]] == 1) {
        uniqueChars++;
      }
    }
    right++;
  }
  return result;
};

console.log(findAnagrams('ppqp', 'pq'));
