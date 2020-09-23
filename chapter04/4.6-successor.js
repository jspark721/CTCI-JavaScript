/*
Write an algorithm to find the "next" node (i.e., in-order successor) of a given node in a binary search tree. You may assume that each node has a link to its parent.

Input: Tree & target node
Output: Successor node
Constraints: Optimize
Edge Cases: Empty tree

       20
     /   \
    8    22
  /  \     
4    12
   /   \
  10    14

inorder successor of 8 is 10
inorder successor of 12 is 14
inorder successor of 10 is 12
*/

//do an inorder dfs traversal of the BST, when we get to the target node, we look for the smallest number greater than the node

const inorderSuccessor = (root, node) => {
  if (!root || !node) {
    return null;
  }

  let prev = null;

  if (node == root) {
    return node.right;
  }

  let stack = [];
  let current = root;

  while (stack.length || current) {
    if (current) {
      stack.push(current);
      current = current.left;
    } else {
      current = stack.pop();
      if (prev !== null && prev.val == node.val) {
        return current;
      }
      prev = current;
      current = current.right;
    }
  }
  return null;
};

//time complexity: O(n)
//space complexity: O(n)

//case 1: node has right subtree
// go deep to leftmost node in right subtree, OR find min in right subtree -- the successor of node must be the minimum number of the right subtree - since the given node is a node in the BST, we can directly start from the node

//case 2: no right subtree
//to to the nearest ancestor for which given node would be in left subtree
//if node.right is null, the successor of node must be the minimum number which is greater than p's value
const successorIterative = (root, node) => {
  if (node.right !== null) {
    return findMin(node.right);
  }

  let successor = null;
  while (root) {
    if (root.val > node.val) {
      successor = root;
      root = root.left;
    } else if (root.val < node.val) {
      root = root.right;
    } else {
      break;
    }
  }
  return successor;

  function findMin(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }
};
