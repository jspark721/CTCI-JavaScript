//return all possible combinations of the array

const combinations = (elements) => {
  //base case-- what is the smallest element of the input? simplest input? probably an empty array
  if (elements.length === 0) return [[]];

  //either take the current element or not take it
  const firstElement = elements[0];
  const rest = elements.slice(1);

  //recursive call through the elements without the first element
  const combinationsWithoutFirst = combinations(rest);

  //empty array
  const combinationsWithFirst = [];
  //loop through the combinations without first and then add the combinations with the first element to the empty array
  combinationsWithoutFirst.forEach((comb) => {
    const combWithFirst = [...comb, firstElement];
    combinationsWithFirst.push(combWithFirst);
  });

  return [...combinationsWithoutFirst, ...combinationsWithFirst];
};

//time complexity: O(2^n)
//space complexity: O(n*n) --n stack frames and then the additional arrays we create within the stack frames

console.log(combinations(['a', 'b', 'c']));
/*
[],
[a],
[b],
[c],
[a,b],
[a,c],
[b,c],
[a,b,c]

*/
