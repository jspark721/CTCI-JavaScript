/*
Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

Input: root = [3,1,4,null,2], k = 1
   3
  / \
 1   4
  \
   2
Output: 1

Input: root = [5,3,6,2,4,null,null,1], k = 3
       5
      / \
     3   6
    / \
   2   4
  /
 1
Output: 3

*/

//do an in-order traversal and return the element on the kth index
const kthSmallest = function (root, k) {
  if (!root) return;

  const inOrderArray = [];

  //inorder traversal
  function inorderDFS(node) {
    if (!node) return;
    inorderDFS(node.left);
    inOrderArray.push(node.val);
    inorderDFS(node.right);
  }

  inorderDFS(root);
  return inOrderArray[k - 1];
};

console.log(kthSmallest([3, 1, 4, null, 2], 1));
