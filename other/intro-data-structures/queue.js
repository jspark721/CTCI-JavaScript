class Queue {
    constructor() {
        this._storage = {};
        this._length = 0;
        this._headIndex = 0; 
    }

    // enqueues a new value at the end of the queue
    enqueue(value) {
        const lastIndex = this._length + this._headIndex;
        this._storage[lastIndex] = value;
        this._length++;
    }
    
    // dequeues the value from the beginning of the queue and returns it
    dequeue() {
        const firstValue = this._storage[this._headIndex];
        delete this._storage[this._headIndex];
        this._length--;
        this._headIndex++;
        return firstValue;
    }

    // returns the value at the beginning of the queue without removing it from the queue 
    peek() {
        return this._storage[this._headIndex];
    }
}

let myQ = new Queue();

myQ.enqueue('zero');
myQ.enqueue('one');
// {_storage: {0: 'zero, 1: 'one'}} 
// length 2
// headIndex: 0

myQ.dequeue();
// {_storage: {1: 'one'}} 
// length 1
// headIndex: 1

myQ.enqueue('two');
// {_storage: {1: 'one', 2: 'two'}} 
// length 2
// headIndex: 1

myQ.enqueue('three');
// {_storage: {1: 'one', 2: 'two', 3: 'three}} 
// length 3
// headIndex: 1

console.log(myQ);
console.log(myQ.peek());