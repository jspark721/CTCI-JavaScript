/**
 * Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]
 */

const levelOrder = (root) => {
  if (!root) return [];

  let queue = [root];
  let levels = [];

  while (queue.length) {
    let qLength = queue.length;
    let currentLevel = [];

    for (let i = 0; i < qLength; i++) {
      let current = queue.shift();
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);

      currentLevel.push(current.val);
    }
    levels.push(currentLevel);
  }
  return levels;
};
