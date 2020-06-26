function rotLeft(a, d) {
  if (d >= a.length) {
    d = d % a.length;
  }

  while (d !== 0) {
    a.push(a.shift());
    d--;
  }
  return a;
}

console.log(rotLeft([1, 2, 3, 4, 5], 6));
