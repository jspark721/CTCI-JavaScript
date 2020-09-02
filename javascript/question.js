//Write one Javascript statement on the indicated line that will make the printed number always be between 10 and 20. *

let x = 2;
let y = 8;
const a = function (b) {
  return function (c) {
    return x + y + Math.abs(b) + c;
  };
};
//if fn must return a number between 10 and 20, then x + y + Math.abs(b) must equal 10 since c=Math.random() * 10

//y + Math.abs(b) must equal 6 since 10 - 4 (from x=4) is 6
//So what is Math.abs(b)? The local variable b is set when a is called.
//a is called with x, which at the time of that call is still 2. So Math.abs(b) is 2, and so we can derive that y must be 4.

// Statement will go here
y = 4;
// answer above

const fn = a(x);
x = 4;
//x is already set to 4 and we can't change this
console.log(fn(Math.random() * 10));
