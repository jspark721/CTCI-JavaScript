//check if it is a permutation of a palindrome

//input: a string 'tact coa'
//output: a boolean true == example 'taco cat', 'atco cta' etc

const palindromeChecker = function(str) {
  //remove all spaces & make sure they are all lowercase
  let word = str.replace(/\s/g, "").toLowerCase();
  //create an empty hash table
  let hash = {};
  let counter = 0;

  //loop over the string and put the characters as values and count the number of each character
  for (let i = 0; i < word.length; i++) {
    let letter = word[i];
    hash[letter] = hash[letter] || 0;
    hash[letter]++;
  }

  //loop over each letter in hash and if it's even number, don't count, if it's odd, count up
  for(count in hash) {
    //if count in hash is odd, add count
    if(hash[count] % 2 > 0) {
      counter++;
    }
  }
  //there should either only be one or no odd number - so counter should either be 0 or 1
  console.log(hash);
  return counter <= 1;
}

palindromeChecker('race car');
