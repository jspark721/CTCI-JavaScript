/**
 * Write a function reverseWords() that takes a message as an array of characters and reverses the order of the words in place. 

example:

const message = [ 'c', 'a', 'k', 'e', ' ',
                'p', 'o', 'u', 'n', 'd', ' ',
                's', 't', 'e', 'a', 'l' ];

reverseWords(message);

console.log(message.join(''));
// Prints: 'steal pound cake'

When writing your function, assume the message contains only letters and spaces, and all words are separated by one space.
*/

const reverseWords = (message) => {
  if (message.length === 0) return message;

  //reverse all the characters
  reverseCharacters(message, 0, message.length - 1);

  //now we need to reverse the words again
  let currentWordStartIndex = 0;
  for (let i = 0; i <= message.length; i++) {
    //when we hit space
    if (message[i] === " " || i === message.length) {
      reverseCharacters(message, currentWordStartIndex, i - 1);
      currentWordStartIndex = i + 1;
    }
  }
  return message.join("");
};

const reverseCharacters = (message, left, right) => {
  while (left < right) {
    let temp = message[left];
    message[left] = message[right];
    message[right] = temp;
    left++;
    right--;
  }

  return message;
};

const message = [
  "c",
  "a",
  "k",
  "e",
  " ",
  "p",
  "o",
  "u",
  "n",
  "d",
  " ",
  "s",
  "t",
  "e",
  "a",
  "l",
];

console.log(reverseWords(message));

//time complexity: O(2n) -- first reversing all the characters, and then going back and reversing the words
//space complexity: O(1) -- not using extra space as we are reversing in place
