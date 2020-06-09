function sumAllPrimes(num) {
  let primes = 0;

  for (let i = 2; i <= num; i++) {
    primes += isPrime(i) ? i : 0;
  }
  return primes;
}

function isPrime(num) {
  for (let i = 2; i <= Math.floor(num / 2); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(isPrime(7));
