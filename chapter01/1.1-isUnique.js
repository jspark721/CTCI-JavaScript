//implement an algorithm to determine if a string has all unique characters

//input: String
//output: boolean

// time complexity: O(N^2) nested loop

const isUnique = function(str) {
  //loop through the string by each character
  for (let i = 0; i < str.length; i++) {
    //start from the second character and loop over the string again and compare if there is a same character
    for (let j = i + 1; j < str.length; j++) {
      //if a same character exists -- return false
      if(str[i] === str[j]) {
        return false;
      }
    }
  }
  //else return true (outside of the loop)
  return true;
};


// time complexity: O(N) hash table solution

const isUnique2 = function(string) {
  // create an empty hash table
  let hash = {};
  //loop over the string and put the characters as the key and count how many times it exists

  for(let i = 0; i < string.length; i++) {
    //set each letter to a variable
    let letter = string[i];
    // place values in the hash table, either 0 because it's the first letter or the value of the key
    hash[letter] = (hash[letter] || 0) + 1;
    //if the value of the letter key is more than 1, return false because that means the string is NOT Unique
    if(hash[letter] > 1) {
      return false;
    }
  }
  return true;
}

//Test
isUnique('impact'); // returns true
isUnique('hey there'); // returns false
isUnique('124ewaq907gc'); // return true
