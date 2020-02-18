// function can be retruned from other functions in JavaScript

//global memory -- a new execution context
function createFunction() {
  function multiplyBy2(num) {
    return num * 2;
  }

  return multiplyBy2;
}

const generatedFunc = createFunction();
// creates a brand new execution context
// in a local temporary memory, define multiplyBy2 as a function, we are not calling this function yet

// now in the global memory, generatedFunc is becoming multiplyBy2 function and the local temporary memory is gone

const result = generatedFunc(3); // returns 6

// generatedFunc has NO relationship with createFunction whatsoever, zero connection, generatedFunc is the one time generated execution context RESULT of createFunction by returning the multiplyBy2 function 
