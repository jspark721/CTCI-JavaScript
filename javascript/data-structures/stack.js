// Last in First Out (LIFO)
class Stack {
  constructor() {
    this.stack = [];
    this.count = 0;
  }

  add(value) {
    this.count++;
    return this.stack.push(value);
  }
  remove() {
    this.count--;
    return this.stack.pop();
  }

  size() {
    return this.count;
  }

  peek() {
    return this.stack[this.count - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }
}

const books = new Stack();
books.add('Redeeming Love');
books.add('Becoming');
books.add('Harry Potter');
books.add('The Tipping Point');
books.add('Little Fires Everywhere');
console.log(books.size()); // return 5
console.log(books.peek()); // little fires everywhere
console.log(books.isEmpty());
books.add('Catch 22');
console.log(books.size());
books.remove();
console.log(books);
