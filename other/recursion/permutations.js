//given an array, give all permutations of the array

const permutation = (elements) => {
  //base case
  if (elements.length === 0) return [[]];

  //make a recursive call that makes it smaller/closer to get to the base case
  const firstElement = elements[0];
  const rest = elements.slice(1);
  const permutationWithoutFirst = permutation(rest);

  const allPermutations = [];
  permutationWithoutFirst.forEach((perm) => {
    for (let i = 0; i <= perm.length; i++) {
      const permWithFirst = [
        ...perm.slice(0, i),
        firstElement,
        ...perm.slice(i),
      ];
      allPermutations.push(permWithFirst);
    }
  });

  return allPermutations;
};

console.log(permutation(['a', 'b', 'c']));

//time complexity: O(n!)
//space complexity: O(n^2) recursive stack call and array slice copies
