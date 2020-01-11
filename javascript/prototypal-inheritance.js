//inheritance refers to an object's ability to access methods and other properties from another object. Objects can inherit things from other objects. Inheritance in JS works through prototypes and this is often is called prototypal inheritance

//prototype is a working object instance.

let Person = function() {
  this.name = 'julie';
  this.age = 30;
}

let julie = new Person();


Person.prototype.gender = 'female';
Person.prototype.hairColor = 'blonde';

console.log(julie.name);
console.log(julie.hairColor);

let Dog = function(breed,color) {
  this.breed = breed;
  this.color = color;
}

Dog.prototype.bark = function() {
  console.log('woof!');
}; //prototype inheritance -- we made it available to all instances of Dog

// setting a property to an object creates an own property

console.log(Dog);

let harvey = new Dog('shihtzu', 'cream', 8);

console.log(harvey);
console.log(harvey.bark); // 'woof!'
//harvey doesn't actually have its own method called bark(), so harvey.hasOwnProperty('bark') === false

//so what happens when I call harvey.bark, the JS engine looks for aproperty called bark on the harvey object, it doesn't find one so it looks "up the property chain" to the parent object which is Dog.prototype, it finds Dog.prototype.bark and calls it with this bound to harvey


//Object.create() differential Inheritance

let parent = {
  foo: function() {
    console.log('bar');
  }
};

let child = Object.create(parent);

child.hasOwnProperty('foo'); // false
child.foo(); // 'bar'
// it has access to the foo() method from the parent as child is a prototype of parent


function Car() {

}

Car.prototype.drive = function() {
  console.log('vroom');
}

let mercedesBenz = new Car();
mercedesBenz.drive();

//create a Rectangle constructor
// this refers to the new object that you're creating

function Rectangle(width,height) {
  this.width = width;
  this.height = height;
}

let myRectangle = new Rectangle(5, 7);

myRectangle.width;
myRectangle.height;

Rectangle.prototype.area = function() {
  return this.width * this.height;
}

myRectangle.area(); // 35;

//subclassing -- new class of object that inherits from Rectangle called square

function Square(length) {
  this.width = this.height = length;
}

// how do you make Square inherit from Rectangle? it's about setting up the prototype chain

Square.prototype = Object.create(Rectangle.prototype);

let mySquare = new Square(4);
mySquare.area(); // 16
