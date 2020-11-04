/**
 * problem: given an array, find the average of all contiguous subarrays of size k
 *
 * example
 * input: [1,3,2,6,-1,4,1,8,2] k=5
 * output: [2.2,2.8,2.4,3.6,2.8]
 *
 * approach: view each contiguous subarray as a sliding window of k elements
 * as we move to the next subarray, slide the window by one element to reuse the sum from previous array
 *
 * time complexity: O(n)
 * space complexity: O(k)
 */

const averageSubArray = (array, k) => {
  if (array.length === 0) return array;

  //sum keeps track of the sum of a window while start keeps track of its start index
  let sum = 0;
  let result = [];

  for (let i = 0; i < k; i++) {
    sum += array[i];
  }
  for (let i = k; i < array.length; i++) {
    sum = sum - array[i - k] + array[i];
    result.push(sum / k);
  }
  return result;
};

console.log(averageSubArray([1, 3, 2, 6, -1, 4, 1, 8, 2], 5));
