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

function smallestElementInBST(root) {
  let current = root;
  while (current) {
    if (!current.left) {
      return current.value;
    }
    current = current.left;
  }
}

const tree = new BinaryTreeNode(5);
let leftNode = tree.insertLeft(3);
leftNode.insertLeft(1);
leftNode.insertRight(3);
let rightNode = tree.insertRight(10);
rightNode.insertLeft(7);
let rightNodeRight = rightNode.insertRight(20);
let rightNodeRightLeaf = rightNodeRight.insertLeft(15);
rightNodeRightLeaf.insertLeft(11);
rightNodeRightLeaf.insertRight(17);

console.log(tree);
console.log(smallestElementInBST(tree));
