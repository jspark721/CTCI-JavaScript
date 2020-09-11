//write a recusive function that takes a given number and sums all the numbers from itself down to 0

const sumAllNum = (num) => {
  if (num === 0) return num;
  console.log(num);
  return num + sumAllNum(num - 1);
};

console.log(sumAllNum(5)); //15
