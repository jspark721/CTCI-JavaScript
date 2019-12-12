/* LINKED LIST

a linked list is a linear data structures where each element is a separate object. each element (a node) of a list consists of two items (the data and a reference -- or a pointer/link to the next node) the last node has a reference to null (which is the tail) the entry point into a linked list is called the head of the list

linked lists are often the underlying data structure for a stack or a queue


*/


class LinkedList {
    constructor(value) {
        this.head = { value: value, next: null}; // or it can just be {value, next:null} // same thing
        this.tail = this.head; // initializing the pointer relationship, these two properties point to the same object in memory
    }

    //inserts a new value to the end of the linked list
    //needs to be in constant time
    insert(value) {
        //update tail when you insert new value 
        const node = {value, next:null };
        this.tail.next = node;
        this.tail = node;
    }

    //deletes a node -- give the reference to the node to remove
    remove(){

    }
    //removes the value at the end of the linked list
    removeTail() {
        //find the previous value -- by looping through the list, find the node right before the tail
        // node.next === this.tail

        //traversing a linked list
        let currentNode = this.head;
        while(currentNode.next !== this.tail) {
            currentNode = currentNode.next; //everytime we loop, we're setting the currentNode to the next node
        }
        currentNode.next = null; //remove that pointer so you can make it the tail
        this.tail = currentNode;
    }

    //searches the linked list and returns true if it contains the value passed
    contains(value) {
        //loop through the list again
        let currentNode = this.head;
        while(currentNode.value !== value) {
            currentNode = currentNode.next;
        }
        return currentNode.value === value; //return true if the value is in the list and return false if not
    }

    //checks if a node is the head of the linked list
    // @return {boolean} - true if node is the head, otherwise return false
    isHead(node) {
        return node === this.head;
    }

    //checks if a node is the tail of the linked list
    isTail(node) {
        return node === this.tail;
    }
}

const myList = new LinkedList(1); //initiate it with a value or an empty linked list?

/*
head and tail is the same because there's only one value
    head: { value: 1, next: {value: 2, next: null} }
    tail: { value: 1, next: null }

*/

myList.insert(2);
/* 
    head: { value: 1, next: {value: 2, next: null}  }
    tail: { value: 2, next: null }
*/

myList.insert(3);
/* 
    head: { value: 1, next: {value: 3, next: null}  }
    tail: { value: 3, next: null }
*/

myList.removeTail(); 
/*
    head: { value: 1, next: value: 2, next: null }
    tail: { value: 2, next: null }
*/

console.log(myList);
console.log(myList.contains(2)); //true


/* key/critical concepts about linked list

Reference to the head and tail is very important

what about reversing or iterating backwards? only if it's a doubly, going backwards, you can't do it with singly (?)


*/