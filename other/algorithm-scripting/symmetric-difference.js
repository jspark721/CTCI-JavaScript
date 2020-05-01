// function sym(args) {
//   let arr = [];
//   let hash = {};
//   let result = [];

//   //remove duplicate in an array
//   function removeDuplicate(array) {
//     return array.filter((value, index) => array.indexOf(value) === index);
//   }

//   //push all the values of all the arrays into a single array
//   for (var i in arguments) {
//     let values = removeDuplicate(arguments[i]);
//     for (let j = 0; j < values.length; j++) {
//       arr.push(values[j]);
//     }
//   }
//   for (let k = 0; k < arr.length; k++) {
//     let val = arr[k];
//     if (!hash[val]) {
//       hash[val] = 0;
//     }
//     hash[val]++;
//   }

//   for (let key in hash) {
//     if (hash[key] === 1) {
//       result.push(parseInt(key));
//       //to make sure if the key is same length as how many arguments are in the problem, it means it's symmetrical so you should return that value as well
//     } else if (hash[key] > 2 && hash[key] === arguments.length) {
//       result.push(parseInt(key));
//     }
//   }
//   console.log(hash);
//   return result;
// }

//using callback function
function sym(args) {
  let argsArray = [...arguments];

  //create a recursive callback function to compare two arrays at a time
  function symDiff(arr1, arr2) {
    //create array to store unique values
    let uniqueVal = [];
    //use either for loop or forEach to iterate and compare two arrays
    for (let i = 0; i < arr1.length; i++) {
      if (arr2.indexOf(arr1[i]) < 0 && uniqueVal.indexOf(arr1[i]) < 0) {
        uniqueVal.push(arr1[i]);
      }
    }
    arr2.forEach((item) => {
      //if the number doesn't exist in the array or the new array, push the number in
      if (arr1.indexOf(item) < 0 && uniqueVal.indexOf(item) < 0) {
        uniqueVal.push(item);
      }
    });
    console.log(`this is uniqueVal array ${uniqueVal}`);
    return uniqueVal;
  }
  //use reduce will iterate through the callback function and gives us a single return
  console.log(argsArray);
  return argsArray.reduce(symDiff);
}

// console.log(sym([1, 2, 3], [5, 2, 1, 4, 5], [6, 7]));
// //needs to return [3, 4, 5, 6, 7]
// console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]));
// //should return [1,4,5]
// console.log(sym([1, 2, 3], [5, 2, 1, 4]));
// return [3, 4, 5]
console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]));
//return [2, 3, 4, 6, 7]
