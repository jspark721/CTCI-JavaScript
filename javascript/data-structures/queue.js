// First in First Out(FIFO)

class Queue {
  constructor() {
    this.queue = [];
    this.count = 0;
  }

  enqueue(item) {
    this.count++;
    return this.queue.push(item);
  }
  dequeue() {
    this.count--;
    //move the value at the front of the queue
    return this.queue.shift();
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  peek() {
    return this.queue[0];
  }
}

const movies = new Queue();
movies.enqueue('Toy Story');
movies.enqueue('Finding Nemo');
movies.enqueue('Inside Out');
movies.enqueue('Monsters Inc');
movies.enqueue('Tangled');
console.log(movies.peek());
console.log(movies.size());
console.log(movies.isEmpty());
movies.dequeue();
movies.dequeue();
movies.dequeue();
console.log(movies.peek()); // Monsters Inc
movies.dequeue();
movies.dequeue();
console.log(movies.isEmpty()); //true
