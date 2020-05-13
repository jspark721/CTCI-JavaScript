/*
Given a binary tree, return the preorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,2,3]

preorder: root, left,right

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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  let stack = [];
  let output = [];
  let current = root;

  if (!root) {
    return output;
  }

  while (current || stack.length) {
    while (current) {
      output.push(current.val);
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    current = current.right;
  }
  return output;
};
