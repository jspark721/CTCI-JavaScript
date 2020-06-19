/*
Given Gary's sequence of up and down steps during his last hike, find and print the number of valleys he walked through.

For example, if Gary's path is , he first enters a valley  units deep. Then he climbs out an up onto a mountain  units high. Finally, he returns to sea level and ends his hike.

input: n = 8, s = UDDDUDUU
output: 1

one valley

*/

const countingValleys = (n, s) => {
  if (s.length == 0) return;

  let level = 0;
  let valley = 0;
  for (let i = 0; i < n; i++) {
    if (s[i] === 'U') {
      level++;
      console.log(`level ${level}`);
      if (level == 0) {
        valley++;
        console.log(`valley ${valley}`);
      }
    } else {
      level--;
    }
  }
  return valley;
};

console.log(countingValleys(8, 'UDDDUDUU')); // return 1
console.log(countingValleys(8, 'UDDUUDDU')); // return 2
console.log(countingValleys(12, 'UDDUUDDUDDUU')); // return 3
