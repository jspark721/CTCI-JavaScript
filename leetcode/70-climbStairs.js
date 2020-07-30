/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  //create an array size n + 1 so we can just return dp[n] instead of dp[n-1] since arrays are zero based

  /*if n = 4, we will get an array like this 
  [0, 0, 0, 0, 0]
   0  1  2  3  4

  */
  const dp = new Array(n + 1).fill(0);

  //for n=0, answer is always 1, we can only take no steps
  //for n=1, answer is always 1, we can only take 1 step
  //for n=2, answer is always 2, we can take 2 step, or 1 step + 1 step
  dp[0] = 1;
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    // the answer to the ith subproblem is the sum between the i-1 stairs and i-2 stairs
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

console.log(climbStairs(4)); //return 5
console.log(climbStairs(5)); //return 8
