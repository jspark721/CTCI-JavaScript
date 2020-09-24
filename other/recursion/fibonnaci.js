const fib = (n) => {
  if (n < 3) return 1;

  return fib(n - 1) + fib(n - 2);
};

//time complexity: O(2^n)
console.log(fib(5));

//fibonacci using iterative and dynammic programming

const fibDP = (n) => {
  if (n <= 2) return n;

  let dp = new Array(n + 1).fill(0);
  dp[0] = 0;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

console.log(fibDP(8));

//fibonnaci with memoization

const fibMemo = (n) => {
  let memo = {};
  const helper = (i) => {
    if (memo[i]) return memo[i];
    if (i == 1 || i == 0) return i;

    return (memo[i] = helper(i - 1) + helper(i - 2));
  };
  return helper(n);
};

console.log(fibMemo(8));
