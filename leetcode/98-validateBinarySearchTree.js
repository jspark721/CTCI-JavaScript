/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

//recursion
var isValidBST = function (root) {
  if (!root) return true;

  //initialize a min and max values to -infinity & infinity
  let min = -Infinity;
  let max = Infinity;

  let isValid = (root, min, max) => {
    //if root is empty, return true;
    if (!root) return true;

    //check if the root is less than min or the root is greater than max, then it's not valid and we need to return false
    //we need to also check if min or max value is NOT null
    if (
      (min !== null && root.val <= min) ||
      (max !== null && root.val >= max)
    ) {
      return false;
    }
    //now we call the recursive function and change the root, min and max
    return (
      isValid(root.left, min, root.val) && isValid(root.right, root.val, max)
    );
  };

  //call the validate recursion function
  return isValid(root, min, max);
};

console.log(isValidBST([2, 1, 3])); //return true
console.log(isValidBST([5, 1, 4, null, null, 3, 6])); //return false

//time complexity: O(n)
//space complexity: O(n)

//iterative solution
const isValidBST2 = (root) => {
  let stack = [];
  let min = -Infinity;

  while (stack.length !== 0 || root !== null) {
    //so while root is not null and root has children on the left, we're going to keep pushing it in the stack
    while (root !== null) {
      stack.push(root); //parent values
      root = root.left;
      //keep going down while root has left node
    }
    //the root becomes the next parent node that was popped from the stack
    root = stack.pop();
    if (root.val <= min) {
      return false;
    }
    //after we do this check, we need to change the min value;
    min = root.val;
    //then we need to check the right node
    root = root.right;
  }
  return true;
};

//time complexity: O(n) -- we visit each node once
//space complexity: O(n) -- just using a call stack using recursion
