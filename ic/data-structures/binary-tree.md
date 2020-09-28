# Binary Tree

a binary tree is a tree where every node has two or fewer children, the children are usually called left and right

`class BinaryTreeNode { constructor(value) { this.value = value; this.left = null; this.right = null; } }`

## Types of Binary Trees

### Perfect Tree

a binary tree is called perfect when there are no gaps and every node has two children

- the number of total nodes on each "level" doubles as we move down the tree
- the number of nodes on the last level is equal to the sum of the number of nodes on all levels (plus one) - in other words, about half of our nodes are on the last level

**Example**

1. Level 0: 2^0 nodes (1)
2. Level 1: 2^1 nodes (2)
3. Level 2: 2^2 nodes (4)
4. Level 3: 2^3 nodes (8)
5. Level 4: 2^4 nodes (16)
