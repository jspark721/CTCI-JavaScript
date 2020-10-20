/*
given a string s, remove duplicate letters so that every letter appears once and only once. you must make sure your results is the smallest in lexicographical order among all possible results

example: s = 'bcabc'
output: 'abc'

input: 'cbacdcbc'
output: 'acdb'
*/

//use a hash table, and put all the letters in the hash
//then iterate over the hash table and add it to the result string
//sort the string

const removeDuplicateLetters = (string) => {
  if (string.length === 0) return "";

  const hash = {};
  for (let i = 0; i < string.length; i++) {
    if (!hash[string[i]]) {
      hash[string[i]] = 0;
    }
    hash[string[i]]++;
  }

  let result = [];
  for (let letter in hash) {
    result.push(letter);
  }

  result.sort();
  return result.join("");
};

console.log(removeDuplicateLetters("bcabc")); // 'abc'
console.log(removeDuplicateLetters("cbacdcbc")); // 'acdb'

//the above solution doesn't work because we're not sorting it alphabetically, we need to get the smallest in lexicographical order

const removeDuplicates = (s) => {
  const counts = {}; //contains each letter count in the string
  const isInStack = {}; //tells whether a letter is already in the stack or not
  const stack = []; //final stack which will contain the string in lexicographical order

  //build counts hash table and initialize isInStack
  for (let i = 0; i < s.length; i++) {
    if (!counts[s[i]]) {
      counts[s[i]] = 0;
    }
    counts[s[i]]++;
    isInStack[s[i]] = false;
  }

  //iterate through the string
  for (let i = 0; i < s.length; i++) {
    let currentLetter = s[i];
    let stackTop = stack[stack.length - 1];

    //decrement counter for every letter each time we see it
    counts[currentLetter]--;

    if (isInStack[currentLetter]) {
      //if currentLetter is already in the stack, just skip it
      continue;
    }

    if (currentLetter < stackTop) {
      //currentLetter comes first lexicographically
      //do more of the stackTop elements exist futher in the string?
      //keep popping the letters off while currentLetter < stackTop
      //or if stackTop does not exist
      while (currentLetter < stackTop && counts[stackTop] > 0) {
        isInStack[stack.pop()] = false;
        stackTop = stack[stack.length - 1];
      }
      //the stack top should now have a letter which is either lexicographically smaller than currentLetter or a letter which does not have any more occurences
      //for example, in 'bbacd', when currentLetter is 'a', stackTop would be 'b'
    }
    //push the currentLetter to stack
    isInStack[currentLetter] = true;
    stack.push(currentLetter);
  }

  //convert stack into a string
  return stack.join("");
};

console.log(removeDuplicates("bcabc"));
console.log(removeDuplicates("cbacdcbc"));
