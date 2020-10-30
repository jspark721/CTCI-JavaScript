/**
 * Given a collection of distinct integers, return all possible permutations.

Example:

Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
 */

/*
 backtracking and dfs
 */

const dfs = (letters, path, used, result) => {
  if (path.length === letters.length) {
    //make a deep copy so we don't append the same list over and over again
    result.push(Array.from(path));
    return;
  }
  for (let i = 0; i < letters.length; i++) {
    //skip used letters
    if (used[i]) continue;
    //add letter to permutation, mark letter as used
    path.push(letters[i]);
    used[i] = true;
    dfs(letters, path, used, result);
    path.pop();
    used[i] = false;
  }
};
const permute = (letters) => {
  let result = [];
  dfs(letters, [], Array(letters.length).fill(false), result);
  return result;
};

console.log(permute([1, 2, 3]));

var permute = function (nums) {
  const output = [];
  /**
   * The goal is break down the problem by finding permutations in subarrays.
   * So we will maintain a subarray of fixed elements and a subarray for
   * exploring permutations.
   *
   *                  [1], [2, 3]    [1, 2], [3]    [1, 2, 3]
   * [], [1, 2, 3] -> [2], [1, 3] -> [1, 3], [2] -> [1, 3, 2]
   *                  [3], [1, 2]    [2, 1], [1]    [2, 1, 3]
   *                                 [2, 3], [1]    [2, 3, 1]
   *                                 [3, 1], [2]    [3, 1, 2]
   *                                 [3, 2], [1]    [3, 2, 1]
   */
  const dfs = (curr, rest) => {
    // base case. Found a permutation because there's nothing else to explore.
    if (rest.length === 0) {
      output.push(curr);
      return;
    }
    for (let i = 0; i < rest.length; i++) {
      dfs([...curr, rest[i]], [...rest.slice(0, i), ...rest.slice(i + 1)]);
    }
  };
  dfs([], nums);

  return output;
};
