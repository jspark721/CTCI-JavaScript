/*
You are given a string s that consists of lower case English letters and brackets. 

Reverse the strings in each pair of matching parentheses, starting from the innermost one.

Your result should not contain any brackets.

Input: s = "(abcd)"
Output: "dcba"

Input: s = "(u(love)i)"
Output: "iloveu"
Explanation: The substring "love" is reversed first, then the whole string is reversed.

Input: s = "(ed(et(oc))el)"
Output: "leetcode"
Explanation: First, we reverse the substring "oc", then "etco", and finally, the whole string.
*/

//use stack and queue

//loop the whole string and push into a stck for non -")" character
//if we get a ")" in the loop, we pop all the characters until you reach "(" and push them into stack again in sequence to reverse them

const reverseParentheses = (s) => {
  const stack = [];
  for (let char of s) {
    console.log(stack);
    if (char !== ')') {
      stack.push(char);
      continue;
    }

    let c = stack.pop();
    let queue = [];
    while (c !== '(') {
      queue.push(c);
      c = stack.pop();
    }
    while (queue.length) {
      stack.push(queue.shift());
    }
  }
  return stack.join('');
};

console.log(reverseParentheses('(ed(et(oc))el)'));
