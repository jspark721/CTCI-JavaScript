// DOUBLY LINKED LIST

class Node {
	constructor(value, prev, next) {
		this.value = value;
		this.prev = prev || null;
		this.next = next || null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}
	// add to the end of list/tail
	append(value) {
		//if the list is empty
		if(!this.tail) {
			this.head = this.tail = new Node(value);
		} else {
			//place the current tail as the old tail
			let oldTail = this.tail;
			//change the tail to the new node value
			this.tail = new Node(value);
			//point the old tail pointer to new tail
			oldTail.next = this.tail;
			//make sure the previous pointer of new tail to point to old tail
			this.tail.prev = oldTail;
    }
	}
	// add to the front of the list
	prepend(value) {
		//if list is empty
		if(!this.head) {
			this.head = this.tail = new Node(value);
		} else {
			let oldHead = this.head;
			this.head = new Node(value);
			this.head.next = oldHead;
			oldHead.prev = this.head;
		}
	}

	//function to get the index to insert the value at a certain spot
	getIndex(index) {
		let counter = 0;
		let node = this.head;
		while(node) {
			if(counter === index) {
				return node;
			}
			counter++;
			node = node.next;
		}
		return node;
	}
	//insert node value at a certain index
	insertAt(value, index) {
    //if the list is empty
    if(!this.head) {
      this.head = new Node(value);
      return this.head;
    }
    //if new node needs to be inserted before the head
    if(index === 0) {
      let oldHead = this.head;
			this.head = new Node(value);
			this.head.next = oldHead;
			oldHead.prev = this.head;

      return this.head;
    }
    //use getIndex() function to find the previous node and insert it there
    const previous = this.getIndex(index - 1);
    const newNode = new Node(value);
    const nextNode = this.getIndex(index);

    previous.next = newNode;
    newNode.prev = previous;
    newNode.next = nextNode;

    return newNode;
	}

	deleteHead() {
		//if list is empty
		if(!this.head) {
			return null;
		} else {
			let removedHead = this.head;
			//if this is the last node in the list/ only one node in the list
			if(this.head === this.tail) {
				this.head, this.tail = null;
			} else {
				this.head = this.head.next;
				this.head.prev = null;
			}
			return removedHead.value;
		}
	}

	deleteTail() {
		//if list is empty
		if(!this.tail) {
			return null;
		} else {
			let removedTail = this.tail;
			//if this is the only node in the list
			if(this.head === this.tail) {
				this.tail, this.head = null;
			} else {
				this.tail = this.tail.prev;
				this.tail.next = null;
			}
			return removedTail;
		}
	}

	search(value) {
		//keep track of which node we are on
		let currentNode = this.head; //start at the head

		while(currentNode) {
			if(currentNode.value === value) {
				return currentNode;
			}
			currentNode = currentNode.next;
		}
		return null;
	}
}

let list = new DoublyLinkedList();

list.append(1);
list.append(2);
list.prepend(0);
list.append(4);
list.append(5);

list.insertAt(3, 3);
console.log(list);
