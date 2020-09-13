/**
 * @param {number} x
 * @return {boolean}
 *
 * input: number
 * output: boolean
 * constraints: cannot convert number to string, optimize the solution
 * edge cases: negative numbers are false
 */
const isPalindrome = (x) => {
  if (x < 0) return false;

  let log = Math.log10(x);
  let totalDigits = Math.floor(log) + 1;
  let mask = Math.pow(10, totalDigits - 1);

  for (let i = 0; i < totalDigits / 2; i++) {
    let mostSignificantDigit = Math.floor(x / mask);
    let onesPlaceDigit = x % 10;
    console.log(mostSignificantDigit);
    if (mostSignificantDigit !== onesPlaceDigit) {
      return false;
    }
    // Removing most significant digit: 999 % 100 = 99
    x %= mask;
    // Removing the ones place digit: 99 / 10 = 9.9 => 9
    x = Math.floor(x / 10);

    // Remove 2 0's from the mask since we just lost 2 digits
    mask /= 100;
  }
  return true;
};

console.log(isPalindrome(12321));

var isPalindrome2 = function (x) {
  //if x is less than 0, x is not a palindrome, also, if the last digit of the number os 0, the first digit of the number also has to be 0, only 0 satisfy this property
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

  let reversed = 0;
  //Math.floor(i/10) removes the last digit of the integer and repeat until i is exhausted
  for (let i = x; i >= 1; i = Math.floor(i / 10)) {
    console.log(`rev: ${reversed} i: ${i}`);
    //make the last digit of the integer the first
    reversed = reversed * 10 + (i % 10);
  }
  return reversed === x;
};

console.log(isPalindrome2(12321));
