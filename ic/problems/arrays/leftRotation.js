/*
A left rotation operation on an array shifts each of the array's elements  unit to the left. For example, if  left rotations are performed on array , then the array would become .

Given an array  of  integers and a number, , perform  left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.

*/

const rotateLeft = (array, d) => {
  if (array.length === 0) return array;

  let rotation = d % array.length;

  while (rotation > 0) {
    let val = array.shift();
    array.push(val);
    rotation--;
  }

  return array;
};

console.log(rotateLeft([1, 2, 3, 4, 5], 2));
console.log(rotateLeft([1, 2, 3, 4, 5], 4));

const rotateLeftUsingSlice = (array, d) => {
  if (array.length === 0) return array;

  let rotation = d % array.length;
  let frontOfArray = array.slice(rotation);
  let backOfArray = array.slice(0, rotation);

  console.log(frontOfArray, backOfArray);
  return frontOfArray.concat(backOfArray);
};

console.log(rotateLeftUsingSlice([1, 2, 3, 4, 5, 6, 7], 4));
console.log(rotateLeftUsingSlice([1, 2, 3, 4, 5], 4));
