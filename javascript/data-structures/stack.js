// Last in First Out (LIFO)

// stack of books, stack of plates, you get the top item first before you can get to the middle, or bottom

/* benefits of stacks: allows constant time adding and removing since we won't have to shift any items around to pop off or add to the top item in the stack

downsides: don't offer constant time access to nth item unlike an array, so if we want to access the third book, we have to pop off each item until we reach the 3rd book. if we want to access the first item in the stack (the bottom element), we have to iterate through each book and remove it 
has O(n) time complexity

*/

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
