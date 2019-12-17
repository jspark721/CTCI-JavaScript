/* 

implicit vs explicit type coersion

implicit: when values are automatically converted between different types, for example, if(value) { ... } -- the value will be automatically coerced into a boolean

explicit: when you explicitly coerce a javascript type into a different type, for example, using Number(value) to explicitly coerce something into a number 

three types of conversion:
- to string
- to boolean
- to number

string: 
String(123) // explicit
123 + '' // implicit

boolean: 
Boolean(2) // explicit
!!2 // implicit due to logical operator
2 || 'hello' // implicit due to logical operator

number: 
Number('123') // explicit
+'123 // implicit
123 != '456' // implicit 
4 > '5' // implicit
*/

// coercion exercise 

/*# Working With Coercion

In this exercise, you will define some validation functions that check user inputs (such as from DOM elements). You'll need to properly handle the coercions of the various value types.

## Instructions

1. Define an `isValidName(..)` validator that takes one parameter, `name`. The validator returns `true` if all the following match the parameter (`false` otherwise):

	- must be a string
	- must be non-empty
	- must contain non-whitespace of at least 3 characters

2. Define an `hoursAttended(..)` validator that takes two parameters, `attended` and `length`. The validator returns `true` if all the following match the two parameters (`false` otherwise):

	- either parameter may only be a string or number
	- both parameters should be treated as numbers
	- both numbers must be 0 or higher
	- both numbers must be whole numbers
	- `attended` must be less than or equal to `length`
*/

// TODO: write the validation functions

function isValidName(name) {
    if(typeof name === 'string' && name.trim().length >= 3) {
        return true;
    } 
    return false;
}

function hoursAttended(attended, length) {
    if(typeof attended === 'string' && attended.trim() != '') {
        attended = Number(attended);
    } 
    if(typeof length === 'string' && length.trim() != '') {
        length = Number(length);
    }
    if(typeof attended == 'number' && typeof length == 'number' && attended >= 0 && length >= 0 && Number.isInteger() && Number.isInteger(length) && attended <= length) {
        return true;
    }
    return false;
}


// tests:
// console.log(isValidName("Frank") === true);
// console.log(hoursAttended(6,10) === true);
// console.log(hoursAttended(6,"10") === true);
// console.log(hoursAttended("6",10) === true);
// console.log(hoursAttended("6","10") === true);
// console.log(isValidName(false) === false);
// console.log(isValidName(null) === false);
// console.log(isValidName(undefined) === false);
// console.log(isValidName("") === false);
// console.log(isValidName("  \t\n") === false);
// console.log(isValidName("X") === false);
// console.log(hoursAttended("",6) === false);
// console.log(hoursAttended(6,"") === false);
// console.log(hoursAttended("","") === false);
// console.log(hoursAttended("foo",6) === false);
// console.log(hoursAttended(6,"foo") === false);
// console.log(hoursAttended("foo","bar") === false);
// console.log(hoursAttended(null,null) === false);
// console.log(hoursAttended(null,undefined) === false);
// console.log(hoursAttended(undefined,null) === false);
// console.log(hoursAttended(undefined,undefined) === false);
// console.log(hoursAttended(false,false) === false);
// console.log(hoursAttended(false,true) === false);
// console.log(hoursAttended(true,false) === false);
// console.log(hoursAttended(true,true) === false);
// console.log(hoursAttended(10,6) === false);
// console.log(hoursAttended(10,"6") === false);
// console.log(hoursAttended("10",6) === false);
// console.log(hoursAttended("10","6") === false);
// console.log(hoursAttended(6,10.1) === false);
// console.log(hoursAttended(6.1,10) === false);
// console.log(hoursAttended(6,"10.1") === false);
// console.log(hoursAttended("6.1",10) === false);
// console.log(hoursAttended("6.1","10.1") === false);


//TODO: ...findAll(value) function
function findAll(match,arr) {
    var ret = [];
    for (let v of arr) {
      if (Object.is(match,v)) {
        ret.push(v);
      }
      else if (match == null && v == null) {
        ret.push(v);
      }
      else if (typeof match == "boolean") {
        if (match === v) {
          ret.push(v);
        }
      }
      else if (typeof match == "string" && match.trim() != "" && typeof v == "number" && !Object.is(-0,v)) {
        if (match == v) {
          ret.push(v);
        }
      }
      else if (typeof match == "number" && !Object.is(match,-0) && !Object.is(match,NaN) && !Object.is(match,Infinity) && !Object.is(match,-Infinity) && typeof v == "string" && v.trim() != "") {
        if (match == v) {
          ret.push(v);
        }
      }
    }
      return ret;
  }
  
var myObj = { a: 2 };

var values = [
	null, undefined, -0, 0, 13, 42, NaN, -Infinity, Infinity,
	"", "0", "42", "42hello", "true", "NaN", true, false, myObj
];

console.log(setsMatch(findAll(null,values),[null,undefined]) === true);
console.log(setsMatch(findAll(undefined,values),[null,undefined]) === true);
console.log(setsMatch(findAll(0,values),[0,"0"]) === true);
console.log(setsMatch(findAll(-0,values),[-0]) === true);
console.log(setsMatch(findAll(13,values),[13]) === true);
console.log(setsMatch(findAll(42,values),[42,"42"]) === true);
console.log(setsMatch(findAll(NaN,values),[NaN]) === true);
console.log(setsMatch(findAll(-Infinity,values),[-Infinity]) === true);
console.log(setsMatch(findAll(Infinity,values),[Infinity]) === true);
console.log(setsMatch(findAll("",values),[""]) === true);
console.log(setsMatch(findAll("0",values),[0,"0"]) === true);
console.log(setsMatch(findAll("42",values),[42,"42"]) === true);
console.log(setsMatch(findAll("42hello",values),["42hello"]) === true);
console.log(setsMatch(findAll("true",values),["true"]) === true);
console.log(setsMatch(findAll(true,values),[true]) === true);
console.log(setsMatch(findAll(false,values),[false]) === true);
console.log(setsMatch(findAll(myObj,values),[myObj]) === true);

console.log(setsMatch(findAll(null,values),[null,0]) === false);
console.log(setsMatch(findAll(undefined,values),[NaN,0]) === false);
console.log(setsMatch(findAll(0,values),[0,-0]) === false);
console.log(setsMatch(findAll(42,values),[42,"42hello"]) === false);
console.log(setsMatch(findAll(25,values),[25]) === false);
console.log(setsMatch(findAll(Infinity,values),[Infinity,-Infinity]) === false);
console.log(setsMatch(findAll("",values),["",0]) === false);
console.log(setsMatch(findAll("false",values),[false]) === false);
console.log(setsMatch(findAll(true,values),[true,"true"]) === false);
console.log(setsMatch(findAll(true,values),[true,1]) === false);
console.log(setsMatch(findAll(false,values),[false,0]) === false);

// ***************************

function setsMatch(arr1,arr2) {
	if (Array.isArray(arr1) && Array.isArray(arr2) && arr1.length == arr2.length) {
		for (let v of arr1) {
			if (!arr2.includes(v)) return false;
		}
		return true;
	}
	return false;
}
