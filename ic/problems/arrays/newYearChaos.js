/*
It's New Year's Day and everyone's in line for the Wonderland rollercoaster ride! There are a number of people queued up, and each person wears a sticker indicating their initial position in the queue. Initial positions increment by  from  at the front of the line to  at the back.

Any person in the queue can bribe the person directly in front of them to swap positions. If two people swap positions, they still wear the same sticker denoting their original places in line. One person can bribe at most two others. For example, if  and  bribes , the queue will look like this: .

Fascinated by this chaotic queue, you decide you must know the minimum number of bribes that took place to get the queue into its current state!

Function Description

Complete the function minimumBribes in the editor below. It must print an integer representing the minimum number of bribes necessary, or Too chaotic if the line configuration is not possible.

minimumBribes has the following parameter(s):

q: an array of integers
*/

const minimumBribes = (queue) => {
  if (queue.length === 0) return 0;

  let bribes = 0;
  for (let i = 0; i < queue.length; i++) {
    if (queue[i] - i > 3) {
      return "too chaotic";
    }
    for (let j = i + 1; j < queue.length; j++) {
      console.log(`q[i] ${queue[i]} - q[j] ${queue[j]} - bribes: ${bribes}`);
      if (queue[i] > queue[j]) {
        bribes++;
      }
    }
  }
  return bribes;
};

console.log(minimumBribes([2, 1, 5, 3, 4]));
console.log(minimumBribes([2, 5, 1, 3, 4]));
console.log(minimumBribes([3, 1, 5, 2, 4])); //4
console.log(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4])); //7

//time complexity: O(n^2) -- too slow, we can do better

const minimumBribesOptimized = (queue) => {
  if (queue.length === 0) return 0;

  let bribes = 0;
  let min = queue.length;

  for (let i = min - 1; i >= 0; i--) {
    if (queue[i] - i > 3) {
      return "Too chaotic";
    }
    if (queue[i] > i + 1) {
      bribes += queue[i] - (i + 1);
    } else {
      if (min > queue[i]) {
        min = queue[i];
      } else if (queue[i] !== min) {
        bribes++;
      }
    }
  }
  return bribes;
};

console.log(minimumBribesOptimized([1, 2, 5, 3, 7, 8, 6, 4]));

//time complexity: O(n)
