/* 

inorder traversal -> left, node, right

*/

// create a node class

class Node {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }
}

//create a binary tree

class BinaryTree {
  constructor() {
    this.root = null;
    this.count = 0;
  }

  insert(value) {
    this.count++;

    let newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(node, newNode) {
    // if the data is less than the node
    // data move left of the tree
    if (newNode.value < node.value) {
      // if left is null insert node here
      if (node.left === null) node.left = newNode;
      // if left is not null recurr until
      // null is found
      else this.insertNode(node.left, newNode);
    }

    // if the data is more than the node
    // data move right of the tree
    else {
      // if right is null insert node here
      if (node.right === null) node.right = newNode;
      // if right is not null recurr until
      // null is found
      else this.insertNode(node.right, newNode);
    }
  }
}

const bt = new BinaryTree();
bt.insert(4);
bt.insert(1);
bt.insert(3);
bt.insert(2);
bt.insert(7);
bt.insert(9);
console.log(bt);

/*

           4
      1         7
         3            9
       2 
*/
//inorder [1,2,3,4,7,9]

const inOrderTraversal = (root) => {
  const stack = [];
  const output = [];

  while (root || stack.length) {
    if (root) {
      stack.push(root);
      console.log(`-----------STACK: ${stack}`);
      root = root.left;
    } else {
      root = stack.pop();
      output.push(root.value);
      root = root.right;
    }
  }
  return output;
};

console.log(inOrderTraversal(bt.root));
