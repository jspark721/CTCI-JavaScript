/*
 * We want make a package of goal kilos of skittles. We have
 * inventory of small bags (1 kilos each) and big bags (5 kilos each).
 * Return the number of small bags to use, assuming we always
 * use big bags before small bags. Return -1 if it can't be done.
 */

function packageWeight(small, big, goal) {
  let count = 0;

  while (goal / 5 >= 1 && big > 0) {
    goal -= 5;
    big--;
  }
  while (goal > 0 && small > 0) {
    count++;
    goal--;
    small--;
  }

  if (goal === 0) {
    return count;
  } else {
    return -1;
  }
}

console.log(packageWeight(4, 1, 5)); // return 0
console.log(packageWeight(4, 1, 4)); // return 4
console.log(packageWeight(5, 4, 9)); // return 4
console.log(packageWeight(9, 3, 18)); // return 3
console.log(packageWeight(4, 1, 9)); // return 4
console.log(packageWeight(4, 1, 7)); // return 2
console.log(packageWeight(4, 1, 10)); // return -1
console.log(packageWeight(6, 2, 7)); // return 2
