//replace all spaces in a string with '%20'

//input "Mr John Smith", 13
//output Mr%20John%20Smith

function replaceSpace(str, length) {
  //trim spaces at the end
  let trimSpaces = str.substring(0, length);

  //split the string into an array so we can loop over each character
  let arr = trimSpaces.split('');

  // loop and find the spaces in the array and replace the space with '%20'
  for(let i = 0; i < arr.length; i++) {
    //find the space characters then replace it
    if(arr[i] === ' ') {
      arr[i] = '%20';
    }
  }
  //turn the array back into a string
  let finalOutput = arr.join('');

  //output
  console.log(finalOutput);
  return finalOutput;

}

replaceSpace('Mr John Smith    ', 13);// return 'Mr%20John%20Smith'
