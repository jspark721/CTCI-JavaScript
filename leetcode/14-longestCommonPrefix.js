/*
write a function to find the longest common prefix string amongst an array of strings
if there is no common prefix, return an empty string ""

input: ["flower", "flow", "flight"];
output: "fl"

all lowercase

i: array
o: string
c: optimize
e: empty input array
*/

// const longestCommonPrefix = (arr) => {
//   if (arr.length == 0) return '';
//DOESNT WORK~~~~~~
//   let hash = {};
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       let char = arr[i][j];
//       if (!hash[char]) {
//         hash[char] = 0;
//       }
//       hash[char]++;
//     }
//   }
//   console.log(hash);
//   for (let key in hash) {
//     if (hash[key] == arr.length) {
//       result.push(key);
//     }
//   }
//   return result.length !== 0 ? result.join('') : '';
// };

const longestCommonPrefix = (strs) => {
  if (strs.length === 0) return '';
  //set the first string in the array as the prefix
  let prefix = strs[0];

  //loop through the rest of the words in the array
  for (let i = 1; i < strs.length; i++) {
    //while the word does not in the prefix using indexOf, pop off the last letter until it equals 0 and is included
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
    }
  }
  return prefix;
};
console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
console.log(longestCommonPrefix(['dog', 'racecar', 'car']));
