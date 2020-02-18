class Workshop {
  constructor(teacher) {
    this.teacher = teacher;
  }
  ask(question) {
    console.log(this.teacher, question);
  }
}

var deepJS = new Workshop('Julie');
var reactJS = new Workshop('Harvey');

deepJS.ask('is "class" a class?');
reactJS.ask('is this class ok?');

class AnotherWorkshop extends Workshop {
  ask(msg) {
    super.ask(msg.toUpperCase());
  }
}

var JSRecentParts = new AnotherWorkshop('kyle');

JSRecentParts.ask('are classes super?');
// Kyle ARE CLASSES SUPER?


// when you set a setTimeout, it's going to lose it's this binding
setTimeout(deepJS.ask, 100, 'still losing this?');
// returns undefined still losing this?

/* to fix the binding error in class, you can use the this keyword for the function

*/

class Workshop2 {
  constructor(teacher) {
    this.teacher = teacher;
    this.ask = question => {
      console.log(this.teacher, question);
    };
  }
}

var deepJS2 = new Workshop2('julie');
setTimeout(deepJS2.ask, 100, 'is this fixed?');
// returns Brent is this fixed?
