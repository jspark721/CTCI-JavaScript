/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// this solution doesn't work when multiple zeroes next to eachother
// var moveZeroes = function (nums) {
//   //initialize how many zeroes in the array
//   let zeroes = 0;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 0) {
//       //remove the 0 from the array index
//       nums.splice(i, 1);
//       //increase number of zeroes
//       zeroes++;
//     }
//   }
//   console.log(nums);
//   //add zeroes to the end of the array
//   for (let j = zeroes; j > 0; j--) {
//     nums.push(0);
//   }
//   return nums;
// };

// swap
// const moveZeroes = function (nums) {
//   let zeroes = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 0) {
//       zeroes++;
//     } else if (zeroes > 0) {
//       let num = nums[i];
//       nums[i] = 0;
//       nums[i - zeroes] = num;
//     }
//   }
//   return nums;
// };

const moveZeroes = (nums) => {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[index] = nums[i];
      console.log(index);
      index++;
      console.log(`index ${index}`);
    }
  }

  for (let j = index; j < nums.length; j++) {
    console.log(j);
    nums[j] = 0;
  }

  return nums;
};
console.log(moveZeroes([1, 2, 0, 4]));
console.log(moveZeroes([0, 0, 1]));
