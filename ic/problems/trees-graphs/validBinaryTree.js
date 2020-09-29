/**
 * write a function to check that a binary tree is a valid binary search tree
 */

const isValidBST = (root) => {
  if (!root) return true;
  //we need to check if the left of the node is less than the node
  //and right of the node is greater than the node
  let min = null;
  let max = null;

  function isValid(node, min, max) {
    if (!node) return true;

    if (
      (min !== null && root.val <= min) ||
      (max !== null && root.val >= max)
    ) {
      return false;
    }
    return (
      isValid(node.left, min, node.val) && isValid(root.right, root.val, max)
    );
  }
  return isValid(root, min, max);
};

//time complexity: O(n)
//space complexity: O(n)

//refactor upper algorithm solution -- we don't need two functions, we can do it by passing in parameters

const isValidBinarySearchTree = (root, lowerBound, upperBound) => {
  lowerBound = typeof lowerBound !== 'undefined' ? lowerBound : -Infinity;
  upperBound = typeof upperBound !== 'undefined' ? upperBound : -Infinity;

  if (!root) return true;

  if (root.val <= lowerBound || root.val >= upperBound) {
    return false;
  }

  return (
    isValidBinarySearchTree(root.left, lowerBound, root.val) &&
    isValidBinarySearchTree(root.right, root.val, upperBound)
  );
};
