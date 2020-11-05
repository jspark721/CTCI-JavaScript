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

const permutation = (str) => {
  let result = [];

  const findPermutations = function (visited = new Set(), currentPerm = []) {
    if (currentPerm.length === str.length) {
      result.push(currentPerm);
      return;
    }
    for (let i = 0; i < str.length; i++) {
      if (!visited.has(i)) {
        findPermutations(new Set([...visited, i]), [...currentPerm, str[i]]);
      }
    }
  };
  findPermutations();

  return result;
};

function findPerms(str) {
  console.log("\n==== FINDING PERMUTATIONS FOR ", str, "====");

  // BASE CASE
  if (str.length === 1) return [str];

  // RECURSIVE CASE
  let all = [];

  for (let i = 0; i < str.length; i++) {
    const currentLetter = str[i];

    const remainingLetters = str.slice(0, i) + str.slice(i + 1);

    const permsOfRemainingLetters = findPerms(remainingLetters);

    permsOfRemainingLetters.forEach((subPerm) => {
      all.push(currentLetter + subPerm);
      console.log(`--------****subperm ${subPerm}****--------- all: ${all}`);
    });
  }
  return all;
}
console.log(findPerms("TWO"));
