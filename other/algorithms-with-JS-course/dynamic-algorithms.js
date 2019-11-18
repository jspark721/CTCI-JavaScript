/* dynamic programming -- which is a data optimization technique, the dynamic approach cache values to avoid repeated calculations

memoize is a "dynamic approach solution"

you can think of it just as "caching"
couple different ways to cache your solutions:
  1. top-down recursive approach
  2. bottom-up iterative technique: translate the recursion into a iterative solution starting from the simplest problem

*/

/* Dynamic Programming Qualities: optimal substructure (tends to be recursive), overlapping subproblems

big companies ask about a lot of dynamic programming algorithms

*/

// memoization with recursion

const cache = {};
const coins = [10, 6, 1];

const makeChange = (c) => {
  // return the value if it's in the cache
  if(cache[c]) return cache[c];

  let minCoins = -1;

  //find the best coin
  coins.forEach(coin => {
    if(c - coin >= 0) {
      let currMinCoins = makeChange(c - coin);
      if(minCoins === -1 || currMinCoins < minCoins) {
        minCoins = currMinCoins;
      }
    }
  });

  //save the value into the cache
  cache[c] = minCoins + 1;
  return cache[c];
}

console.log(makeChange(19));
