/**
 * You want to build a word cloud, an infographic where the size of a word corresponds to how often it appears in the body of text.

To do this, you'll need data. Write code that takes a long string and builds its word cloud data in a map ↴ , where the keys are words and the values are the number of times the words occurred.
 */

const wordCloud = (string) => {
  if (string.length === 0) return;

  let data = new Map();
  let array = string.toLowerCase().split(' ');

  for (let i = 0; i < array.length; i++) {
    if (data.has(array[i])) {
      data.set(array[i], data.get(array[i]) + 1);
    } else {
      data.set(array[i], 1);
    }
  }
  return data;
};

let sentence =
  'After beating the eggs, Dana read the next step: Add milk and eggs, then add flour and sugar.';
console.log(wordCloud(sentence));
console.log(
  wordCloud(
    "We came, we saw, we conquered...then we ate Bill's (Mille-Feuille) cake."
  )
);
