/**
 * Given the root node of a binary search tree (BST) and a value. You need to find the node in the BST that the node's value equals the given value. Return the subtree rooted with that node. If such node doesn't exist, you should return NULL.
 *
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
 * @param {number} val
 * @return {TreeNode}
 */

const searchBST = (root, val) => {
  if (!root) return null;
  if (root.val === val) {
    return root;
  }

  if (val < root.val) {
    return searchBST(root.left, val);
  } else {
    return searchBST(root.right, val);
  }
};

//time complexity O(n) -- traversing the tree one node at a time to check if the value matches the val given
//space complexity O(1) -- not taking any extra space other than the recursive call stack
