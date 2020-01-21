function createSuspectObjects(name) {
  return {
    name: name,
    color: name.split(' ')[1],
    speak() {
      console.log('my name is ', name);
    }
  };
};

let suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mrs. White', 'Mr. Green', ...];

let suspectsList = [];

for(let i = 0; i < suspects.length; i++) {
  suspect = createSuspectObjects(suspects[i]);
  suspectsList.push(suspect);
}

console.log(suspectsList);

// looping with _.each

// iterates over a list of elements, passing the values to a function
// each invocation of iterator, the function, is called with three arguments: (element, index, list). if list is a JavaScript object, iterator's argument will be (value, key, list)

_.each(
  ['observatory', 'ballroom', 'library'],
  function(value, index, list) {...}
); // underscore is a JavaScript library, _ is an object, we know because it has a dot


['observatory', 'ballroom', 'library'].forEach(funtion(value, index,list) { ... });


// Array.prototype.forEach() -- forEach method executes a provided function once for each array element

const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));

// expected output: 'a';
// 'b';
// 'c';

// for loop to forEach

const items = ['phone', 'pen', 'macbook', 'notebook'];
const copy = [];
const copy1 = [];

// for loop
for (let i = 0; i < items.length; i++) {
  copy.push(items[i]);
}
console.log(copy); // will return all the items

items.forEach(function(item){
  copy1.push(item);
}); // or items.forEach(item => {copy1.push(item)}); use arrow function


// forEach() method doesn't actually return anything (undefined), it simply calls a provided function on each element in your array & this callback is allowed to mutate the calling array
