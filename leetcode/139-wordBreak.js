/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

/* bruteforce 

1. loop through the dictionary and check if we can match a word from the dictionary with s
    a. if we can, we splice off the word from the beginning of s and make a recursive call with the shortened s
    b. if not, we move onto the next word
2. if we make it through the dictionary and cannot match a word, we return false, but if at any time a recursive call returned true, we return true
3. base case is if string is empty in which case, we return true


example:
s = 'fastracecar'
dictionary = ['astra','fast', 'race', 'car'];

we would take the first word in the dictionary 'astra', and see if it matches the first part of the s string, if it does, we'll splice it off, if not, we move onto the next letter
'astra' ? 'fastr' -- no, so move on
'fast' ? 'fast' -- yes, so we splice it off

s = 'racecar'
'astra'? 'racec' -- no, so move on
'fast' ? 'race' -- no so move on
'race' ? 'race' -- yes, so we splice it off

s = 'car'
... etc, and when the s becomes empty, we return true;
*/

const wordBreak2 = (s, wordDict) => {
  //initiate the start index to run the loop
  let start = 0;

  //call the recursive function
  return wordBreakRecursive(s, wordDict, start);
};

const wordBreakRecursive = (s, wordDict, start) => {
  //create a new set
  let set = new Set(wordDict);
  //check for the start and s.length
  if (start == s.length) return true;

  //run the loop from start + 1, because the last index of previous recusive plus 1 to move forward, example: leet which ends at index 3, so to run the loop -- it should start at index 4
  for (let end = start + 1; end <= s.length; end++) {
    //check for substring exist in wordDict and also check for recursive return true where we pass end index which is start of the recursive function
    if (
      set.has(s.substring(start, end)) &&
      wordBreakRecursive(s, wordDict, end)
    ) {
      return true;
    }
  }
  return false;
};

console.log(wordBreak2('fastracecar', ['astra', 'fast', 'race', 'car']));

var wordBreak = function (s, wordDict) {
  if (s.length === 0 || wordDict.length === 0) return false;

  let set = new Set(wordDict);
  let dp = new Array(s.length + 1).fill(false);
  dp[0] = true;

  //to optimize
  let maxLength = 0;
  for (let word = 0; word < wordDict.length; word++) {
    maxLength = Math.max(maxLength, wordDict[word].length);
  }

  for (let i = 1; i <= s.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (i - j > maxLength) {
        continue; //skip it if the word is greater than the max length word in the wordDict
      }
      if (dp[j] && set.has(s.substring(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[s.length];
};

//time complexity: O(n^2)
//space complexity: O(2n) -- creating a dp array, and a new set
