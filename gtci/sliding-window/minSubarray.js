/**
 * 
 * Problem:
  - Given an array of positive numbers and a positive number s, find the length
  of the smallest contiguous subarray whose sum is greater than or equal to s.

  Example:
  - Input: [2, 1, 5, 2, 3, 2] s=7
  Output: 2
  Explanation: Smallest subarray with a sum greater than or equal to 7 is [5, 2]
  with length=2.

  approach:
  - the difference between the previous problem and this one is that this sliding window is not fixed
  - we can still use the similar strategy to add up elements until their sum is greater than or equal to s and view them as the sliding window
  - shrink the window until the window's sum is smaller than s again while updating the minimum length
 */

const minSubarray = (nums, s) => {
  let sum = 0;
  let minLength = nums.length;
  let start = 0;
  let end = 0;

  while (start < nums.length) {
    //if current window is less than s, make window longer to the right
    if (sum < s && end < nums.length) {
      sum += nums[end];
      end++;
    } else if (sum >= s) {
      //if current window is greater than s, shrink window from the left
      minLength = Math.min(end - start, minLength);
      sum -= nums[start];
      start++;
    } else {
      //we reached the end
      break;
    }
  }
  return minLength;
};

console.log(minSubarray([2, 1, 5, 2, 3, 2], 7));
console.log(minSubarray([1, 3, 8, 1, 10], 11));

const minSubArrayLength = (arr, s) => {
  let start = 0;
  let end = 0;
  let sum = 0;
  let minLength = 0;

  while (end < arr.length) {
    sum += arr[end];
    while (sum >= s) {
      let length = end - start + 1;
      if (minLength === 0 || length < minLength) {
        minLength = length;
      }
      sum -= arr[start];
      start++;
    }
    end++;
  }
};
