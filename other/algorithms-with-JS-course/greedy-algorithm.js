//write a function, makeChange, that returns an integer that represents the least number of coins that add up to an amount where the amount is always divisible by 5


// coin values: 5, 10, 25

// input amount: 40, output # of coins: 3 -- 25, 10, 5
// input amount: 35, output # of coins: 2 -- 25, 10

// the greedy solution! would be simply to always subtract the largets coin possible from the current amount

// const makeChange = (coins, amount) => {
//   //sort the coins array first
//   coins.sort((a,b) => b - a);
//   let coinTotal = 0;
//   let i = 0;
//   console.log(coins);
//
//   while(amount > 0) {
//     if(coins[i] <= amount) {
//       amount -= coins[i];
//       coinTotal++;
//       console.log(amount);
//     } else {
//       i++;
//     }
//   }
//   return coinTotal;
// };
//
// console.log('makeChange answer:', makeChange([5, 10, 25], 40));
//
// // but the greedy solution might not work depending on the input values
//
// // what is the coin values are 1, 6, 10 and input is 12, this won't return the correct answer
//
// console.log('greedy solution may not work', makeChange([2, 6, 10], 12));

/* so instead of the greedy solution, use BRUTE FORCE

Brute Force Approach: calculate every single combination possible and keep track of the minimum
*/

const coins = [10, 6, 2];

const makeChange2 = (value) => {
  if (value === 0) return 0;
  let minCoins;

  coins.forEach((coin) => {
    if(value - coin >= 0) {
      let currMinCoins = makeChange2((value - coin));
      if(minCoins === undefined || currMinCoins < minCoins) {
        minCoins = currMinCoins;
      }
    }
  });
  return minCoins + 1;
}
// this would be O(n^2) -- exponential
console.log('brute force recursion', makeChange2(18));
