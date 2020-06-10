/*

the count-and-say sequence is the sequence of integers with the first five terms as following

1
11
21
1211
111221

1 is read as "one 1" => 11
11 is read as "two 1" => 21
21 is read as "one 2, one 1" => 1211
1211 is read as "one 1, one 2, two 1" => 111221
111221 is read as "three 1, two 2, one 1" => 312211

Input: 1
Output: "1"
Explanation: This is the base case.

Input: 4
Output: "1211"
Explanation: For n = 3 the term was "21" in which we have two groups "2" and "1", "2" can be read as "12" which means frequency = 1 and value = 2, the same way "1" is read as "11", so the answer is the concatenation of "12" and "11" which is "1211".

*/

// const countAndSay = function (n) {
//   let result = '1';
//   while (n > 1) {
//     let next = '';
//     let count = 1;
//     let current = result[0];

//     for (let i = 1; i < result.length + 1; i++) {
//       console.log(`next: ${next} current: ${current}`);
//       if (result[i] !== current) {
//         next += `${count}${current}`;
//         current = result[i];
//         count = 1;
//       } else {
//         count += 1;
//       }
//     }
//     n--;
//     result = next;
//   }
//   return result;
// };

// const countAndSay = function (n) {
//   let str = '1';

//   for (let i = 1; i < n; i++) {
//     let strArr = str.split('');
//     str = '';
//     let count = 1;

//     //loop through the current nth level line
//     for (let j = 0; j < strArr.length; j++) {
//       //if next digit is different
//       if (strArr[j] !== strArr[j + 1]) {
//         // go to the next non-matching digit
//         str += count + strArr[j];
//         console.log(str);
//         count = 1;
//       } else {
//         count++;
//       }
//     }
//   }
//   return str;
// };

var countAndSay = function (n) {
  let start = '1';
  let result = '';
  let tmp = 1;

  for (let i = 0; i < n - 1; i++) {
    //tmp will count all repeats
    for (let j = 0; j < start.length; j++) {
      if (start[j] != start[j + 1] || j == start.length - 1) {
        result += tmp + start[j];
        tmp = 1;
      } else {
        tmp += 1;
      }
    }
    start = result;
    result = '';
  }
  return start;
};
console.log(countAndSay(8)); //1113213211
