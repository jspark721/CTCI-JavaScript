/* find duplicate, Space Edition

practice question from Interview Cake

We have a list of integers, where:
  1. the integers are in the range 1..
  2. The list has a length of n + 1

It follows that our list has at least one integer which appears at least twice. But it may have several duplicates and each duplicate may appear more than twice

Write a function which finds an integer that appears more than once in our list (if there are multiple duplicates, you only need to find one of them)

We need to OPTIMIZE FOR SPACE!

*/

// do one walk through of the array, using a set to keep track of which items we've seen!

function findRepeat(numbers) {
const numbersSeen = new Set();
for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  if (numbersSeen.has(number)) {
    return number;
  }
  numbersSeen.add(number);
}

// Whoops--no duplicate
throw new Error('no duplicate!');
}

let array = [1, 3, 7, 5, 5, 21, 8, 7];

console.log(findRepeat(array));

// O(n) time and O(n) space -- O(n) time is good but it's kind of high space-wise. We can probably do O(1) for space complexity

/* BRUTE FORCE take on the algorithm -- taking each number in the range 1..n and, for each element, walk through the array to see if it appears twice */

function findDuplicate(numbers) {
  for(let needle = 1; needle < numbers.length; needle++) {
    let hasBeenSeen = false;
    for(let i = 0; i < numbers.length; i++) {
      const number = numbers[i];
      if(number === needle) {
        if(hasBeenSeen) {
          return number;
        } else {
          hasBeenSeen = true;
        }
      }
    }
  }

  throw new Error('no duplicate!');
}

console.log(findDuplicate(array));

// this is a nested for loop so it has time complexity of O(n2) even though space is O(1)

/* we can get better time complexity of O(n log n) by sorting! if we sorted the array, any duplicates would be right next to each-other

  1. do an in-place sort of the array (ex: a merge sort)
  2. walk through the now-sorted array from left to right
  3. return as soon as we find two adjacent numbers that are the same


with this problem, we're looking for a needle (a repeated number) in a haystack (array) -- what if instead of cutting the haystack in half, we cut the set of possibilities for the needle in half?

how can we test whether the actual needle is in the first half of that range (1 .. n/2) or the second half (n/2 + 1..n)?

we can separate the input array into two subarrays -- each subarray has a number of elements as well as a number of possible distinct integers

don't do it recursively because it'll incure a space cost in the call stack -- so do it iteratively

 */

 /* THE SOLUTION

  1. find the number of integers in our input array which lie within the range 1..n/2
  2. compare that to the number of possible unique integers in the same range
  3. if the number of actual integers is greater than the number of possible integers, we know there's a duplicate in the range 1..n/2 so we iteratively use the same approach on that range
  4. if the number of actual integers is NOT GREATER than the number of possible integers, we know there must be duplicate in the range n/2 + 1..n
  5. at some point, our range will contain just 1 integer which will be our answer

 */

 function findRepeat2(numbers) {
   let floor = 1;
   let ceiling = numbers.length-1;

   while (floor < ceiling) {
     //divide the range 1..n into an upper range and lower range so that they don't overlap
     const midpoint = Math.floor(floor + ((ceiling-floor) / 2));
     const lowerRangeFloor = floor;
     const lowerRangeCeiling = midpoint;
     const upperRangeFloor = midpoint + 1;
     const upperRangeCeiling = ceiling;

     const distinctPossibleIntegerinLower = lowerRangeCeiling - lowerRangeFloor + 1;

     let itemsInLower = 0;
     numbers.forEach(item => {
       if (item >= lowerRangeFloor && item <= lowerRangeCeiling) {
         itemsInLower += 1;
       }
     });

     if(itemsInLower > distinctPossibleIntegerinLower) {
       //there must be a duplicate here
       floor = lowerRangeFloor;
       ceiling = lowerRangeCeiling
     } else {
       floor = upperRangeFloor;
       ceiling = upperRangeCeiling;
     }
   }
   //floor and ceiling have converged -- we found a number that repeats!
   return floor;
 }

console.log(findRepeat2([1, 2, 3, 5, 5, 7]));
