/*
Write a recursive function for generating all permutations of an input string. Return them as a set.

Don't worry about time or space complexity—if we wanted efficiency we'd write an iterative version.

To start, assume every character in the input string is unique.

Your function can have loops—it just needs to also be recursive.

input: 'ABC'
output: Set {'ABC', 'ACB', 'BAC', 'BCA', 'CBA','CAB'}

*/

const permute = (string) => {
  //base case
  let list = [];

  const helper = (string, list, sublist) => {
    console.log(`${list}, ${sublist}`);
    if (sublist.length === string.length) {
      list.push(sublist.slice());
    } else {
      for (let char of string) {
        if (!sublist.includes(char)) {
          sublist.push(char);
          helper(string, list, sublist);
          sublist.pop();
        }
      }
    }
  };
  helper(string, list, []);
  return list;
};

console.log(permute('ABC'));
