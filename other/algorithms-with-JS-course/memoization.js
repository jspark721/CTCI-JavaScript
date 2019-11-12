// task 1: write a function, times 10, that takes an argument, n, and multiplies n times 10

const times10 = (num) => {
  return num * 10;
};

console.log('------TASK 1------');
console.log('times10 returns: ', times10(9));

/* task 2: use an object to cache/ or memoize the results of the times10 function

    tip 1: create a function that checks if the value for n has been calculated before
    tip 2: if the value of n has not been calculated, calculate and then save the result in the cache object
*/

const cache = {};
const memoTimes10 = (n) => {
  if (n in cache) {
    console.log('fetching from cache:', n);
    return cache[n];
  } else {
    console.log('calculating result');
    let result = times10(n);
    cache[n] = result; // saving the result of times10(n), in this case, 9, into the cache object
    return result;
  }
};

//so after it's gone through it once and it's cached, the cache = {}; will have {9: 90}
console.log('-----TASK 2------');
console.log('Task 2 calculated value:', memoTimes10(9)); //calculated
console.log('Task 2 cached value:', memoTimes10(9)); //cached

console.log(cache); // {'9': 90}

console.log('first calculation for 21', memoTimes10(21));
console.log(cache);

console.log('cached', memoTimes10(21));


// task 3: clean up your global scope by moving your cache inside the function -- tip: use a closure to return a function that you can call later

const memoizedClosureTimes10 = () => {
  let cache = {}; // local version of the cache that doesnt reset every single time we call the function and it doesn't clutter the global scope
  return (n) => {
    if(n in cache) {
      console.log('fetching from cache// closure:', n);
      return cache[n];
    } else {
      console.log('calculating result// closure');
      let result = n * 10;
      cache[n] = result;
      return result;
    }
  };

};

//making the cache variable private

const memoClosureTimes10 = memoizedClosureTimes10();
console.log('------TASK 3------');
console.log(memoClosureTimes10(7));
try {
  console.log('Task 3 calculated value:', memoClosureTimes10(7)); //calculated
  console.log('Task 3 cached value:', memoClosureTimes10(7)); //cached
} catch(e) {
  console.error('Task 3:', e);
}

//pass a variable for what you want it to times it by, by passing in an argument in the function
const memoizedClosureTimesM = (m) => {
  let cache = {};
  return (n) => {
    if(n in cache) {
      return cache[n];
    } else {
      let result = n * m;
      cache[n] = result;
      return result;
    }
  };
};

const memoClosureTimes5 = memoizedClosureTimesM(5);

console.log(memoClosureTimes5(70));


/* GENERIC MEMOIZE FUNCTION */

//task 4: make your memo function generic and accept the times10 function as a callback rather than defining the n * 10 logic inside the if/else or pulling it in from the global scope

// tip: take advantage of the fact that parameters are saved in the colsure as well, just like the cache from the previous example

const memoize = (callback) => {

}
const memoizedTimes10 = memoize(times10);
