/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.length = 0;
  this.minStack = [];
  this.index = -1;
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.index++;
  const currentMin = this.minStack[this.index - 1]
    ? this.minStack[this.index - 1].min
    : x;
  this.minStack[this.index] = {
    value: x,
    min: Math.min(x, currentMin),
  };
  this.length++;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  const lastVal = this.minStack[this.index];
  delete this.minStack[this.length - 1];
  this.index--;
  this.length--;
  return lastVal;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.minStack[this.length - 1].value;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minStack[this.index].min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
