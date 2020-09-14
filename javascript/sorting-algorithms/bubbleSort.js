/**
 * sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order -- (bubble up)
 -- the pass through the list is repeated until the list is sorted

*/

const bubbleSortwithForLoops = function (array) {
  for (let i = 0; i < array.length; i++) {
    //j < (length - 1)
    for (let j = 0; j < array.length - i - 1; j++) {
      console.log(`i ${i} - ${array[i]} j ${j}, array ${array}`);
      if (array[j] > array[j + 1]) {
        //swap the numbers
        console.log(`array[j] ${array[j]}, array[j+1] ${array[j + 1]}`);
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
};

const testArray = [3, 5, 34, 1, 21];

console.log(bubbleSortwithForLoops(testArray));
