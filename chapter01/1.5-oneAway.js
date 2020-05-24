/*

i: 2 strings
o: boolean
c: optimize
e: if strings are empty, input the short string first

*/
const oneAway = function (str1, str2) {
  //if we insert a character, then s1's current char should match s2's next char
  //if remove, then s1's next char should match s2's current char
  //if replaced, then s1's next char should match s2's next char
  // max one edit
  let edit = 1;
  let maxLength = Math.max(str1.length, str2.length);
  let diff = Math.abs(str1.length - str2.length); // get absolute value because we don't know if str1 or str2 is longer

  //if length is different and greater than max edit, return false
  if (diff > edit) {
    return false;
  }
  //iterate through strings at the same time, checking for difference
  //store max length for forloop condition
  //have two indices - continue iterating until the greater of the two strings have finished
  for (let i = 0, j = 0; i < maxLength || j < maxLength; i++, j++) {
    let char1 = str1[i]; // i corresponds to indices in str1
    let char2 = str2[j]; // j corresponds to indices in str2
    //if difference is found, decrement the number of edits, then check if edit is below zero, then return false
    if (char1 !== char2) {
      //replace char
      edit--;
      if (edit < 0) {
        return false;
      }
      if (char1 === str2[j + 1]) {
        //insert char
        j++;
      } else if (str1[i + 1] === char2) {
        //remove char
        i++;
      }
    }
  }
  //when forloop is done, all has passed - return true
  return true;
};

//test
console.log(oneAway('cake', 'caked')); //return true
console.log(oneAway('pale', 'pal')); //return true
console.log(oneAway('bake', 'pale')); //return false
