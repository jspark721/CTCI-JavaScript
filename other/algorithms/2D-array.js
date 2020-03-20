/*

Each of the 6 lines of inputs arr[i] contains 6 space-separated integers arr[i][j].

Constraints
- 9 <= arr[i][j] <= 9
0 <= i,j <= 5
has to be a 6 x 6 array where i= height of array, j = width of array

arr[i][j] = 36 total values

Output format:
Print the largest(maximum) hourglass sum found in arr 

sample input 
[1,1,1,0,0,0]
[0,1,0,0,0,0]
[1,1,1,0,0,0]
[0,0,2,4,4,0]
[0,0,0,2,0,0]
[0,0,1,2,4,0]

sample output
19

//first hourglass is 
arr[0][0]  -- 1 top left
arr[0][1] -- 1 top middle 
arr[0][2] -- 1 top right
arr[1][1] -- 1 middle midle 
arr[2][0] -- 1 bottom left 
arr[2][1] -- 1 bottom middle 
arr[2][2] -- 1 bottom right

// Second hourglass is
 
arr[0][1] // 1 - top left
arr[0][2] // 1 - top middle
arr[0][3] // 0 - top right
arr[1][2] // 0 - middle middle
arr[2][1] // 1 - bottom left
arr[2][2] // 1 - bottom middle
arr[2][3] // 0 - bottom right

if we replace the for index arr[i] with the row variable, 

arr[row][0]
arr[row][1]
arr[row][2]
arr[row + 1][1]
arr[row + 2][0]
arr[row + 2][1]
arr[row + 2][2]

do the same and replace for index of arr[i][j] with col variable
arr[row][col]
arr[row][col + 1]
arr[row][col + 2]
arr[row + 1][col + 1]
arr[row + 2][col]
arr[row + 2][col + 1]
arr[row + 2][col + 2]

so once you have this, get the sum of "each hourglass" and store it into a new array of hourglasses
*/

const hourglassSum = function(arr) {
    //default value returned 
    let hourglasses = [];
    
    //validate the arr, make sure the input is correct 
    if (typeof arr === "object" && arr.length === 6 && arr.map(i => i.length).reduce((p, n) => p + n) === 36) {
        //continue

        for(let row = 0; row <= 3; row++) {
            for(let col = 0; col <= 3; col++) {
                let sum = 0;
                sum += arr[row][col];
                sum += arr[row][col + 1];
                sum += arr[row][col + 2];
                sum += arr[row + 1][col + 1];
                sum += arr[row + 2][col];
                sum += arr[row + 2][col + 1];
                sum += arr[row + 2][col + 2];

                //example, first hour glass sum = 7
                //push the sum value into the hourglasses array
                hourglasses.push(sum);
            }
        }
    }

    //default returned value -- Math.max() used to find the highest value in the array 
    return (hourglasses.length > 0) ? Math.max(...hourglasses) : 0;
}

const sample2dArray = 
    [[1,1,1,0,0,0],
    [0,1,0,0,0,0],
    [1,1,1,0,0,0],
    [0,0,2,4,4,0],
    [0,0,0,2,0,0],
    [0,0,1,2,4,0]];

console.log(hourglassSum(sample2dArray));