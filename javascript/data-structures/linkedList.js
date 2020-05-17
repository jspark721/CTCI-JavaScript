/*
Linked Lists are a series of linked nodes where each node points to the next node in the list -- each node has a value and a pointer to the next node

types of linked lists:
singly linked list
doubly linked list (which each node also points to previous node)
circly linked list (where the tail node points to the head node)

linked lists use the "last in first out" method similar to the stack where nodes are added to and deleted from the same end

to search for a node in a linked list, we have to start at the head node (first node in the list) and iterate through each node until we find it 

searching is O(n)
insertion & deletion is O(1)*
* The cost to add or delete an element into a known location in the list (i.e. if you have an iterator to the location) is O(1). If you don't know the location, then you need to traverse the list to the location of deletion/insertion, which takes O(n) time.

*/

//build a  Node class which has a vlaue and a pointer to the next node

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  isEmpty() {
    return this.length === 0;
  }

  push(value) {
    const newNode = new Node(value);
    //if the list is empty, head and tail should point to newNode
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      //set the current nodes pointer to the new node
      this.tail.next = newNode;
      //update the tail to point to the new node value
      this.tail = newNode;
    }
    this.length++;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    } else if (this.length === 1) {
      //if only one node in the list
      const nodeToRemove = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return nodeToRemove;
    } else {
      //if there are multiple nodes in the list, you have to traverse through the list and find the item that points to the tail node, once we find the second to last node, we have to set the nodeToRemove to the currnet tail node, update the tail to point to the second to last node, and finally update the new tail to point to null

      //while there are nodes in the list, if the next node in the list is the tail, update the tail to point to the current node, set the current node to point to null, decrement the length of the list, return the previous tail element as removed

      //start our pointer at the head
      let currentNode = this.head;
      //removing the last node in the list
      let lastNode = this.tail;
      //this will be new tail
      let secondtoLastNode;
      while (currentNode) {
        if (currentNode.next === this.tail) {
          secondtoLastNode = currentNode;
          break;
        }
        currentNode = currentNode.next;
      }
      secondtoLastNode.next = null;
      this.tail = secondtoLastNode;
      this.length--;
      return lastNode;
    }
  }

  //get method which takes an index and returns the node at that list index
  get(index) {
    if (index < 0 || index > this.length || this.isEmpty()) {
      return null;
    }

    //first node
    if (index == 0) {
      return this.head;
    }
    //last node
    if (index === this.length - 1) {
      return this.tail;
    }

    //iterate through the list until we find the index
    //we want a node somewhere in the list
    let currentNode = this.head;
    let iterator = 0;

    while (iterator < index) {
      iterator++;
      currentNode = currentNode.next;
    }
    return currentNode;
  }
  removeAt(index) {
    let prevNode = this.get(index - 1);
    let currentNode = this.get(index);

    if (index < 0 || index > this.length) {
      return null;
    }

    if (index === 0) {
      head = currentNode.next;
    } else {
      prevNode.next = currentNode.next;
    }
    this.length--;
    return currentNode.value;
  }
  addAt(index, value) {
    let node = new Node(value);
    let headNode = this.head;
    let prevNode = this.get(index - 1);
    let indexNode = this.get(index);

    if (index === 0) {
      //add to the head node
      node.next = headNode;
      this.head = node;
    } else {
      prevNode.next = node;
      node.next = indexNode;
    }
    this.length++;
  }

  size() {
    return this.length;
  }
}

const myList = new LinkedList();
myList.push('puppy');
myList.push('harvey');
myList.push('shihtzu');
myList.push('good doggo');
console.log(myList.removeAt(2)); // 'shihtzu'
console.log(myList);
console.log(myList.get(2));
myList.addAt(2, 'newItem');
console.log(myList.get(2));
