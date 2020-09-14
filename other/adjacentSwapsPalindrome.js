/**
 * Given a string, what is the minimum number of adjacent swaps required to convert a string into a palindrome. If not possible, return -1.
 */

/*
Example 1:

Input: "mamad"
Output: 3
Example 2:

Input: "asflkj"
Output: -1
Example 3:

Input: "aabb"
Output: 2
Example 4:

Input: "ntiin"
Output: 1
Explanation: swap 't' with 'i' => "nitin"
 */

// const isPalindrome = (str) => {
//   if (str.length === 0) return -1;

//   let hash = new Set();

//   for (let i = 0; i < str.length; i++) {
//     if (hash.has(str[i])) {
//       hash.delete(str[i]);
//     } else {
//       hash.add(str[i]);
//     }
//   }
//   return hash.size < 2;
// };

// const swap = (str, i, j) => {
//   let temp = str[i];
//   str[i] = str[j];
//   str[j] = temp;
// };

// const adjacentSwap = (str) => {
//   let totalSwaps = 0;

//   if (!isPalindrome(str)) return -1;

//   let i = 0;
//   let j = str.length - 1;

//   while (i < j) {
//     if (str[i] !== str[j]) {
//       let temp = j;
//       console.log(
//         `${str}, i: ${str[i]}, j: ${str[j]}, temp: ${str[temp]}, ${totalSwaps}`
//       );
//       while (str[temp] !== str[i] && i < temp) {
//         temp--;
//         //when no matching character found
//         if (temp == i) {
//           swap(str, i, i + 1);
//           totalSwaps++;
//         } else {
//           //when matching character found, swap until temp reaches j position
//           while (temp < j) {
//             swap(str, temp, temp + 1);
//             totalSwaps++;
//             temp++;
//           }
//           i++;
//           j--;
//         }
//       }
//     } else {
//       //when characters are equal, just move on
//       i++;
//       j--;
//     }
//   }
//   return totalSwaps;
// };
// console.log(adjacentSwap('aabb')); //2

const countSwap = (str) => {
  if (str.length === 0) return -1;

  let n = str.length;
  //convert string to an array so we can swap since strings are immutable
  let arr = str.split("");
  //counter to count minimum swap
  let totalSwaps = 0;
  let odd = 0;
  //a loop which run in half way
  for (let i = 0; i < Math.floor(n / 2); i++) {
    let left = i;
    let right = n - i - 1;
    console.log(
      `i: ${i} - ${arr}, left: ${left} - ${arr[left]}, right: ${right} - ${arr[right]}, totalSwaps: ${totalSwaps}`
    );

    //a loop which run from right pointer to left pointer
    while (left < right) {
      //if both characters are same, then break the loop,
      if (arr[left] === arr[right]) {
        break;
      } else {
        //if not same, we have to move right pointer one step to left
        right--;
      }
    }

    //if both pointers are at the same position, we don't have sufficient characters to make palindrome a string
    if (left == right) {
      odd++;
      if (odd > 1) {
        return -1;
      }
      while (left < Math.floor(n / 2)) {
        let t = arr[left];
        arr[left] = arr[left + 1];
        arr[left + 1] = t;
        totalSwaps++;
        left++;
      }
    } else {
      while (right < n - i - 1) {
        let temp = arr[right];
        arr[right] = arr[right + 1];
        arr[right + 1] = temp;
        right++;
        totalSwaps++;
      }
    }
  }
  return totalSwaps;
};

console.log(countSwap("mamad")); //3
