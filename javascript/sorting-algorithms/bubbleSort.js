const bubbleSortwithForLoops = function (array) {
  for (let i = 0; i < array.length; i++) {
    //j < (length - 1)
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        //swap the numbers
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
};

const testArray = [3, 5, 34, 1, 21, 100, 4];

console.log(bubbleSortwithForLoops(testArray));
