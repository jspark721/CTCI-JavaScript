/*
JavaScript built-in .flat() methd

the flat() method creates a nw array with all sub array elements concatenated into it recursiely up to a specified depth

syntax:
const newArr = arr.flat([depth])

flat is not yet common in some browsers
*/

const deepArray = [1, [2, 3, [4, 5], 6], 7];
// const flatArray = deepArray.flat(3); //should return a flattend array

// console.log(flatArray);

/* alternatives 
to flat a single level array-- you can use reduce
*/

const singleLevel = [1, 2, [3, [4], 5], 6];
const flattenArray = singleLevel.reduce((acc, val) => acc.concat(val), []);

console.log(flattenArray);

//recursively flatten an array
const flatDeep = (arr, depth) => {
  if (depth > 0) {
    return arr.reduce(
      (acc, val) =>
        acc.concat(Array.isArray(val) ? flatDeep(val, depth - 1) : val),
      []
    );
  } else {
    return arr.slice();
  }
};

console.log(flatDeep(deepArray, 3));

//using a stack
const flatten = (input) => {
  const stack = [...input];
  const result = [];

  while (stack.length) {
    //pop vaue from the stack
    const next = stack.pop();
    //if the next value is an array, push the deconstructed array to the stack
    if (Array.isArray(next)) {
      //push back array items, won't modify the original input
      stack.push(...next);
    } else {
      result.push(next);
    }
  }

  //reverse to restore input order
  return result.reverse();
};

console.log(flatten(deepArray));
