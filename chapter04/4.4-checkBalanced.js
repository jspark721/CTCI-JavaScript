/*
Implement a function to check if a binary tree is balanced. For the purposes of this question, a balanced tree is defined to be a tree such that the heights of the two subtrees of any
node never differ by more than one.
*/

const checkBalanced = (root) => {
  const helper = (root) => {
    if (!root) return 0;

    //get left and right height
    let leftHeight = helper(root.left);
    let rightHeight = helper(root.right);

    if (
      leftHeight == -1 ||
      rightHeight == -1 ||
      Math.abs(leftHeight - rightHeight) > 1
    ) {
      return -1;
    }

    return 1 + Math.max(leftHeight, rightHeight);
  };

  return helper(root) === -1 ? false : true;
};
