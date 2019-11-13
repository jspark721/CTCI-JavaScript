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

/* factorial example */

function factorial(x) {
  //termination condition
  if (x < 0) return;
  // base case
  if (x === 0) return 1;

  //recursion
  return x * factorial(x - 1);
}

console.log(factorial(3));

/* the factorial function flow
1. we first call our function passing in the value of 3
   factorial(3);

2. this resuls in the function being run, both if statements faile and our recursion line runs
   factorial(3-1)
   return 3 * factorial(2);

3. when factorial(2) is ran, both if statements fail again and recursion occurs again. we return the integer 2 multiplied by the value of factorial (2-1)
   return 2 * factorial(1);

4. when factorial(1) is ran, both if statements fail again and recursion occurs -- we return integer 1 multiplied by the value of factorial(1-1)
   return 1 * factorial(0);

5. when factorial(0) is run, something different happens, zero is our base case, so that if statement passes and our function returns 1.

!!now that our function has finally returned, everything will 'unwind' -- this is because recursion is simply a group of nested function calls. with nested functions, the most inner nested function will return first!!

so now, factorial(0) returns 1
factorial(1) returns 1 * factorial(0) // 1 * 1
factorial(2) returns 2 * factorial(1) // 2 * 1 * 1
factorial(3) returns 3 * factorial(2) // 3 * 2 * 1 * 1

return 1 * 1 * 2 * 3 // 6!

*/

/* reverse a string example */

function reverseString(str) {
  if (str === '') return '';
  return reverseString(str.substring(1)) + str[0]; // the substring() method returns a portion of the string between the start and end dexes, or to the end of the string
}

console.log(reverseString('cat'));

/* explaination

str[0] gives us the character at that index in the string, thus cat[0] === 'c'

return reverseString(str.substring(1)) + str[0]; is same as
return reverseString('at') + 'c';

then the recursive case is run again because we are not done

return reverseString(str.substring(1)) + str[0]; is same as
return reverseString('t') + 'a';

then the recursive case is run one final time:
return reverseString(str.substring(1)) + str[0]; is same as
return reverseString('') + 't';
and this time, our base case runs and the function returns a blank string
if (str === '') return '';

now that our function has returned, everything will 'unwind' and return in order 

return '' + 't' + 'a' + 'c' // tac

*/
