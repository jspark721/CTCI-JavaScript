//lexical scoping 

// javascript has lexical scoping with function scope -- a ne scope is created only when you create a new function


/* VAR VS LET 
var is function scoped, let is block scoped (meaning that a variable created with let keyword is available inside the "block" that it was created in as well as any nested blocks - between curly brace {} like in a for loop or an if statement)

*/

//example between var vs let vs const
// var : function scoped -- undefined when accessing  variable before it declared var is hoisted
// let : block scoped -- referenceError when accessing a variable before it's declared
// const : block scoped -- referenceError when accessing a variable before it's declared and can't be reassigned


function discountPrices(prices, discount) {
    var discounted =[];
    for(var i = 0; i < prices.length; i++) {
        var discountedPrice = prices[i] * (1 - discount);
        var finalPrice = Math.round(discountedPrice * 100) / 100;
        discounted.push(finalPrice);
    }
    console.log(i) // 3
    console.log(discountedPrice) // 150
    console.log(finalPrice) // 150

    return discounted;
}

// we can still log i, discountedPrice and finalPrice outside of the block(for loop) because they were declared with var and var is function scoped. if we change it to let and run it, we will get a ReferenceError: i is not defined

function discountPrices(prices, discount) {
    let discounted =[];
    for(let i = 0; i < prices.length; i++) {
        let discountedPrice = prices[i] * (1 - discount);
        let finalPrice = Math.round(discountedPrice * 100) / 100;
        discounted.push(finalPrice);
    }
    console.log(i) // 3
    console.log(discountedPrice) // 150
    console.log(finalPrice) // 150

    return discounted;
}

discountPrices([100, 200, 300], .5) // X referenceError!!

// let and var can be re-assigned but const can't be reassigned! but it's not immutable.. for example

const person = { 
    name: 'Julie Park'
}
person.name = 'Julie Park Kim' // works!

person = {} // X error-- doesn't work because this is assignment to constant variable

// so changing a property on an object isn't reassigning it so even though an object is declared with const, that doesn't mean you can't mutate any of its properties, it only means you can't reassigned it to a new value

var outerFunction = function() {
    if(true){
        var x = 5;
    }
}