/*
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

- If a word begins with a vowel, just add "way" at the end.
*/

function translatePigLatin(str) {
  let consonantRegex = str.match(/^[^aeiou]+/);
  let vowelRegex = /^[aeiou]/;
  if (str[0].match(vowelRegex)) {
    return str + 'way';
  } else if (consonantRegex) {
    return (
      str.substring(consonantRegex[0].length, str.length) +
      consonantRegex +
      'ay'
    );
  }

  return str;
}

console.log(translatePigLatin('california')); // return "aliforniacay"
console.log(translatePigLatin('glove')); // return "oveglay"
