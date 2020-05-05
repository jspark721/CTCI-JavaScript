//two types of heaps: min & max heap
class MinHeap {
  constructor() {
    this.heap = []; //initialize an empty array;
  }

  getMin() {
    //access min at index 0, this is O(1) time complexity
    return this.heap[0];
  }

  //the insert method
  //heaps are complete trees except for the last level, the new nodes are inserted from left to right
  // check if the new node that's getting inserted is less than the parent node, if it is less, we have to bubble that node up to the correct spot, so swap the two nodes, then compare again with the parent node and if you keep bubbling up until the node is at the correct spot

  insert(node) {
    //insert the new node at the end of the array
    this.heap.push(node);

    //finding the correct position for the new node
    if (this.heap.length > 1) {
      //set the current to the last index (since it was pushed to the end of the array)
      let current = this.heap.length - 1;
      //traverse up the parent node until the current node is greater than the parent (current / 2)
      let parentIndex = Math.floor((current - 1) / 2);
      while (current > 1 && this.heap[parentIndex] > this.heap[current]) {
        //swap the two nodes using ES6 destructuring
        [this.heap[parentIndex], this.heap[current]] = [
          this.heap[current],
          this.heap[parentIndex],
        ];
        //set the current to parentIndex
        current = parentIndex;
      }
    }
  }
  //time complexity for insert & remove is O(log n)

  //remove method
  //if a root is removed, the extremem right node will be moved to the root node, so you have to traverse down the heap and check if the child nodes are smaller than the parent. If any child nodes is smaller than the parent, we swap the parent with the smallest child node

  remove() {
    //smallest element is at the index 0 of the heap array
    let minVal = this.heap[0];
    let rightMostVal = this.heap.length - 1;

    //when there are more than two elements in the array, we put the right most element at the first position and start comparing the nodes with child nodes

    if (this.heap.length > 2) {
      minVal = this.heap[rightMostVal];
      this.heap.splice(rightMostVal);
    }
    //It is easy to retain the heap property if there are only 3 elements remaining in the heap. We simply swap the smallest element with the root node. That is it!
    if (this.heap.length === 3) {
      if (this.heap[0] > this.heap[1]) {
        [this.heap[0], this.heap[1]] = [this.heap[1], this.heap[0]];
      }
      return minVal;
    }
    //if the heap length is more than 3,

    let current = 0;
    let leftChildIndex = current * 2 + 1;
    let rightChildIndex = current * 2 + 2;

    while (
      this.heap[leftChildIndex] &&
      this.heap[rightChildIndex] &&
      (this.heap[current] > this.heap[leftChildIndex] ||
        this.heap[current] > this.heap[rightChildIndex])
    ) {
      if (this.heap[leftChildIndex] < this.heap[rightChildIndex]) {
        [this.heap[current], this.heap[leftChildIndex]] = [
          this.heap[leftChildIndex],
          this.heap[current],
        ];
        current = leftChildIndex;
      } else {
        [this.heap[current], this.heap[rightChildIndex]] = [
          this.heap[rightChildIndex],
          this.heap[current],
        ];

        current = rightChildIndex;
      }

      leftChildIndex = current * 2 + 1;
      rightChildIndex = current * 2 + 1;
    }
    if (
      this.heap[rightChildIndex] === undefined &&
      this.heap[leftChildIndex] < this.heap[current]
    ) {
      [this.heap[current], this.heap[leftChildIndex]] = [
        this.heap[leftChildIndex],
        this.heap[current],
      ];
    } else if (this.heap.length === 2) {
      /* If there are only two elements in the array, we directly splice out the first element */
      this.heap.splice(1, 1);
    } else {
      return null;
    }
    return minVal;
  }
}
