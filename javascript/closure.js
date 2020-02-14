/*
A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

*/

// iterate the variable every second

for(var i = 1; i <= 3; i++) {
  setTimeout(function() {
    console.log(`i: ${i}`);
  }, i * 1000);
}

// we want it to return i: 1, i: 2, i: 3, i: 4, but it will return i: 4, i: 4, i : 4

// to fix it, just make new scopes, you need new variables, add a block scoped declaration in the iteration

for(var i = 1; i <= 3; i++) {
  let j = i;
  setTimeout(function() {
    console.log(`j: ${j}`);
  }, j * 1000);
}

// will return j: 1, j: 2, j:3

// but if you just use 'let' instead of var to declare your variable i, it will create a brand new i for each iteration!

for(let i = 1; i <= 3; i++) {
  setTimeout(function() {
    console.log(`i: ${i}`);
  }, i * 1000);
}


/*

closures are useful because they let you associate some data (lexical environment) with a function that operates on that data -- this has obvious parallels to object-oriented programming, where objects allow us to associate some data (the object's properties) with one or more methods

much of the code we write in front-end javascript is event-based, we define some behavior, then attach it to an event that is triggered by the user (such as click or keydown) -- our code is generally attached as a callback: a single function which is executed in response to the event

*/

// example, if we want to add buttons to a page that adjust the text size, one way of doing this to specify the font-size of the body elements in pixels, then set the size of the other elements on the page (such as headers) using the relative em unit

function makeSizer(size) {
  return function() {
    document.body.style.fontSize = size + 'px';
  };
}

var size12 = makeSizer(12);
var size14 = makeSizer(14);
var size16 = makeSizer(16);

document.getElementById('size-12').onclick = size12;
document.getElementById('size-14').onclick = size14;
document.getElementById('size-16').onclick = size16;


// module pattern requires the concept of encapsulation (idea of hiding data and behavior)

// modules encapsulates data and behavior(methods) together. the state (data) of a module is held by its methods via closure~

// a common module is essentially a reusable piece of JavaScript which exports specific objects, making them available for other modules to require in their programs

//example: module IIFE
var workshop = (function Module(teacher) {
  var publicAPI = { ask, };
  return publicAPI;

  // *********
  function ask(question) {
    console.log(teacher, question);
  }
})("Julie");

workshop.ask("It's a module, right?");
// returns 'Julie It's a module, right?'

// you can't do workshop.teacher because teacher is hidden within the ask function inside


//you can make regular functions that can be used multiple times and everytime that function is used/called it's going to produce a new instance of the module -- FACTORY FUNCTIONS

function WorkshopModule(teacher) {
  var publicAPI = { ask, };
  return publicAPI;

  // *********
  function ask(question) {
    console.log(teacher, question);
  }
};
var workshop = WorkshopModule('Harvey');
workshop.ask('its a module right?');
// Harvey, it's a module right?
