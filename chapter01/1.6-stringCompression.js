//compress the string if there is a repeated character - put the number in (ex: aabcccaa would return a2b1c3a2)

//string only has uppercase and lowercase letters (a-z)

//input: string
//output: string
//constraints: optimize
//edge cases: empty string, compressed string that's same length as the original string

const compress = function (str) {
  let compressedStr = '';
  let charCount = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      charCount++;
    } else {
      compressedStr += str[i] + charCount;
      charCount = 1;
    }
  }
  if (compressedStr.length >= str.length) {
    return str;
  }
  return compressedStr;
};

//test
console.log(compress('aaAAaa'));
console.log(compress('aabcccccaaa'));
console.log(compress('bbbrrrrb'));
console.log(compress('heeeeyyyyyy'));
