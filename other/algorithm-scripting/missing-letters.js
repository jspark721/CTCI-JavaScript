/* find the missing letter in the passed letter range and return it

if all letters are present in the range, return undefined

*/

function missingLetters(str) {
  for (let i = 0; i < str.length; i++) {
    // charcode of current character
    let code = str.charCodeAt(i);
    if (code != str.charCodeAt(0) + i) {
      return String.fromCharCode(code - 1);
    }
  }
  return undefined;
}

console.log(missingLetters('abcdeg')); // return "d"
