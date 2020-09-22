/*
Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

Example:

Given the sorted array: [-10,-3,0,5,9],

One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

      0
     / \
   -3   9
   /   /
 -10  5

 */

const sortedArrayToBST = (nums) => {
  if (nums.length === 0) return null;

  const constructTree = (nums, left, right) => {
    if (left > right) return null;

    //get the mid index of the array
    let mid = Math.floor((left + right) / 2);
    let node = new TreeNode(nums[mid]);
    node.left = constructTree(nums, left, mid - 1);
    node.right = constructTree(nums, mid + 1, right);

    return node;
  };

  return constructTree(nums, 0, nums.length - 1);
};
