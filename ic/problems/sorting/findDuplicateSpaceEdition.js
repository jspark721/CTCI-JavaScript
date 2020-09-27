/**
 * Find a duplicate, Space Edition™.

We have an array of integers, where:

The integers are in the range 1..n1..n
The array has a length of n+1n+1
It follows that our array has at least one integer which appears at least twice. But it may have several duplicates, and each duplicate may appear more than twice.

Write a function which finds an integer that appears more than once in our array. (If there are multiple duplicates, you only need to find one of them.)

input: array
output: number
constraints: optimize for space!
edge cases: empty array
 * 
 */

const findDuplicate = (array) => {
  if (array.length === 0) return -1;

  array.sort((a, b) => a - b);

  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i + 1]) {
      return array[i];
    }
  }
  return 'no duplicates found';
};

console.log(findDuplicate([1, 3, 4, 5, 3])); //3

//time complexity: O(n log n)
//space complexity: O(1)

//using floyd's toroise and hare algorithm

const findDuplicate2 = (nums) => {
  let slow = nums[0];
  let fast = nums[slow];

  //first phase - slow pointer will move 1 step at a time and fast will move 2 steps
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[nums[fast]];
    console.log(`slow: ${slow} fast: ${fast} nums[fast] = ${nums[fast]}`);
  }

  slow = 0;
  //now we'll move one step at a time
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return fast;
};

console.log(findDuplicate2([1, 2, 4, 2, 3]));
//time complexity: O(n)
//space complexity: O(1)

//binary version

//approach is similar to binary search but we divide the range of possible answers in half at each step, rather than dividing the array in half
/*
1. find the number of integers in the input array
2. compare that to the number of possible unique integers in the same range
3. if the number of actual integers is greater than the number of possible integers, we know that there is a dupliate in the range
4. if the number of actual integers is not grater than the number of possible integers, we know there must be duplicate in the range n/2 + 1 ... n
5. at some point, our range will contain just 1 integer which will be our answer
*/

function findRepeat(nums) {
  let low = 1;
  let high = nums.length - 1;

  while (low < high) {
    //divide our range into an upper range and a lower range such that they don't overlap
    let mid = Math.floor((low + high) / 2);
    let lowerRangeBottom = low;
    let lowerRangeTop = mid;
    let upperRangeBottom = mid + 1;
    let upperRangeTop = high;

    let distinctNumbersinLowerRange = lowerRangeTop - lowerRangeBottom + 1;
    //count number of items in lower range
    let itemsInLowerRange = 0;
    nums.forEach((item) => {
      if (item >= lowerRangeBottom && item <= lowerRangeTop) {
        console.log(`item ${item}`);
        itemsInLowerRange++;
      }
    });

    if (itemsInLowerRange > distinctNumbersinLowerRange) {
      //there must be a duplicate in the lower range
      low = lowerRangeBottom;
      high = lowerRangeTop;
    } else {
      //there is a duplicate in the upper range
      low = upperRangeBottom;
      high = upperRangeTop;
    }
  }
  //low and high have collided, we found a number that repeats
  return low;
}

console.log(findRepeat([1, 4, 5, 2, 3, 5]));
