/*
you want to be able to access the largest element in a stack 
*/

class Stack {
  constructor() {
    //initialize an empty stack
    this.items = [];
  }
  //push item to stack
  push(item) {
    this.items.push(item);
  }
  //remove and return last item
  pop() {
    //if stack is empty, return null
    if (!this.items.length) {
      return null;
    }
    return this.items.pop();
  }

  //return the last item without removing
  peek() {
    if (!this.items.length) {
      return null;
    }
    return this.items[this.items.length - 1];
  }
}

//use this Stack class to implement a new class MaxStack with a method getMax() that returns the largest element in the stack. getMax() should not remove the item

class MaxStack {
  constructor() {
    this.stack = new Stack();
    this.maxesStack = new Stack();
  }

  //add a new item to the top of our stack, if the item is greater than equal to the last item in the maxesStack, it's the new max! so we'll add it to maxesStack
  push(item) {
    this.stack.push(item);
    if (this.maxesStack.peek() === null || item >= this.maxesStack.peek()) {
      this.maxesStack.push(item);
    }
  }
  //remove and return the top item from our stack, if it equals the top item in maxes stack, they must have been pushed in together so we'll pop it out of maxesStack too
  pop() {
    const item = this.stack.pop();
    if (item === this.maxesStack.peek()) {
      this.maxesStack.pop();
    }
    return item;
  }

  //return the last item in maxesStack because it's the max item in our regular stack
  getMax() {
    return this.maxesStack.peek();
  }
}

const myStack = new Stack(3);
myStack.push(4);
myStack.push(10);
myStack.push(2);
myStack.push(7);
console.log(myStack);
const myMaxStack = new MaxStack(3);
myMaxStack.push(4);
myMaxStack.push(10);
myMaxStack.push(2);
myMaxStack.push(7);
console.log(myMaxStack.getMax());
