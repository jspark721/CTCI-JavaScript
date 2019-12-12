/* create a class representing a Stack

*/

class Stack {
  constructor() {
    this._storage = {}; // anytime you want to put a property in a data structure, put it in the constructor method -- the underscore shows that this is an internal property - you shouldn't be working on it directly
    this._length = 0;

  }

  // adds a new value at the end of the Stack
  push(value) {
    // todo: add typechecking and check arguments, edge cases
    this._storage[this._length] = value;
    this._length++;
  }
  // removes the value at the end of the Stack
  pop() {
    // what if the stack is empty? -- throw an error or just return undefined -- (ask the interviewer if we should throw and error)
    const lastVal = this._storage[this._length - 1];
    delete this._storage[this._length - 1]; // same thing as deleting it
    this._length--;
    return lastVal;
  }
  //returns the value at the end of the stack without removing it
  peek() {
    return this._storage[this._length - 1];
  }
}

const myStack = new Stack();

myStack.push('zero');
myStack.push('one');
myStack.push('two');
console.log(myStack);

console.log(myStack.pop());
console.log(myStack);
console.log(myStack.peek()); //peek the last value

// remember to ask or figure out the edge cases of any questions and algorithms
