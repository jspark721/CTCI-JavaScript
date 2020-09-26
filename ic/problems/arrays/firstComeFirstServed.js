/**
 * 
 * Given all three arrays, write a function to check that my service is first-come, first-served. All food should come out in the same order customers requested it.

  We'll represent each customer order as a unique integer.

  As an example,

  Take Out Orders: [1, 3, 5]
  Dine In Orders: [2, 4, 6]
  Served Orders: [1, 2, 4, 6, 5, 3] 
  would not be first-come, first-served, since order 3 was requested before order 5 but order 5 was served first.

But,
Take Out Orders: [17, 8, 24]
Dine In Orders: [12, 19, 2]
Served Orders: [17, 8, 12, 19, 24, 2]
would be first-come, first-served.
*/

// recursive
const firstComeFirstServed = (takeOut, dineIn, served) => {
  if (served.length === 0) {
    return true;
  }
  //if first order in served is same as first in takeout order
  if (takeOut.length && takeOut[0] === served[0]) {
    served.shift();
    return firstComeFirstServed(takeOut.slice(1), dineIn, served);
  } else if (dineIn.length && dineIn[0] === served[0]) {
    //if first order in served is same as first in dinein
    served.shift();
    return firstComeFirstServed(takeOut, dineIn.slice(1), served);
  } else {
    return false;
  }
};

const takeout = [17, 8, 24];
const dinein = [12, 19, 2];
const served = [17, 8, 12, 19, 24, 2];

console.log(firstComeFirstServed(takeout, dinein, served));
console.log(firstComeFirstServed([2, 10, 4], [21, 3, 5], [21, 2, 4, 3, 10, 5]));

//time complexity: O(n^2) because we are slicing the array each time and moving the array
//space complexity: O(n) -- taking space in the call stack because of recursion

//we can avoid the slicing of the array by keeping track of the index
const restuarantOrders = (
  takeout,
  dinein,
  served,
  servedIndex,
  dineIndex,
  takeoutIndex
) => {
  servedIndex = servedIndex !== null ? servedIndex : 0;
  dineIndex = dineIndex !== null ? dineIndex : 0;
  takeoutIndex = takeoutIndex !== null ? takeoutIndex : 0;

  //base case -- we reached the end of the order and it was all in order
  if (servedIndex === served.length) return true;

  if (
    takeoutIndex < takeout.length &&
    takeout[takeoutIndex] === served[servedIndex]
  ) {
    takeoutIndex++;
  } else if (
    dineIndex < dinein.length &&
    dinein[dineIndex] === served[servedIndex]
  ) {
    dineIndex++;
  } else {
    return false;
  }
  servedIndex++;
  return restuarantOrders(
    takeout,
    dinein,
    served,
    servedIndex,
    dineIndex,
    takeoutIndex
  );
};

console.log(
  restuarantOrders(
    takeout,
    dinein,
    served,
    (servedIndex = null),
    (dineIndex = null),
    (takeoutIndex = null)
  )
);

/* iterative solution by keeping pointer at the current index to the end of the array for each array
 */

const isFirstComeFirstServed = (takeout, dinein, served) => {
  if (served.length === 0) return false;

  let tIndex = 0;
  let dIndex = 0;
  let tMax = takeout.length - 1;
  let dMax = dinein.length - 1;

  for (let i = 0; i < served.length; i++) {
    let order = served[i];
    if (tIndex <= tMax && order === takeout[tIndex]) {
      tIndex++;
    } else if (dIndex <= dMax && order === dinein[dIndex]) {
      dIndex++;
    } else {
      return false;
    }
  }

  if (tIndex !== takeout.length || dIndex !== dinein.length) {
    return false;
  }

  return true;
};

console.log(
  isFirstComeFirstServed(
    [2, 10, 5, 21],
    [3, 70, 55, 12],
    [2, 3, 10, 5, 70, 55, 21, 12]
  )
);

//time complexity: O(n) keeping pointers and not removing items from the array saves time and we just need to go through all the arrays once
//space complexity: O(1) constant space, we're not taking any extra space
