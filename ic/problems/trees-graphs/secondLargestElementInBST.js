/*
write a function to find the 2nd largest element in a binary search tree
*/
//how to find the 2nd largest in the tree?
//the largest is the rightmost child of the BST

/*
so our first thought would be that the 2nd largest would be the parent of the largest element?
but if the largest element's parent has a left child, the 2nd largest could be in the left subtree - it would be the left subtree's rightmost child

if the parent of the largest element doesn't have a left child, we can return the parent
if it has a left child subtree, we have to traverse and find the right most of that sub tree
*/

const secondLargest = (root) => {
  if (!root || (!root.left && !root.right)) {
    throw new Error('tree must have at least 2 nodes');
  }
  const findLargest = (root) => {
    if (!root) throw new Error('tree must have at least 1 node');

    if (root.right) {
      return findLargest(root.right);
    }
    return root.value;
  };

  //we're currently at largest and the largest has a left sub tree
  if (root.left && !root.right) {
    return findLargest(root.left);
  }

  //we're at parent of the largest and largest has no left subtree, so 2nd largest must be current node
  if (root.right && !root.right.left && !root.right.right) {
    return root.value;
  }
  return findSecondLargest(root.right);
};

//time complexity: O(h) where h is the height of the tree
//space complexity: O(h)

//we can get it down to constant space

//find the largest value -- the rightmost child, so we can just get it in one walk down the tree by just traversing rightward until we don't have a right child anymore

function largestElement(root) {
  let current = root;
  while (current) {
    if (!current.right) return current.value;
    current = current.right;
  }
}

//we can also traverse through the tree to find the second largest with few cases in mind
/*
  1. if we have a left subtree but not a right subtree
      --> then the current node is the largest overall (the "rightmost") node. the second largest element must be the largest element in the left subtree so we use the largestElement function to find the largest in that left subtree
  2. if we have a right child, but that right child node doesn't have any children
      --> then the right child must be the largest element and our current node is the second largest element
  3. else, we have a right subtree with more than one element
      --> so the largest and second largest are somewhere in that subtree, we traverse right again
*/

function secondLargest(root) {
  if (!root || (!root.left && !root.right)) {
    throw new Error('tree must have at least 2 nodes');
  }

  let current = root;
  while (current) {
    //case 1: current is the largest and has a left subtree
    if (current.left && !current.right) {
      return largestElement(root.left);
    }
    //case 2: we have a right child but that right child doesn't have any children (we're at the second largest)
    if (current.right && !current.right.right && !current.right.left) {
      return current.value;
    }
    //case 3: we have a right subtree with more than one element so we have to traverse right again
    current = current.right;
  }
}

//we're doing one walk down our BST, which means O(h) time and O(log n) time if tree is balanced
//space complexity is only O(1) because we're just traversing and not using a call stack to recurse
