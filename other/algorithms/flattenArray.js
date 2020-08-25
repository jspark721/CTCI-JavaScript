// without using the method .flat(), create a function to flatten an array

function flatten(arr) {
  let newArr = arr.reduce((acc, item) => {
    if (Array.isArray(item)) {
      acc = acc.concat(flatten(item));
    } else {
      acc.push(item);
    }
    return acc;
  }, []);
  return newArr;
}

const exampleArray = [1, 2, [3, 4, [5, 6, 7], 8], 9, 10];
console.log(flatten(exampleArray)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
