/*

Post order traversal -- left, right, root

You can think about the steps like this:

Try LEFT
if left-node exists: Try LEFT again
if left-node does not exist: Try RIGHT
Try RIGHT
If a right node exists: Try LEFT from there
If no right exists, you're at a leaf: Try CURR
Try CURR
Print current node
All nodes below have been executed (post-order): Try UP
Try UP
If node is root, there is no UP, so EXIT
If coming up from left, Try RIGHT
If coming up from right, Try CURR

*/

const postorderTraversal = (root) => {
  let stack = [];
  let output = [];
  stack.push(root);

  if (!root) {
    return output;
  }

  while (stack.length) {
    let current = stack.pop();
    output.push(current.val);

    if (current.left != null) {
      stack.push(current.left);
    }
    if (current.right != null) {
      stack.push(current.right);
    }
  }
  return output.reverse();
};
