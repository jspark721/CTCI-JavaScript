/* convert a string to spinal case

spinal case is all-lowercase-words-joined-by-dashes

*/

let spinalCase = function (str) {
  let arr = str.split(/\s|_|(?=[A-Z])/);

  return arr.join('-').toLowerCase();
};

console.log(spinalCase('This IsSpinalTap')); // returns "this-is-spinal-tap"
