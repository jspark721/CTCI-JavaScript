/* the Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value

A Map object iterates the leements in insertion order -- a for...of loop returns an array of [key, value] for each iteration
*/

let myMap = new Map();

myMap.set('1', 'str1'); // a string key
myMap.set(1, 'num1'); // a numeric key
myMap.set(true, 'bool1'); // a boolean key

myMap.get(1); // returns 'num1'
myMap.get('1'); // returns 'str1'

myMap.size; //returns 3

// array of [key, value] pairs
let map = new Map([
  ['1',  'str1'],
  [1,    'num1'],
  [true, 'bool1']
]);

console.log(map.get('1')); // str1

// Iterate over map keys
// to get keys of a Map object, use `keys()` method

let john = {name: 'John Doe'}, lily = {name: 'Lily Bush'}, peter = {name: 'Peter Smith'};
let userRoles = new Map([
	[john, 'admin'],
	[lily, 'editor'],
	[peter, 'subscriber']
]);

for(let user of userRoles.keys()) {
	console.log(user.name);
}

// John Doe
// Lily Bush
// Peter Smith

//iterate over map values
for(let role of userRoles.values()) {
	console.log(role);
}
// admin
// editor
// subscriber

//iterate over map elements
for(let elem of userRoles.entries()) {
	console.log(`${elem[0].name}: ${elem[1]}`);
}

// John Doe: admin
// Lily Bush: editor
// Peter Smith: subscriber

//but instead to make iteration more natural, use destructring instead
for(let [user, role] of userRoles.entries()) {
	console.log(`${user.name}: ${role}`);
}
// or you can use forEach() method instead
userRoles.forEach((role, user) => console.log(`${user.name}: ${role}`));
