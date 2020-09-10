/**
 * @param {number} N
 * @return {number}
 */

//recursive version
const fibRecursive = (n) => {
  if (n === 1 || n === 0) {
    return n;
  }

  return fibRecursive(n - 1) + fibRecursive(n - 2);
};
//time complexity is exponential

//iterative version
const fibIterative = (n) => {
  if (n === 1 || n === 0) return n;

  let prevPrev = 0;
  let prev = 1;
  let current;
  let i = 1;

  while (i < n) {
    current = prevPrev + prev;
    prevPrev = prev;
    prev = current;
    i++;
  }
  return current;
};

//memoized version
var fibMemoize = function (n) {
  if (n < 2) return n;
  let cache = [0, 1];
  for (let i = 2; i <= n; i++) {
    cache[i] = cache[i - 1] + cache[i - 2];
  }
  return cache[n];
};

console.log(fibRecursive(5));
console.log(fibIterative(5));
console.log(fibMemoize(5));
