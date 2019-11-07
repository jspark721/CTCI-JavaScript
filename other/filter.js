const filterOutOdds = nums => nums.filter(num => num % 2 === 0);

let array = [1, 4, 2, 3, 15, 23, 21, 22];
console.log(filterOutOdds(array));

/* filter() creates a NEW array with elements that fall under a given criteria from an existing array

*/

let numbers = [1, 3, 4, 11, 5, 21, 3];

let greaterThanSeven = numbers.filter(num => num > 7);

console.log(greaterThanSeven);

// filtering an array of objects -- a common use case of .filter() is with an array of objects through their properties

let heroes = [
  {name: 'Batman', franchise: 'DC'},
  {name: 'Thor', franchise: 'Marvel' },
  {name: 'Aquaman', franchise: 'DC'},
  {name: 'Captain America', franchise: 'Marvel'}
];

let marvelHeroes = heroes.filter(hero => hero.franchise === 'Marvel');

console.log(marvelHeroes);

const fruits = ['apples', 'banana', 'mango', 'grapes', 'orange'];

const filterItems = (arr, query) => {
  return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1);

}

console.log(filterItems(fruits, 'ap')); //return apples & grapes
console.log(filterItems(fruits, 'an'));
