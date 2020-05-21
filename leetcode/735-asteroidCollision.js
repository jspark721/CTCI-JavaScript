/*We are given an array asteroids of integers representing asteroids in a row.

For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

*/

const asteroidCollision = function (asteroids) {
  if (asteroids.length === 0) {
    return;
  }

  //create a stack and place all the positive integers
  let stack = [];

  //when we hit a negative number, we will compare the number at the top of the stack with the value of the negative number, if it's smaller than the negative num, pop it off the stack and keep moving
  //initialize count to iterate through the while loop
  for (let i = 0; i < asteroids.length; i++) {
    if (asteroids[i] > 0) {
      stack.push(asteroids[i]);
    } else {
      while (
        stack.length &&
        stack[stack.length - 1] > 0 &&
        stack[stack.length - 1] < Math.abs(asteroids[i])
      ) {
        stack.pop();
      }
      if (stack.length === 0 || stack[stack.length - 1] < 0) {
        stack.push(asteroids[i]);
      } else if (stack[stack.length - 1] == Math.abs(asteroids[i])) {
        stack.pop();
      }
    }
  }
  return stack;
};

const asteroids = [5, 10, -5]; // [5,10]
const asteroids2 = [-7, 7]; // []
const asteroids3 = [-2, -1, 1, 2]; // [-2,-1,1,2] they'll never collide

console.log(asteroidCollision(asteroids2));
