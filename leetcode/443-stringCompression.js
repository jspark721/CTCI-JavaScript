const stringCompression = (chars) => {
  if (chars.length === 0) return 0;

  //i is for reading, index is for writing
  let index = 0;
  let i = 0;

  while (i < chars.length) {
    let j = i;
    console.log(`---first--- i:${i} j:${j} index:${index}`);
    while (j < chars.length && chars[j] === chars[i]) {
      j++;
    }
    console.log(
      `index ${index} chars[index]:${chars[index]} || i: ${i} chars[i]:${chars[i]} j: ${j}`
    );
    //write compress letter
    chars[index] = chars[i];
    index++;

    if (j - i > 1) {
      let count = j - i + ""; //coerce number type to string
      for (let c = 0; c < count.length; c++) {
        chars[index] = count[c];
        index++;
      }
    }
    // even though there are nested loops, time complexity is O(n) becasue i is updated to j
    i = j;
  }
  //since the 'compressing' is done in place, index returns the updated length of the array
  console.log(chars);
  return index;
};

console.log(stringCompression(["a", "a", "b", "b", "c", "c", "c"]));
console.log(
  stringCompression([
    "a",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
  ])
); //return 4

/*
another solution by initializing a new empty array 
*/

const stringCompression2 = (chars) => {
  if (chars.length === 0) return 0;

  let result = [];
  for (let i = 0; i < chars.length; i++) {
    let count = 0;
    console.log(`i:${i} count: ${count} result: ${result}`);
    //using while instead of an if statement because we need to keep increasing the count if the chars are the same
    while (chars[i] === chars[i + 1]) {
      count++;
      i++;
    }
    if (count != 0) {
      count++;
      result.push(chars[i], ...`${count}`.split(""));
    } else {
      result.push(chars[i]);
    }
  }
  console.log(result);
  return result.length;
};

console.log("-------second solution------");
console.log(stringCompression2(["a", "a", "b", "b", "c", "c", "c"]));
console.log(
  stringCompression2([
    "a",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
  ])
); //return 4
