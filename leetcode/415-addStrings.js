/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 *
 * Given two non-negative integers num1 and num2 represented as a string, return the sum of num1 and num2
 *
 * Constraints:
 * 1. length of both num1 and num2 is < 5100
 * 2. num1 and num2 contains only digits 0-9
 * 3. both num1 and num2 does not contain any leading zero
 * 4. don't use any built-in BigInt library or convert the inputs into integer directly
 */
const addStrings = function (num1, num2) {
  if (num1.length == 0 && num2.length == 0) return '';
  if (num1.length == 0) return num2;
  if (num2.length == 0) return num1;

  let result = '';
  let carry = 0;
  let i = num1.length - 1;
  let j = num2.length - 1;

  while (i >= 0 || j >= 0) {
    let sum = carry;
    if (i >= 0) {
      sum += num1[i] - '0';
      console.log(`i ${num1[i]} sum ${sum}`);
      i--;
    }
    if (j >= 0) {
      sum += num2[j] - '0';
      console.log(`j ${num2[j]} sum ${sum}`);
      j--;
    }
    result += (sum % 10).toString();
    carry = Math.floor(sum / 10);
    console.log(`carry ${carry} result ${result}`);
  }

  if (carry !== 0) {
    result += carry.toString();
  }

  return result.split('').reverse().join('');
};

console.log(addStrings('15', '27')); // 42

const addStrings2 = (num1, num2) => {
  let carry = 0;
  let sum = '';
  let i = num1.length - 1;
  let j = num2.length - 1;

  for (; i >= 0 || j >= 0 || carry > 0; i--, j--) {
    const digit1 = i < 0 ? 0 : num1[i] - '0';
    const digit2 = j < 0 ? 0 : num2[j] - '0';
    console.log(`digit1 ${digit1} digit2 ${digit2}`);
    let digitSum = digit1 + digit2 + carry;
    console.log(`sum ${sum}`);
    sum = `${digitSum % 10}${sum}`;
    carry = Math.floor(digitSum / 10);
  }

  return sum;
};

console.log(addStrings2('55', '45')); // 100
