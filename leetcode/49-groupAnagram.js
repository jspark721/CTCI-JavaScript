/**
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

 */

const groupAnagrams = (array) => {
  if (array.length <= 1) {
    return [array];
  }
  //initialize an empty hash table
  const hash = {};

  //loop through the array and sort each word and push it to the hash table
  for (let i = 0; i < array.length; i++) {
    let word = array[i];
    //sort each word alphabetically
    let sorted = word.split("").sort().join("");
    console.log(`sorted ${sorted}`);

    //if the sorted word does not exist in the hash table yet, add it to the hash with the key of the sorted word and value of the array of the actual word
    if (!hash[sorted]) {
      hash[sorted] = [word];
    } else {
      //if it already exists, just push it to the array that already exists in the value
      hash[sorted].push(word);
    }
  }
  console.log("-------------");
  console.log(hash);
  //so now the hash should have all the items sorted as an anagram, we have to loop through and push those values into a new array
  const result = [];
  for (let key in hash) {
    result.push(hash[key]);
  }
  return result;
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
