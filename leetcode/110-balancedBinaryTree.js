/**
 * Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as:

a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

 

Example 1:

Given the following tree [3,9,20,null,null,15,7]:

    3
   / \
  9  20
    /  \
   15   7
Return true.

Example 2:

Given the following tree [1,2,2,3,3,null,null,4,4]:

       1
      / \
     2   2
    / \
   3   3
  / \
 4   4
Return false.

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

const isBalanced = (root) => {
  if (!root) return true;

  const depths = [];
  const nodes = [];
  nodes.push([root, 0]);

  while (nodes.length) {
    const nodePair = nodes.pop();
    const node = nodePair[0];
    const depth = nodePair[1];

    if (!node.left && !node.right) {
      //we found a leaf, no left or right child
      //we only care if it's a new depth
      if (depths.indexOf(depth) < 0) {
        depths.push(depth);

        //two ways we might have an unbalanced tree --
        //1. more than 2 different leaf depths
        //2. 2 leaf depths that are more than 1 apart
        if (
          depths.length > 2 ||
          (depths.length == 2 && Math.abs(depth[0] - depth[1] > 1))
        ) {
          return false;
        }
      }
    } else {
      //if the node is not a leaf, keep traversing down
      if (node.left) {
        nodes.push([node.left, depth + 1]);
      }
      if (node.right) {
        nodes.push([node.right, depth + 1]);
      }
    }
  }
  return true;
};

//time complexity: O(n)
//space complexity: O(n)

//we used depth-first
//dfs uses a stack, bfs uses a queue

var isBalancedRecursion = function (root) {
  /* helper function which returns depth of a node or returns false incase it is not balanced */
  function helper(root) {
    if (!root) {
      return 0;
    }
    /* find leftHeight or if left tree is balanced */
    let leftHeight = helper(root.left);
    if (leftHeight === false) {
      return false;
    }
    /* find rightHeight or if right tree  is balanced */
    let rightHeight = helper(root.right);
    if (rightHeight === false) {
      return false;
    }
    /* return false in case the tree at root is not balanced. */
    if (Math.abs(leftHeight - rightHeight) > 1) {
      return false;
    }
    /* return depth*/
    return 1 + Math.max(leftHeight, rightHeight);
  }
  /* if root node is empty .return true else call the helper */
  let result = !root ? true : helper(root);
  /* result will either be false or a +ve number . */
  return !result ? false : true;
};

// DFS approach
const isBalancedDFS = (root) => {
  let maxDiff = 0;

  getHeightDiff(root);

  return maxDiff <= 1;

  function getHeightDiff(node) {
    //base case
    if (node === null) return 0;

    const leftHeight = getHeightDiff(node.left);
    const rightHeight = getHeightDiff(node.right);

    maxDiff = Math.max(maxDiff, Math.abs(leftHeight - rightHeight));

    return Math.max(leftHeight, rightHeight) + 1;
  }
};

const isBalancedTree = (root) => {
  function helper(node) {
    if (!node) return 0;

    let leftHeight = helper(node.left);
    let rightHeight = helper(node.right);

    console.log(`node: ${node.val} -- lh: ${leftHeight}, rh: ${rightHeight}`);

    if (
      leftHeight == -1 ||
      rightHeight == -1 ||
      Math.abs(leftHeight - rightHeight) > 1
    ) {
      return -1;
    }
    return 1 + Math.max(leftHeight, rightHeight);
  }

  return helper(root) === -1 ? false : true;
};
