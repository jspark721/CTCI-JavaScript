/**
 * 
Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

For example:
Given binary tree [3,9,20,null,null,15,7],
return its zigzag level order traversal as:
[
  [3],
  [20,9],
  [15,7]
]
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
 * @return {number[][]}
 */

/*

    5
 1    7
    3  21
[ 
[5], level 0
[7,1], level 1
[3,21], level 2
]
 */

const zigzagLevelOrder = (root) => {
  // create a results array
  let result = [];

  //create a level order traversal recursion function that takes the root and the level as parameters and we're going to call it on the left child and right child until there is no more children
  const levelOrderTraversal = (root, level) => {
    if (!root) {
      return;
    }

    //if the results array doesn't already have the nested level array, we're going to initialize the root.val into the array, if it already exists, we're just going to push in the root.val into that same level array
    if (!results[level]) {
      results[level] = [root.val];
    } else {
      results[level].push(root.val);
    }

    levelOrderTraversal(root.left, level + 1);
    levelOrderTraversal(root.right, level + 1);
  };

  levelOrderTraversal(root, 0);

  //reverse all the odd number levels because we want a zigzag pattern
  result = result.map((levelArr, index) => {
    if (index % 2 !== 0) {
      return levelArr.reverse();
    } else {
      return levelArr;
    }
  });
  return result;
};

//time complexity: O(n) where n is the total number of nodes
//space complexity: O(n) because we're creating a new array
