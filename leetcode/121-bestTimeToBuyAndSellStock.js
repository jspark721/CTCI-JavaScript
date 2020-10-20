const maxProfit = (prices) => {
  if (prices.length === 0) return 0;

  let minPrice = prices[0];
  let maxProfit = prices[1] - prices[0];

  for (let i = 1; i < prices.length; i++) {
    let currentPrice = prices[i];
    let potentialProfit = currentPrice - minPrice;
    maxProfit = Math.max(maxProfit, potentialProfit);
    minPrice = Math.min(minPrice, currentPrice);
  }
  return maxProfit > 0 ? maxProfit : 0;
};

const maxProfit2 = (prices) => {
  let minPrice = prices[0];
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }
    let diff = prices[i] - minPrice;
    if (diff > maxProfit) {
      maxProfit = diff;
    }
  }
  return maxProfit;
};
