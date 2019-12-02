/*
trees are nonlinear data structures in that they are organized through relationships or hierarchies

tree traversal refers to the process of visiting each individual node exactly once

1. breadth-first
2. depth-first

breadth first searching algorithm -- you visit each level in your tree from top to bottom until you've traversed the entire tree and each level you visit each node once from left to right

https://medium.com/quick-code/data-structures-traversing-trees-9473f6d9f4ef

breadth first is an algorithm that is used to search for a node in a graph data structure -- the algorithm starts at one node, then goes to its neighboring nodes. if the node we are searching is not found, then it will go to the next node look at its neighbors

uses the queue data structure to make note of all the nodes that it has visited -- this way, the algorithm will save time by skipping the already visted nodes

*/

const queueCreator = () => {
  const queue = [];
  return {
    add(x) {
      queue.unshift(x)
    },
    remove() {
      if(queue.length === 0) {
        return undefined
      }
      return queue.pop()
    },
    next() {
      if(queue.length === 0) {
        return undefined
      }
      return queue[queue.length -1]
    },
    get length() {
      return queue.length
    },
    empty() {
      return queue.length === 0
    }
  }
}
