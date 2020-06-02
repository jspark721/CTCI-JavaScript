/*
Count the number of prime numbers less than a non-negative number, n

Input: 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7

*/

const countPrimes = function (n) {
  let primes = [];
  if (n < 2) return primes;

  let i = 2;
  while (i < n) {
    let j = 2;
    let isPrime = true;
    //check if i is a prime number
    while (j * j < i) {
      console.log(`j ${j} i ${i}`);
      if (i % j === 0) {
        isPrime = false;
      }
      j++;
    }
    if (isPrime) {
      primes.push(i);
    }
    i++;
  }
  return primes;
};

// console.log(countPrimes(10));

//above code fails time exceeded test, too slow

const countPrimesSieve = function (n) {
  if (n < 2) return 0;

  let count = 0;
  let array = [];
  let primes = [];
  for (let i = 2; i < n; i++) {
    console.log(`-----i  ${i}, count ${count}------`);
    if (array[i]) {
      continue;
    } else {
      count++;
      primes.push(i);
    }
    for (let j = i + i; j <= n; j += i) {
      array[j] = true;
      console.log(`j: ${j}, array: ${array[j]}`);
    }
  }
  return primes;
};

console.log(countPrimesSieve(10));
