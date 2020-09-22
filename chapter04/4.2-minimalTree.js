/*
Given a sorted (increasing order) array with unique integer elements, write an algorith, to create a binary search with minimal height
*/

//when the array is inorder, we know that the value at the middle index will be the root and all the values left of the mid will be on the left sub tree and the values on the right of the mid will be on the right side of the tree

const constructBST = (arr, left, right) => {
  if (left > right) {
    return null;
  }
  //find the mid point of the array
  let mid = Math.floor(arr.length / 2);
  //create root node with the value in arr[mid]
  let node = new TreeNode(arr[mid]);
  //the left child will be added with new right constraint
  node.left = constructBST(arr, left, mid - 1);
  //the right child will be added with the new left constraint
  node.right = constructBST(arr, mid + 1, right);

  //now we'll just return the node, which will have the left and right children
  return node;
};

const sortedArrayToBST = (array) => {
  if (array.length === 0) return null;

  //call the recursion construct BST method with left as index 0 and right as array.length - 1;
  return constructBST(array, 0, array.length - 1);
};
