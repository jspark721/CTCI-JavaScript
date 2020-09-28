/**
 * Write a function to see if a binary tree is "superbalanced"
 *
 * a tree is "superbalanced" if the different between the depth of any two leaf nodes is no greater than one
 *
 */

class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }
  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

const isBalanced = (root) => {
  if (!root) return true;

  //keep track of the depths as we go
  //when we find a leaf, we add its depth to an array of depths IF we haven't seen that depth already
  const depths = [];

  //store pairs of node with it's depth
  const nodes = [];
  nodes.push([root, 0]); //root is 0 depth

  while (nodes.length) {
    //pop a node from its depth from the top of our stack
    let nodePair = nodes.pop();
    let node = nodePair[0];
    let depth = nodePair[1];

    //if the node has no children
    if (!node.left && !node.right) {
      //no children means we found a leaf
      //we only care if it's a new depth
      if (depths.indexOf(depth) < 0) {
        depths.push(depth);
      }
      //two ways we might have an unbalanced tree:
      //1. more than 2 different leaf depths
      //2. two leaf depths that are more than 1 apart
      if (
        depths.length > 2 ||
        (depths.length === 2 && Math.abs(depths[0] - depths[1]) > 1)
      ) {
        return false;
      }
    } else {
      //it's not a leaf and it has either left or right child
      if (node.left) {
        nodes.push([node.left, depth + 1]);
      }
      if (node.right) {
        nodes.push([node.right, depth + 1]);
      }
    }
  }
  return true;
};

//time complexity: O(n)
//space complexity: O(n)
