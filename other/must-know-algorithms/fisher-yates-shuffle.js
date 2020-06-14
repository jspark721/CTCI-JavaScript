/* unbiased shuffle algorithm

*/

const shuffle = (array) => {
  let currentIndex = array.length;
  let temp;
  let randomIndex;

  //while there remain elements to shuffle
  while (currentIndex !== 0) {
    //pick a remaining element
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    //swap it with current element
    temp = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temp;
  }

  return array;
};

let cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log(shuffle(cards));
