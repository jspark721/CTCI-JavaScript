/*

Given a char array representing tasks CPU need to do. It contains capital letters A to Z where different letters represent different tasks. Tasks could be done without original order. Each task could be done in one interval. For each interval, CPU could finish one task or just be idle.

However, there is a non-negative cooling interval n that means between two same tasks, there must be at least n intervals that CPU are doing different tasks or just be idle.

You need to return the least number of intervals the CPU will take to finish all the given tasks.


Input: tasks = ["A", "A", "A", "B", "B", "B"], n = 2
Output: 8
Explanation: A -> B -> idle -> A -> B -> idle -> A -> B

edge case: if there is more than enough "filler" tasks to complete, just return the array.length
*/

const leastInterval = function (tasks, n) {
  //the map will be tracking the tasks
  let taskMap = new Map();

  //the max occurences
  let maxVal = 0;
  //the number of tasks that has the max occurences
  let maxValCount = 0;

  for (let k of tasks) {
    let taskVal = taskMap.has(k) ? taskMap.get(k) + 1 : 1;
    taskMap.set(k, taskVal);
    console.log(taskMap);
    //set our maxVal and number of maxVal tasks only if there is a new max
    if (taskVal > maxVal) {
      maxVal = taskVal;
      maxValCount = 1;
    } else if (taskVal === maxVal) {
      maxValCount++;
    }
  }
  //handle the edge case as well as return the result
  return Math.max(tasks.length, (maxVal - 1) * (n + 1) + maxValCount);
};

console.log(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 2));
