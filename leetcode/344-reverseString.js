const reverseString = function (string) {
  if (string.length === 0) {
    return;
  }
  //set two pointers, front and back
  //while front is less than back index, keep switching the array
  for (let front = 0, back = string.length - 1; front < back; front++) {
    let temp = string[front];
    string[front] = string[back];
    string[back] = temp;
    back--;
  }
  return string;
};

console.log(reverseString(['h', 'e', 'l', 'l', 'o']));

//use a while loop instead of for loop
var reverseStringWhileLoop = function (s) {
  let len = s.length;
  if (!len || len == 1) return s;

  let left = 0,
    right = len - 1;
  while (left <= right) {
    let temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    l++;
    r--;
  }
};

const reverseStringDestructuring = function (s) {
  let len = s.length;
  if (len === 0 || len === 1) return s;

  let left = 0,
    right = len - 1;
  while (left < right) {
    //switch using es6 destructuring
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
};
