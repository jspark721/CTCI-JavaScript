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
