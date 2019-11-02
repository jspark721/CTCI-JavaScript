//examples of reduce function

let list = ['a', 'b', 'c'];

let reduceList = list.reduce(function(accumulator, letter) {
  return accumulator + letter.toUpperCase();
});

console.log(reduceList); // returns aBC since a becomes the seed

let reduceAll = list.reduce(function(accumulator, letter){
  return accumulator + letter.toUpperCase();
}, '');

console.log(reduceAll); // returns ABC since '' starts as the seed

const concacatenateStringWithSpaces = list => {
  return list.reduce((acc, string) => acc + string + " ", "");
};

let testString = ['practice', 'using', 'the', 'reduce' , 'function'];
console.log(concacatenateStringWithSpaces(testString));

//map over the function and square everything and then subract it with reduce
const squaresAndSubracts = list => {
  return list
    .map(num => num*num)
    .reduce((accumulator, num) => accumulator - num)
};

const numList = [10, 5, 4, 2, 1];

console.log(squaresAndSubracts(numList));
