/* given a binary tree, return the inorder traversal of its nodes' values

Example:

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,3,2]

input: array
output: array
edge cases: empty tree/array

time complexity: O(n) 

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

const inorderTraversal = (root) => {
  let stack = [];
  let output = [];
  let current = root;

  if (!root) {
    return output;
  }

  while (current || stack.length) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    output.push(current.val);
    current = current.right;
  }
  return output;
};
