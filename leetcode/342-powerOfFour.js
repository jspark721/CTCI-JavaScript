/*
Given an integer (signed 32 bits), write a function to check whether it is a power of 4.

Example 1:

Input: 16
Output: true
Example 2:

Input: 5
Output: false

*/
// const powerOfFour = (num) => {
//   if (num === 1 || num === 4) return true;

//   while (1) {
//     if (num / 4 === 4 && num % 4 === 0) {
//       return true;
//     } else if (num / 4 !== 0 && num % 4 === 0) {
//       num = num / 4;
//       console.log(num);
//     } else {
//       return false;
//     }
//   }
// };

const powerOfFour = (num) => {
  if (num === 1) return true;

  while (num >= 4) {
    num = num / 4;
    console.log(num);
    if (num === 1) {
      return true;
    }
  }
  return false;
};

console.log(powerOfFour(64));
console.log(powerOfFour(16));
console.log(powerOfFour(36));
console.log(powerOfFour(1024));
