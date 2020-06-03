/* given a set of strings words and a string pattern, return a list of all the strings in words that matches the pattern of the pattern string

input: 
words = ['aa', 'bb']
pattern = 'cc'

output:
['aa','bb']

explanation: both string repeats letters just as the pattern string does

Input:
words = ["aac", "bbc", "bcb", "yzy"]
pattern = "ghg"
Output: ["bcb", "yzy"]

I: array and string
O: new array
C: optimize
E: empty words array
*/

const findAndReplacePattern = (words, pattern) => {
  const result = [];
  if (words.length == 0) return result;

  let patternSize = pattern.length;
  let newArr = words.filter((word) => word.length == patternSize);

  let hash = {};
  let patternArr = pattern.split('');
  for (let i = 0; i < newArr.length - 1; i++) {
    if (!hash[newArr[i][i]]) {
      hash[newArr[i][i]] = patternArr[i];
    }
    console.log(hash);
  }
};

console.log(findAndReplacePattern(['aac', 'bb', 'bcb', 'yzy', 'bbc'], 'ghg'));
