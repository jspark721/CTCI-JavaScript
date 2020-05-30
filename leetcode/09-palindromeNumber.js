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
  if (x < 0) return false;

  let rev = 0;
  for (let i = x; i >= 1; i = Math.floor(i / 10)) {
    console.log(`rev: ${rev} i: ${i}`);
    rev = rev * 10 + (i % 10);
  }
  return rev === x;
};

console.log(isPalindrome2(12321));
