
/*
Implement a function which does run-length encoding.
This means that, given a string, it replaces repeated characters with the number of times they are repeated and the character.

For example: `runlength_encode("aabbbcaa")` should return `"2a3b1c2a"`.
*/
let stringEncoder = function(word) {
	// base case
  if(word == null || word.length === 0) {
  	return ''; //return empty string
  }

  let prevLetter;
  let counter = 0;
  let result = '';

  for(let i = 0; i < word.length; i++) {
  	//if prevLetter does not exists, make the first character as the prevLetter
    if(prevLetter === undefined) {
      prevLetter = word[i];
    }

    //if the current character does not equal the prevLetter, then it starts over with a new letter
    if(word[i] !== prevLetter) {
    	result += counter + prevLetter;
        prevLetter = word[i];
        counter = 0;
    }

    counter++;
  }
  return (result + (counter + prevLetter));
  console.log(result + (counter + prevLetter))
}

let string = 'aaabccdd';

stringEncoder(string);
