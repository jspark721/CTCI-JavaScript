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

//dfs using recursion with map
var maxDepthMap = function (root) {
  if (!root) {
    return 0;
  }

  if (root.children.length === 0) {
    return 1;
  }

  let depthOfChildren = root.children.map(maxDepth);

  return Math.max(...depthOfChildren) + 1;
};

//dfs using recursion with for loop
var maxDepthForLoop = function (root) {
  return dfs(root);
};

function dfs(node) {
  if (node == null) return 0;
  let maxDepth = 0;

  for (let i = 0; i < node.children.length; i++) {
    const depth = dfs(node.children[i]);
    maxDepth = Math.max(maxDepth, depth);
  }

  return maxDepth + 1;
}
