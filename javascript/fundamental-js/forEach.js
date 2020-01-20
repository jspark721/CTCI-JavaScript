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
);

['observatory', 'ballroom', 'library'].forEach(funtion(value, index,list) { ... });
