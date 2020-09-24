/**Write an efficient function that takes stockPrices and returns the best profit I could have made from one purchase and one sale of one share of Apple stock yesterday.

For example:

const stockPrices = [10, 7, 5, 8, 11, 9];

getMaxProfit(stockPrices);
// Returns 6 (buying for $5 and selling for $11)

No "shorting"—you need to buy before you can sell. Also, you can't buy and sell in the same time step—at least 1 minute has to pass. 

input: array
output: number (max profit)
constraints: optimize
edge cases: empty stock prices or only one stock price value


example: [3,1,9,5,2]
return 8 because it's max profit when you buy at 1 and sell at 9
*/

const getMaxProfit = (stockPrices) => {
  if (stockPrices.length === 0) {
    return -1;
  }

  let maxProfit = -Infinity;

  for (let earlierTime = 0; earlierTime < stockPrices.length; earlierTime++) {
    const earlierPrice = stockPrices[earlierTime];
    for (
      let laterTime = earlierTime + 1;
      laterTime < stockPrices.length;
      laterTime++
    ) {
      const laterPrice = stockPrices[laterTime];
      const potentialProfit = laterPrice - earlierPrice;

      maxProfit = Math.max(maxProfit, potentialProfit);
    }
  }

  return maxProfit;
};

console.log(getMaxProfit([3, 1, 9, 5, 2])); // return 8

//time complexity: O(n^2)
//space complxity: O(1) -- not taking any extra space

//we can do better than quadratic time

const maxProfit = (stocks) => {
  if (stocks.length === 0 || stocks.length === 1) return -1;

  //initialize min price with the first stock price
  let minPrice = stocks[0];
  let maxProfit = stocks[1] - stocks[0];

  for (let i = 1; i < stocks.length; i++) {
    let currentPrice = stocks[i];
    let potentialProfit = currentPrice - minPrice;

    console.log(
      `price: ${currentPrice} min: ${minPrice} maxProfit: ${maxProfit} potential: ${potentialProfit}`
    );
    maxProfit = Math.max(maxProfit, potentialProfit);
    //if there is a price thats lesser than the current minPrice, we will change it to that price
    minPrice = Math.min(minPrice, currentPrice);
  }

  return maxProfit;
};

//this solution cuts down the time complexity to O(n) as we are keeping track of the min price and only looping through the array once

console.log(maxProfit([9, 7, 4, 1])); // -2
console.log(maxProfit([3, 10, 4, 7, 1])); // 7
console.log(maxProfit([12, 12, 12, 12, 12])); // 0

//O(n) time and O(1)O(1) space. We only loop through the array once.
