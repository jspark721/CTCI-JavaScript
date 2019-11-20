class Queue {
    constructor() {
        this._storage = {};
        this._length = 0;
        this._headIndex = 0; 
    }

    // enqueues a new value at the end of the queue
    enqueue(value) {
        this._storage[this._length] = value;
        this._length++;
    }
    
    // dequeues the value from the beginning of the queue and returns it
    dequeue() {

    }

    // returns the value at the beginning of the queue without removing it from the queue
    peek() {

    }
}

let myQ = new Queue();

myQ.enqueue('front');
myQ.enqueue('back');
// {_storage: {0: 'front, 1: 'back'}} // length 2
// headIndex: 0

// myQ.dequeue();
// // {_storage: {1: 'back'}} // length 1
// // headIndex: 1

// myQ.enqueue('two');
// // {_storage: {1: 'back', 2: 'two'}} // length 2
// // headIndex: 1

console.log(myQ);