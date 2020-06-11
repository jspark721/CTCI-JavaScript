// const reverseInParentheses = (s) => {
//   if (s.length == 0) return '';

//   let stack = [];

//   for (let i = 0; i < s.length; i++) {
//     console.log(stack);
//     if (s[i] == '(') {
//       stack.push([]);
//     } else if (s[i] == ')') {
//       //reverse the substring starting after the last encoutered opening bracket till the current character
//       let reverseString = stack.pop().reverse();
//       let second = [];
//       if (stack.length) {
//         second = stack.pop();
//         console.log(`second ${second}`);
//       }
//       stack.push(second.concat(reverseString));
//     } else {
//       if (!stack.length) {
//         stack.push([s[i]]);
//       } else {
//         stack[stack.length - 1].push(s[i]);
//       }
//     }
//   }
//   console.log(`outside stack ${stack}`);
//   return stack[0].join('');
// };

const reverseParentheses = (s) => {
  let answer = '';
  let pre = '';
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    switch (char) {
      case '(':
        stack.push(answer);
        answer = '';
        break;
      case ')':
        pre = stack.pop();
        answer = pre.concat(reverseStr(answer));
        break;
      default:
        answer += char;
        break;
    }
  }
  return answer;
};

const reverseStr = (s) => {
  return s.split('').reverse().join('');
};

console.log(reverseInParentheses('hi(u(love)i)'));
