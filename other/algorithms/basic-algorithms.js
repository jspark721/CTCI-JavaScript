/* confirm the ending

check if a string (first argument, str) ends with the given target string (second argument, target)

can't use the .endsWith() method
*/

const confirmEnding = function(str, target) {
  //str.length - target.length extracts the last target length of the string
  if(str.substring(str.length - target.length) === target) {
    return true;
  }
  return false;
}
//test cases
console.log(confirmEnding("Bastian", "n")); // true
console.log(confirmEnding("Congratulation", "on")); //true
console.log(confirmEnding("Harvey", "n")); //false
console.log(confirmEnding("Hello my name is Julie", "name")); //false
console.log(confirmEnding("Harvey is the cutest dog", "cutest dog")); //true

// ****************************
/* repeat a string

given a string for num times, return an empty string if num is not a positive number

can't use .repeat() method
*/

const repeatStringNumTimes = function(str, num) {
  let result = "";
  if(num < 1) {
    return "";
  }
  for(let i = 0; i <= num; i++) {
    result += str;
  }
  return result;
}
console.log(repeatStringNumTimes("*", 3)) // return "***"
console.log(repeatStringNumTimes("abc", 4))// return "abcabcabcabc"
console.log(repeatStringNumTimes("hello", -2)) // return ""


// ****************************
/* truncate a string
if it's longer than the given maximum string length (second argument) return the truncated string with a ... ending

*/

const truncateString = function(str, length) {
  if(length >= str.length) {
    return str;
  }
  for(let i = 0; i < length; i++) {
    let newStr = "";
    newStr += str;
  }
  return newString + '...';
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8)) // return "A-tisket...
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11)) // return "Peter Piper...
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)) // return "A-tisket a-tasket A green and yellow basket"
console.log(truncateString("Absolutely", 2)) // return "Ab..."


// ****************************
/* finders keepers
create a function that looks through an array(first arg) and returns the first element in the array that passes the truth test (second arg). If no element passes the test, return undefined

*/

const findElement = function(array, func) {
  return array.filter(func)[0];
}

// or another way

function findElement2(arr, func) {
  let num = 0;

  for (var i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }

  return undefined;
}

console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }))
console.log(findElement([1, 3, 5, 11], function(num) { return num % 2 === 0; }));
console.log(findElement(['hello', 'there', 'short', 'find a long word'], function(num) { return num.length > 5; }));


// ****************************
/* boo who, check if a value is classified as a boolean primitive - return true or false

*/

const booWho = function(bool) {
  if(typeof bool === "boolean") {
    return true;
  }
  return false;
}

console.log(booWho(true)) // true
console.log(booWho(false)) // true
console.log(booWho([1, 2, 3])) // false
console.log(booWho("true")) // false

// ****************************
/* title case a sentence
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

*/

const titleCase = function(str) {
  let arr = str.toLowerCase().split(' ');
  let newArr = [];
  for(let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].substring(0, 1).toUpperCase() + arr[i].substring(1));
  }
  return newArr.join(' ');
}
console.log(titleCase("I'm a little tea pot")) // return "I'm A Little Tea Pot"
console.log(titleCase("sHorT and StouT")) // return "Short And Stout"
