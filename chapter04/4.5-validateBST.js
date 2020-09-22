/*
Validate BST: Implement a function to check if a binary tree is a binary search tree


input: tree
output: boolean
constraints: optimize
edge cases: empty tree, will be true

Definition for a binary tree node
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
*/

/**
 * @param {TreeNode} root
   @return {boolean}
 */

// a tree is a binary search tree if all the nodes in the left subtree is less than the root and all the nodes in the right subtree is greater than the root.

//so we can check the values of the left sub tree and make sure it's less than the root, and then check the values of the right sub tree and make sure it's greater than the root
const isValidBST = (root) => {
  //we need a recursive function to call the left and right child and check the upper and lower limit, so we will initialize a min and max value
  let min = -Infinity;
  let max = Infinity;

  //this function will repeat the same step recursively for the left and right subtrees
  const isNodeValid = (node, min, max) => {
    //base case, if the node is null/doesn't exist, then return true
    if (!node) {
      return true;
    } else if (node.val <= min || node.val >= max) {
      //check if the node value is less than the min, or greater than the max, if it is, then we need to return false because it's not valid
      return false;
    }

    //now we need to call the function recursively on left and right with the correct min and max values
    return (
      isNodeValid(node.left, min, node.val) &&
      isNodeValid(node.right, node.val, max)
    );
  };

  //now we will call the recursion function on the root with the min and max value
  return isNodeValid(root, min, max);
};

//iterative solution
//for dfs, use stack

const isValidBSTiterative = (root) => {
  if (!root) return true;

  let stack = [];
  let min = -Infinity;

  while (stack.length && root) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    if (root.val <= min) return false;

    min = root.val;
    root = root.right;
  }
  return true;
};
