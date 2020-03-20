/*
generate anagrams

takes a string and returns an array of all anagrams of that string
*/

let anagrams = [];

let genAnagrams = (word, anagram = '') => {
  //base case -- if the word is empty
  if(!word) {
    anagrams.push(anagram);
  }
  for(let i = 0; i < word.length; i++) {
    anagram += word[i];
    genAnagrams(word.slice(0,i) + word.slice(i + 1), anagram); //slice out that current index
    anagram = anagram.slice(0, anagram.length - 1) // slice the last letter
  }
}

genAnagrams('ABC');
console.log(anagrams);
