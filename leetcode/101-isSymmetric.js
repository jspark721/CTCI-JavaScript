/**
 * Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:
 */

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
var isSymmetric = function (root) {
  if (!root) return true;

  return checkSymmetry(root.left, root.right);
};

const checkSymmetry = (left, right) => {
  //if both sub trees are empty, return true
  if (left === null && right === null) return true;
  //if only one side is empty, return false
  if (left == null || right == null) return false;
  //if the values don't match
  if (left.val !== right.val) return false;

  //check both subtrees but travel it in mirrored fashion, left subtree goes left to right, right subtree goes right to left and make sure they're both equal (symmetric)
  return (
    checkSymmetry(left.left, right.right) &&
    checkSymmetry(left.right, right.left)
  );
};

//iterative solution

const isSymmetric2 = (root) => {
  //if no root, it's symmetric
  if (!root) return true;

  //initialize two queues, one for left and one for right subtree
  let q1 = [root.left];
  let q2 = [root.right];

  //traverse through both branches until they are both exhausted at the same time
  while (q1.length && q2.length) {
    //get current left and compare it to the right of each branch (mirror)
    let node1 = q1.shift();
    let node2 = q2.shift();
    //if both are null at the same time, just move on
    if (!node1 && !node2) continue;

    //if the current level is not symmetric (one is null or they're not equal) just return false
    if (!node1 || !node2 || node1.val !== node2.val) return false;

    //to maintain comparing left to right, you have to push left and right & reverse for each branch
    q1.push(node1.left);
    q2.push(node2.right);
    q1.push(node1.right);
    q2.push(node2.left);
  }

  //if both are exhausted and we don't return false, then it's symmetric
  return true;
};
