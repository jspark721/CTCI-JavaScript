/**
 * Given a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the original key plus sum of all keys greater than the original key in BST.

Example:

Input: The root of a Binary Search Tree like this:
              5
            /   \
           2     13

sum of all keys greater than the original key -- so 5 + 13 = 18, 2 + 13 = 20
Output: The root of a Greater Tree like this:
             18
            /   \
          20     13

 */

//perform a reverse in-order traveral via recursion
//inorder traversal is left, root, right - so we're going to do right, root, left and add up the values

//maintain a minor "global" state so each recursive call can access and modify the current total sum
//we have to ensure that the current node exists, then recurse on the right, visit the current node by updating its value and the total sum, and then finally recurse on the left subtree

const convertBST = (root) => {
  let sum = 0;
  function reverseInOrder(root) {
    if (root) {
      reverseInOrder(root.right);
      //update the root val by adding the sum
      root.val += sum;
      //set the sum value to the root value
      sum = root.val;
      reverseInOrder(root.left);
    }
  }
  //call the reverseInOrder recursion on root
  reverseInOrder(root);
  return root;
};
