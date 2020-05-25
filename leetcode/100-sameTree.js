/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

//recursively check if tree is same
const isSameTree = function (p, q) {
  // Equal nullity denotes that this branch is the same (local equality)
  // Base case, but also handles being given two empty trees
  if (p == null && q == null) return true;
  // Unequal nullity denotes that the trees aren't the same
  // Note that we've already ruled out equal nullity above
  if (p == null || q == null) return false;

  // Both nodes have values; descend iff those values are equal
  // "&&" here allows for any difference to overrule a local equality
  if (p.val == q.val)
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);

  // If we're here, both nodes have values, and they're unequal, so the trees aren't the same
  return false;
};

//iteratively using queue (BFS)

const sameTreeUsingQueue = function (p, q) {
  if (!p && !q) return true;

  let queueP = [p];
  let queueQ = [q];

  while (queueP.length && queueQ.length) {
    let nodesP = queueP.shift();
    let nodesQ = queueQ.shift();

    if (nodesP == null && nodesQ == null) continue;
    if (nodesP == null || nodesQ == null) return false;
    if (nodesP.val !== nodesQ.val) return false;

    queueP.push(nodesP.left);
    queueP.push(nodesP.right);
    queueQ.push(nodesQ.left);
    queueQ.push(nodesQ.right);
  }
  return true;
};
