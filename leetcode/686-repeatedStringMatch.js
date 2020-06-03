/* given two strings A and B, find the minimum number of times A has to be repeated such tat B is a substring of it. If no such solution, return -1

input: A = 'abcd' B = 'cdabcdab'
output: 3
explanation because by repeating A three times, abcdabcdabcd, B is a substring of it and B is not a substring of A if it's only repeated two times

i: strings
o: number
c: optimize
e: empty strings
*/

const repeatedStringMatch = (a, b) => {
  if (a.length == 0 || b.length == 0) return 0;

  let count = Math.ceil(b.length / a.length);
  if (a.repeat(count).includes(b)) return count;
  if (a.repeat(count + 1).includes(b)) return count + 1;

  return -1;
};

console.log(repeatedStringMatch('abcd', 'cdabcdab'));
