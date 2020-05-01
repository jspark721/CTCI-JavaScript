/*

The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/

function pairElement(str) {
  let array = [];

  //function to check the strand to pair
  const pairing = function (char) {
    switch (char) {
      case 'A':
        array.push(['A', 'T']);
        break;
      case 'T':
        array.push(['T', 'A']);
        break;
      case 'C':
        array.push(['C', 'G']);
        break;
      case 'G':
        array.push(['G', 'C']);
        break;
    }
  };

  //loop through the input and pair
  for (let i = 0; i < str.length; i++) {
    pairing(str[i]);
  }
  return array;
}

console.log(pairElement('GCG')); // return [["G", "C"], ["C", "G"], ["G", "C"]]
