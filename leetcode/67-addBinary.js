/* given two binary strings, return their sum (also a binary string)

the input strings are both non-empty and contains only characters 1 or 0

input: a = "11" b="1"
output: "100"

input: a = "1010" b = "1011"
output: "10101"

*/

const addBinary = (s1, s2) => {
  let i = s1.length - 1;
  let j = s2.length - 1;

  let s = '';
  let carry = 0;

  while (i >= 0 || j >= 0) {
    let sum = carry;
    if (i >= 0) sum += parseInt(s1[i]);
    if (j >= 0) sum += parseInt(s2[j]);
    i--;
    j--;

    console.log(s);
    s += sum % 2; // sum will either be 0, 1 or 2, if sum is 0 or 2, sum mod 2 will equal 0
    carry = Math.floor(sum / 2); // if sum ends up being 2, then carry will be 1 to get carried over
  }
  if (carry) {
    s += carry;
  }
  return s.split('').reverse().join('');
};

console.log(addBinary('11', '1'));
