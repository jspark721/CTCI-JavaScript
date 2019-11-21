/* HASH TABLE
organizes data for quick look up on values for a given key

pros: fast lookups, flexible keys
cons: slow worst-case lookups, unordered, single-directional lookups

a hash table in javascript is a permutation of an associative array(i.e name => value pairs) in JS, all non-scalar objects behave as associative arrays.
*/

let hash = {}; // or new Object();

hash['one'] = 1;
hash['two'] = 2;
hash['three'] = 3;

// show the values stored

for(let k in hash) {
  // use hasOwnProperty to filter out keys from the Object.prototye
  if(hash.hasOwnProperty(k)) {
    console.log(`key is ${k}, value is ${hash[k]}`);
  }
}

// constructing a hashtable class
function HashTable(obj) {
  this.length = 0;
  this.items = {};
  for(let p in obj) {
    if(obj.hasOwnProperty(p)) {
      this.items[p] = obj[p];
      this.length++;
    }
  }
}

let newHash = new HashTable({
  one: 1,
  two: 2,
  three: 3,
  four: 4
});

console.log(newHash.items);

let harvey = new HashTable({
  type: 'Dog',
  breed: 'Shih Tzu',
  gender: 'male',
  name: 'Harvey',
  age: 8
});

console.log(harvey.items);

/* Hash Table

 Set: doesn't save a value, only saves the property name -- so all the values would change to 0 , 1 , 2, 3 ...
 The Set object lets you store unique values of any type, whether primitive values or object references.

 Map: a combination of a set and an object, you have a key value pair and you can save any data type in a map, like a function, string, etc. -- an extension of an object

when you're thinking about optimizing a problem, when looking for a fast lookup, always think Hash Table

try to always use ES6 so you can show that you learn and grow as technology changes

*/

class HashTable2 {
  constructor(val) {
    this._storage = [];
    this._tableSize = val;
    this._inputSize = 0; // increase it when you add/insert
  }

  //inserts a new key-value pair
  insert(key, value) {
    const index = this._hash(key, this._tableSize);

    if(!this._storage[index]) {
      this._storage[index] = [];
      // [0, 0, 0, []] // this is handling a collision
    }
    this._storage[index].push([key,value]);
    // adding the key value pairs
    // [0, 0, 0, [['a', 1], ['b', 2]]]
  }

  //deletes a key-value pair
  remove() {
    
  }

  //returns the value associated with a key
  retrieve(key) {
    const index = this._hash(key, this._tableSize);
    const arrayAtIndex = this._storage[index];

    if(arrayAtIndex) {
      for(let i = 0; i < arrayAtIndex.length; i++) {
        const keyValueArray = arrayAtIndex[i];
        if(keyValueArray[0] === key) {
          return keyValueArray[1];
        }
      }
    }
  }

  // hashes string value into an integer that can be mapped to an array index
  _hash(str, n) {
    let sum = 0;
    for(let i = 0; i < str.length; i++) {
      sum += str.charCodeAt(i) * 3;
    }
    return sum % n;
  }
}

const myHT = new HashTable2(10);

console.log(myHT);

myHT.insert('a', 1);
myHT.insert('b', 2);

console.log(myHT);
