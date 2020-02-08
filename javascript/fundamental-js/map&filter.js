 // Array.prototype.map() creates a a new array populated with the results of calling a provided function on every element in the calling array

const array1 = [1, 4, 9, 15];

//pass a function to map

const map1 = array1.map(n => n * 2);
console.log(map1); // [2, 8, 18, 30];

// map calls a provided callback function once for each element in an array (in order) and constructs a NEW array from the results

// map() vs forEach() -- the biggest differene is forEach allows mutation of the original array while map returns a new array of the same size

const weapons = ['candlestick', 'lead pipe', 'revolver'];

const makeBroken = weapons.map(item => `broken ${item}`);

console.log(makeBroken);

// filter() creates a new array with all elements that pass the test implemented by the provided function

const words = ['hello', 'world','coffee', 'excellent','amazing'];

const result = words.filter(word => word.length > 5);
console.log(result); // ['coffee','excellent', 'amazing'];

//filter exercise for game

const videoData = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Mrs. White',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Rusty',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    }
];

const isPresent = videoData.filter(function(person) {
  return person.present === true;
});
console.log(isPresent); // just returns the whole object of the person

const isPresent = videoData.filter(function(person) {
  if(person.present === true){
    return person;
  }
}).map(person => person.name); // maps through the object person and returns just the name value of the object

console.log(isPresent);
