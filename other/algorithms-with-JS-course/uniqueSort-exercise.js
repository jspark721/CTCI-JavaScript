/* FASTER ALGORITHMS


there are common ways to speed up algorithms through caching previous values

*/

 const isUnique = (arr) => {
   let result = true;

   for (let i = 0; i < arr.length; i++) {
     console.log(`OUTER LOOP --- i === ${i}`);

     for (let j= 0; j < arr.length; j++) {
       console.log(`INNER LOOP --- j === ${j} `);
       if (i !== j && arr[i] === arr[j]) {
         result = false;
       }
     }
   }
   return result;
 }

console.log(isUnique([1, 2, 3]));

// this has time complexity of O(n^2) -- quadratic

// WE CAN DO BETTER! caching in breadcrumbs, this method we can take a quadratic time algorithm and make it linear -- huge gains in performance

const isUnique2 = (arr) => {
  const breadcrumbs = {};
  let result = true;

  for (let i = 0; i < arr.length; i++) {
    console.log(`LOOP --- i === ${i}`);
    if (breadcrumbs[arr[i]]) {
      //if breadcrumbs index already exists, change the result to false
      result = false;
    } else {
      //if it doesn't exist, then add the arr[i] to breadcrumbs and make it to true
      breadcrumbs[arr[i]] = true;
    }
  }
  return result;
}

// 
// console.log(isUnique2([1, 2, 3]));


const uniqueSort = (arr) => {
  const breadcrumbs = {};
  const newArr = [];

  for(let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if(!breadcrumbs[num]) {
      console.log(breadcrumbs);
      newArr.push(num);
      breadcrumbs[num] = true;
    }
  }
  return newArr.sort((a, b) => a - b);
}

let array = [21,4, 3, 2, 2, 1, 21, 3];

console.log(uniqueSort(array));
