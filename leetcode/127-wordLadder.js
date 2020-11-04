const wordLadder = (beginWord, endWord, wordList) => {
  //create a set with since array is O(n) for lookup while set is O(1) for lookup

  const wordsSet = new Set(wordList);
  //check if the endWord is in the words set or not
  if (!wordsSet.has(endWord)) return 0;

  //initialize our queue to support BFS
  const queue = [];
  queue.push(beginWord);

  //initialize our set to keep track of words we've seen
  const seenWords = new Set();
  seenWords.add(beginWord);

  //because we know there is a path to our endWord, we can initialize our changes counter to 1
  let counter = 1;

  while (queue.length) {
    console.log(`queue: ${queue}, seenWords: ${seenWords.size}`);
    for (let i = 0; i < queue.length; i++) {
      //pull the first word out of our queue
      const word = queue.shift();
      //check if we've found our end word
      if (word === endWord) return counter;

      //loop over all chars in the word, changing them to see if we can construct new words that are in our wordlist
      for (let j = 0; j < word.length; j++) {
        //replace each char with a-z using unicode (a = 97, z = 122)
        for (let char = 97; char < 123; char++) {
          const newWord = (
            word.substring(0, j) + String.fromCharCode(char)
          ).concat(word.substring(j + 1));
          //check if we found a new word that is in our list but hasn't been encountered before
          if (wordsSet.has(newWord) && !seenWords.has(newWord)) {
            console.log(newWord);
            //it's a new word, track it in our sets
            queue.push(newWord);
            seenWords.add(newWord);
          }
        }
      }
    }
    //increment the counter
    counter++;
  }
  //we couldn't find a path to our endword
  return 0;
};

console.log(
  wordLadder('red', 'tax', [
    'ted',
    'tex',
    'red',
    'tax',
    'tad',
    'den',
    'rex',
    'pee',
  ])
);
