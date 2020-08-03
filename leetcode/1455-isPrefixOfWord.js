/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function (sentence, searchWord) {
  let array = sentence.split(" ");

  for (let i = 0; i < array.length; i++) {
    if (array[i].indexOf(searchWord) === 0) return i + 1;
  }
  return -1;
};

console.log(isPrefixOfWord("i love eating burgers", "burg"));
