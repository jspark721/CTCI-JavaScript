/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  if (s.length === 0) {
    return 0;
  }

  //skip any spaces
  let i = s.length - 1;
  while (i !== 0 && s[i] === ' ') {
    i--;
  }

  //i is now at the first non-space character from the end
  let counter = 0;
  while (i >= 0) {
    if (s[i] !== ' ') {
      counter++;
      i--;
    } else {
      break;
    }
  }
  return counter;
};
