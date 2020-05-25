/**
 * binary tree node
 * function TreeNode(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 * }
 *
 */

// const maxDepth = function (root) {
//   if (!root) return 0;

//   function checkDepth(node, depth) {
//     if (node === null) {
//       return depth;
//     }
//     depth++;
//     const left = checkDepth(node.left, depth);
//     const right = checkDepth(node.right, depth);
//     return Math.max(left, right);
//   }
//   return checkDepth(root, 0);
// };

var maxDepth = function (root) {
  //base case
  if (root === null) return 0;

  //what level are we at by asking the left and the right child
  const left = maxDepth(root.left);
  const right = maxDepth(root.right);

  //take the maximum depth -- how deep is our left subtree, or right subtree? either return max of left or right and add 1

  return Math.max(left, right) + 1;
};

//time complexity: O(n) -- traversing the entire tree;

//using BFS with queue
const maxDepthBFS = function (root) {
  if (!root) return 0;

  const queue = [root];
  let depth = 0;
  while (queue.length) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let currentNode = queue.shift();
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    depth++;
  }
  return depth;
};
