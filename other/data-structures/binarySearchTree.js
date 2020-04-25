//Binary Search

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearch {
  constructor(value) {
    this.root = new Node(value); // initialize the root of the  with the value
    this.count = 1; // root counts as one value
  }

  size() {
    return this.count;
  }

  insert(value) {
    this.count++;

    let newNode = new Node(value);
    //check if it's greater or less than the root node and every node so implement a recursive search

    const search = (node) => {
      //if value < node.value, go left
      if (value < node.value) {
        //if no left child, append new node
        if (!node.left) {
          node.left = newNode;
        }
        //if left child, look left again until there is no left node then place it there
        else {
          search(node.left);
        }
      }
      //if value > node.value, go right
      else if (value > node.value) {
        if (!node.right) {
          node.right = newNode;
        } else {
          search(node.right);
        }
      }
    };

    search(this.root); //this will traverse down the  from the root
  }

  delete(value) {
    const deleteNode = (node, value) => {
      if (node == null) {
        return null;
      }
      if (value == node.value) {
        //node has no children
        if (node.left == null && node.right == null) {
          return null;
        }
        //node has no left child
        if (node.left == null) {
          return node.right;
        }
        if (node.right == null) {
          return node.left;
        }

        //node has two children
        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.value = tempNode.value;
        node.right = deleteNode(node.right, tempNode.value);
        return node;
      } else if (value < node.value) {
        node.left = deleteNode(node.left, value);
        return node;
      } else {
        node.right = deleteNode(node.right, value);
        return node;
      }
    };
    this.root = deleteNode(this.root, value);
  }

  min() {
    let currentNode = this.root;

    // while there exists a left child node, keep looking left -- continue traversing left until no more children
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.value;
  }

  max() {
    let currentNode = this.root;

    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.value;
  }

  //checks if a value exists in the
  contains(value) {
    let currentNode = this.root;

    while (currentNode) {
      if (value === currentNode.value) {
        return true;
      }
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    //if you don't find the value after traversing through the whole , return false
    return false;
  }

  //depth first Search

  // inorder --> left, root, right
  dfsInOrder() {
    let result = [];

    const traverse = (node) => {
      //if left child exists, go left again
      if (node.left) {
        traverse(node.left);
      }
      //capture root node value
      result.push(node.value);
      //if right child exists, go right again
      if (node.right) {
        traverse(node.right);
      }
    };
    traverse(this.root);
    return result;
  }

  // preorder --> root, left, right
  dfsPreOrder() {
    let result = [];

    const traverse = (node) => {
      result.push(node.value);
      console.log(result);
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    };
    traverse(this.root);
    return result;
  }

  // postorder --> left, right, root
  dfsPostOrder() {
    let result = [];

    const traverse = (node) => {
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
      result.push(node.value);
    };

    traverse(this.root);
    return result;
  }

  //breadth first search -- level by level
  bfs() {
    let result = [];
    //using a queue to push the root node to the queue
    let queue = [];
    queue.push(this.root);

    //while the queue has values in it
    while (queue.length) {
      // take the first item out of the queue
      let currentNode = queue.shift();
      //push the first item in the queue into the array
      result.push(currentNode.value);

      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    return result;
  }
}

//test the Binary Search

const bst = new BinarySearch(15); //root will be 15

bst.insert(3);
bst.insert(36);
bst.insert(2);
bst.insert(12);
bst.insert(28);
bst.insert(39);

console.log(bst.size()); // 7
console.log(bst.min()); // 2
console.log(bst.max()); // 39
console.log(bst.contains(12)); // true
console.log(bst.contains(21)); // false

//DFS!
console.log('inorder---- ');
console.log(bst.dfsInOrder()); // 2, 3, 12, 15, 28, 36, 39
console.log('preorder---- ');
console.log(bst.dfsPreOrder()); // 15, 3, 2, 12, 36, 28, 39
console.log('postorder---- ');
console.log(bst.dfsPostOrder()); // 2, 12, 3, 28, 39, 36, 15

bst.delete(12);
bst.contains(12);
bst.dfsInOrder();
bst.bfs();
