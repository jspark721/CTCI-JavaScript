// Check Permutation: Given two strings, write a method to decide if one is a permutation of the other.

// input: two strings
// output: boolean

// time complexity: O(N) hash table solution

//if the two strings have the same characters, return true
//split the string into characters

function perMutation(str1, str2) {
//check the input, does it have a length?
//check if the two strings have the same length
  if (str1.length === 0 || str2.length === 0 || str1.length !== str2.length) {
    return false;
  } //this is important to check! do for all functions

//create a hash table
  let hash = {};
//put the first string into the table
  for(let i = 0; i < str1.length; i++) {
    if(hash[str1[i]]) {
      hash[str1[i]] += 1;
    } else {
      hash[str1[i]] = 1;
    }
  }
  for(let j = 0; j < str2.length; j++) {
    if(hash[str2[j]]) {
      hash[str2[j]] -= 1;
      if(!hash[str2[j]]) {
        delete hash[str2[j]];
      }
    }
  }
  return (Object.keys(hash).length <= 0);
//compare the second string and if the key exists subract the value and if its 0, remove the key from the table

//if the table is empty, return true
//if the table is not empty, return false

}

perMutation('julie','eilju'); //returns true
perMutation('hello', 'bye'); //returns false

// easier solution using the sort method

function checkPermutation(first, second) {
  let sort1 = first.toLowerCase().split('').sort();
  let sort2 = second.toLowerCase().split('').sort();


  if(sort1.join('') === sort2.join('')) {
    return true;
  } else {
    return false;
  }
}

checkPermutation('julie', 'lieju'); //returns true
checkPermutation('tree', 'treee'); //returns false
