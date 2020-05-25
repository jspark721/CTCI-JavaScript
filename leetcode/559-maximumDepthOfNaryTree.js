/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */

//bfs using queues
var maxDepth = function (root) {
  if (!root) return 0;

  let queue = [root];
  let depth = 0;

  while (queue.length) {
    let length = queue.length;
    for (let i = 0; i < length; i++) {
      let currentNode = queue.shift();
      for (let child of currentNode.children) {
        queue.push(child);
      }
    }
    depth++;
  }
  return depth;
};

//dfs using recursion
var maxDepthRecursion = function (root) {
  if (!root) return 0;
  let depth = 0;

  for (let child of root.children) {
    depth = Math.max(depth, maxDepthRecursion(child));
  }
  return depth + 1;
};
