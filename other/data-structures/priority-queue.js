/*

priority queue: an extension of queue
1. each element of the priority queue has an property associated with it
2. elements are added to the queue as per the priority
3. lowest priority elements are removed first

*/

class QueueElement {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}

class PriorityQueue {
  //an array is used to implement priority
  constructor() {
    this.items = [];
  }

  //add an element to the queue according to the priority
  enqueue(element, priority) {
    let el = new QueueElement(element, priority);
    let contain = false;

    //iterate through the entire item array to add element at the correct location of the Queue
    for (let i = 0; i < this.items.length; i++) {
      if (el.priority < this.items[i].priority) {
        //once the correct location is found, it is enqueued
        this.items.splice(i, 0, el);
        contain = true;
        break;
      }
    }
    //if the element has the highest priority it is added at the end of the queue
    if (!contain) {
      this.items.push(el);
    }
  }

  //remove an element from the priority queue
  dequeue() {
    //return the dequeued element and remove it -- if queue is empty, return empty array
    if (this.isEmpty()) {
      return 'queue is empty';
    }
    return this.items.shift();
    //removes an element from the front of the queue as the highest priority element is stored at the "front" of the priority queue
  }

  //front function -- returns the highest priority element in the Priority queue without removing it
  front() {
    if (this.isEmpty()) {
      return 'no elements in the queue';
    }
    return this.items[0];
  }
  //rear function
  rear() {
    if (this.isEmpty()) {
      return 'no elements in the queue';
    }
    return this.items[this.items.length - 1];
  }

  //helper methods: isEmpty();
  isEmpty() {
    //return true if the queue is empty
    return this.items.length == 0;
  }

  //prints all the element of the queue
  printPriorityQueue() {
    let arr = [];
    for (let i = 0; i < this.items.length; i++) {
      arr.push(this.items[i].element);
    }
    return arr;
  }
}

let priorityQ = new PriorityQueue();

//testing isEmpty and front on an empty queue
console.log(priorityQ.isEmpty());
console.log(priorityQ.front());

//adding elements to the queue
priorityQ.enqueue('Belle', 2);
priorityQ.enqueue('Ariel', 1);
priorityQ.enqueue('Snow White', 5);
priorityQ.enqueue('Repunzel', 4);
priorityQ.enqueue('Elsa', 3);
priorityQ.enqueue('Jasmine', 3);

console.log(priorityQ.printPriorityQueue());
console.log(priorityQ.front().element);
console.log(priorityQ.rear().element);
console.log(priorityQ.dequeue().element);
console.log(priorityQ.printPriorityQueue());
console.log(priorityQ.enqueue('Tiana', 3));
console.log(priorityQ.printPriorityQueue());
