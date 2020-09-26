/**
 * You have an array of integers, and for each index you want to find the product of every integer except the integer at that index.

Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers and returns an array of the products.

input: [1,7,3,4]
output: [84,12,28,21];
[7*3*4, 1*3*4, 1*7*4, 1*7*3]

input: array
output: new array
constraints: optimize
edge cases: empty array
 */

const getProductOfAllIntCeptIndex = (array) => {
  if (array.length < 2) return -1;

  let result = [];
  let productSoFar = 1;

  //for each integer, we find the product of all the integers before it, storing the total product so far each time
  for (let i = 0; i < array.length; i++) {
    result[i] = productSoFar;
    console.log(result);
    productSoFar *= array[i];
  }

  //for each integer, we find the product of all the integers after it, since each index in product already has the product of all integers before it, now we're storing the total product of all other integers
  productSoFar = 1;
  for (let j = array.length - 1; j >= 0; j--) {
    result[j] *= productSoFar;
    productSoFar *= array[j];
  }
  return result;
};

console.log(getProductOfAllIntCeptIndex([1, 3, 5]));
