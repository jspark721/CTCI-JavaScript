function isPrime(num) {
  for (let i = 2; i <= Math.floor(num / 2); i++) {
    console.log(`num ${num} i ${i}`);
    if (num % i === 0) return false;
  }
  return true;
}

console.log(isPrime(127));
