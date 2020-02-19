// create a function that takes a string and returns a new string with duplicates removed

let removeDuplicates = function(str) {
    let array = str.split(' ');
    let hash = {};
    let result = [];
    for(let i = 0; i < array.length; i++) {
        let char = array[i];
        if(!hash[char]) {
            hash[char] = 1;
        } else {
            hash[char]++;
        }
    }
    for(key in hash) {
       result.push(key);
    }
    return result.join(' ');
}

const str = "this is is a test test string";
removeDuplicates(str);
// should return 'this is a test string'

// or you can use a Set, The Set object lets you store unique values of any type, whether primitive values or object references.

let getUnique = function(str) {
    const arr = str.split(' ');

    const set = new Set(arr);
    const newString = [...set].join(' ');

    return newString;
}