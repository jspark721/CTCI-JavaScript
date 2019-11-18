/* comparison sorts

naive sorts: keep looping and comparing values until the list is sorted
  - bubble sort
  - insertion sort
  - selection sort

divide & conquer sorts: recursively divide lists and sort smaller parts of list until entire list is sorted
  - merge sort (not an inplace sort, we create a new array so it increases the space complexity)
  - quick sort


searching and sorting are pretty time-intensive operations and they're also core to a lot of the processing
*/

// bubble sort: loop through an array, comparing adjacent indices and swapping the greater value to the end -- bubbling up


// MERGE SORT -- takes the divide & conquer approach to sorting, with merge sort, data is separated into smaller lists, the merge step combines two sorted lists into one sorted list

// http://rebootjeff.github.io/comparisonsort/ sorting visulization
function merge(left, right) {
  let resultArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  //we will concatenate values into the resultArray in order
  while (leftIndex < left.length && rightIndex < right.length) {
    if(left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++; //move left array cursor
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++; //move right array cursor
    }
  }
  return resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

function mergeSort(unsortedList) {
  //base case -- no need to sort the list if the list length is one or less than one
  if(unsortedList.length <= 1 ) {
    return unsortedList;
  }

  //figure out the middle of the array
  let middle = Math.floor(unsortedList.length/2);

  //divide the array into left and right array
  const leftArray = unsortedList.slice(0, middle);
  const rightArray = unsortedList.slice(middle);

  //use recursion to combine left and right
  return merge(
    mergeSort(leftArray), mergeSort(rightArray)
  );
}

let mergeArray = [3, 2, 5, 21, 1, -5, 100, 41, 37];

console.log(mergeSort(mergeArray));

//bubble sort

// naive bubble sort basic implementation
function bubbleSortBasic(array){
 let length = array.length;
 for(let i = 0; i < length; i++) {
   for(let j = 0; j < length; j++) {
     if(array[j] > array[j+1]) {
       let temp = array[j];
       console.log('first tmp', temp);
       array[j] = array[j+1];
       console.log('second tmp', array[j+1]);
       array[j + 1] = temp;
       console.log(array);
     }
   }
 }
 return array;
}

let array = [2, 1, 4, 0];
console.log(bubbleSortBasic(array));
//the code will run until the "i" variable is equal to the "length" variable -- which means that it may run on an already sorted array more than once

//a more efficient way to do bubble sort is to keep track of a variable "swapped" which is initially set to false -- during each iteration, if values are swapped, then the "swapped" variable is set to true. then using a do-while loop, it will only run the code if the swapped variable is true, thus ensuring that only 1 extra verification iteration happens

let bubbleSort = (arr) => {
  let length = arr.length;
  let swapped;

  do {
    swapped = false;
    for(let i = 0; i < length; i++) {
      if(arr[i] > arr[i+1]) {
        let temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        swapped = true;
        console.log(arr);
      }
    }
  } while(swapped);
  return arr;
}

let arr = [21, 2, 7, 5, 10];
console.log(bubbleSort(arr));
