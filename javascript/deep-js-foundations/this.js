// hard binding -- a variation of explicit binding

var workshop = {
  teacher: 'kyle',
  ask(question) {
    console.log(this.teacher, question);
  },
};

setTimeout(workshop.ask, 10, 'lost this?');
// returns 'undefined lost this?'
// it's actually getting rebind to the global context which doesnt exist and which is why it returns undefined

setTimeout(workshop.ask.bind(workshop), 10, ', hard bound this?');
// returns 'kyle, hard bound this?'
/* pass in a hard bind function using the .bind() call, telling you to force workshop function when invoking the workshop.ask, taking the flexibility away and keeping the predictability, use the workshop as it's this context always by using the bind call (hard binding!)

the .bind() method does not invoke the function, it produces a new function which is bound to a particular 'this' context
*/


var workshop2 = {
  teacher: 'kyle',
  ask(question) {
    setTimeout(() => {
      console.log(this.teacher, question);
    }, 100);
  },
};

workshop2.ask('is this lexical "this"?');
//but if you use an arrow function, it will point at the correct 'this' keyword and won't return undefined

// lexical 'this' behavior
/*

an arrow function does not define a this keyword at all, there is no this keyword in an arrow function, so if you put a this keyword in an arrow function, it's going to behave exactly like any other variable. it's going to lexically resolve to some enclosing scope that does define the this keyword

you lexically go up one level to the parent function, so when this is called inside the setTimeout arrow function, there is no this keyword so it goes up to the ask function which is the enclosing scope

what is ask's definition of the this keyword? it will get invoked later when it's called in line 31. it resolves lexically

arrow function is not hard bound
an arrow function does not define local bindings for arguments, super, this, or new.target -- any references to them in an arrow function must resolve to a binding in a lexically enclosing environment

*/

var workshop3 = { // this workshop object is not a scope
  teacher: 'kyle',
  ask: (question) => {
    console.log(this.teacher, question);
  },
};

workshop3.ask(', what happened to "this"?') // returns undefined, what happened to this

//the scope of the ask function is the global scope so thats why teacher  returns undefined
