/* WHY RECURSION??

elegant solutions to keep your code D.R.Y (don't repeat yourself)
expected CS knowledge


*/

/* CALL STACK GAME

1. push called function(Fn) on STACK
2. execute function body
   until...
   ...another function(Fn) is called:
      pause the current execution and start at step 1
   ...a return is hit
      pop the current function off the stack
      resume executing the previous function

*/

// let callMe = function() {
//   callMe();
//   callMe();
//   callMe('anytime');
// }
//
// callMe(); // this is an infinite loop because it's not going to the second call as nothing is getting executed -- REMEMBER YOU HAVE TO RETURN SOMETHING somewhere -- a STACK OVERFLOW


// let callMe = function() {
//   return callMe(); // this is still creating an infinite loop even if you return it
//   callMe();
//   callMe('anytime');
// }
//
// callMe();

var tracker = 0;
var callMe = function(arg) {
  tracker++;
  console.log(tracker);
  if(tracker === 3) {
    tracker = 0;
    return `recursed function 3 times ${arg}`;
  }
  return callMe('anytime');
}

console.log(callMe());
