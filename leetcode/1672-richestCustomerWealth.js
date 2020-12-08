/**
 * You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

 

Example 1:

Input: accounts = [[1,2,3],[3,2,1]]
Output: 6
Explanation:
1st customer has wealth = 1 + 2 + 3 = 6
2nd customer has wealth = 3 + 2 + 1 = 6
Both customers are considered the richest with a wealth of 6 each, so return 6.
Example 2:

Input: accounts = [[1,5],[7,3],[3,5]]
Output: 10
Explanation: 
1st customer has wealth = 6
2nd customer has wealth = 10 
3rd customer has wealth = 8
The 2nd customer is the richest with a wealth of 10.
 */


//solution 1: use while loop

/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
  if(accounts.length === 0) return;
  
  let sum = 0;
  let i = 0;
  let j = 0;
  let max = 0;
  while(i < accounts.length) {
      j= 0;
      sum = 0;
      while(j < accounts[i].length) {
          sum += accounts[i][j];
          j++;
      }
      max = Math.max(max, sum)
      i++;
  }
  return max;
};

//time complexity: O(n^2)

//solution 2: use reduce
var maximumWealth = function(accounts) {
  return accounts.reduce((prevAmount, currentAmount) =>  Math.max(prevAmount, Math.max(prevAmount, currentAmount.reduce((curr,prev) => curr + prev, 0))), 0)
};