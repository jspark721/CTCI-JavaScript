// write a function for generating all permutations of an input string - return them as a set
// assume every character in the input string is unique

function getPermutations(string) {
  // Base case
  if (string.length <= 1) {
    return new Set([string]);
  }

  const allCharsExceptLast = string.slice(0, -1);
  const lastChar = string[string.length - 1];

  console.log(allCharsExceptLast, lastChar);

  // Recursive call: get all possible permutations for all chars except last
  const permutationsOfAllCharsExceptLast = getPermutations(allCharsExceptLast);

  // Put the last char in all possible positions for each of the above permutations
  const permutations = new Set();
  permutationsOfAllCharsExceptLast.forEach((permutated) => {
    for (let i = 0; i <= allCharsExceptLast.length; i++) {
      const permutation =
        permutated.slice(0, i) + lastChar + permutated.slice(i);
      permutations.add(permutation);
    }
  });

  return permutations;
}
