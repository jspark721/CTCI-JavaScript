/*

Fisher-Yates shuffle algorithm / Knuth shuffle
shuffle the elements in an array

- according to this algorithm, we should loop the array from back to front (example, we have an array consisting of 8 elements [A, B, C, D, E, F, G, H] from index 0 to index 7 so the first loop pass will affect the element at the last index 7 that is H)
- next step is to generate a random number (random index) between the selected index 7 and index 0 (example, let the random index be 3)
- after getting the random index, swap the elements that are in the selected index and at random index. (example, the random index in the provided array is D, so after swapping, the array will be changed to [A, B, C, H, E, F, D])
- in the second loop pass, just ignore the last index (since it already looped) and try to find the random index between index 0 and index 6 that is between the elements A and F (example, random index generated is 2)
- after getting the random index, swap the elements at indexes 6 and 2 [A, B, F, H, E, G, C, D]
- this algorithm follows the same pattern and ignores the index 6 and starts finding random index between index 0 and index 5 and so on until it reaches index 1 (it can't take index 0 to loop because there are no indexes less than 0 for swapping purposes)
- note that there is a possibility that generated random index be selected loop index -- (for instance, let the loop is running between selected index 4 and 0, and random index is 4, then the value at the index 4 will remain at the same position)

*/

const shuffleArray = function(arr) {
    let currentIndex = arr.length;
    let tempVal;
    let randomIndex;

    //while there are elements remaining to shuffle
    while(0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // and swap it with the current element;
        tempVal = arr[currentIndex];
        arr[currentIndex] = arr[randomIndex];
        arr[randomIndex] = tempVal;
    }
    return arr;
}

let array = ['A','B','C','D','E','F','G','H'];
shuffleArray(array);

// this will shuffle the original array -- it does not return a copy
// to keep the original array unshuffled, use Array.slice() method and pass in a copy

let food = ['sushi', 'pizza', 'salad', 'taco', 'steak'];
let shuffledFood = shuffleArray(food.slice());



/* 

write a function for doing an in-place shuffle of an array
the shuffle must be "uniform" meaning each item in the original array must have the same probabilty of ending up in each spot in the final array

We choose a random item to move to the first index, then we choose a random other item to move to the second index, etc. We "place" an item in an index by swapping it with the item currently at that index.

Crucially, once an item is placed at an index it can't be moved. So for the first index, we choose from nn items, for the second index we choose from n-1n−1 items, etc.


*/

function getRandom(floor, ceiling) {
    return Math.floor(Math.random() * (ceiling - floor +1)) + floor;
}

function shuffle(array) {
    //if it's 1 or 0 items, just return;
    if(array.length <= 1) {
        return array;
    }

    // walk through from beginning to end
    for (let i = 0; i < array.length - 1; i++) {
        // choose a random not yet placed item to place there -- could also be the item currently in that spot
        // must be an item AFTER the current item, because the items before has all already been placed

        const randomIndex = getRandom(i, array.length - 1);

        // place our random choice in a spot by swapping
        if(randomIndex !== i) {
            const currentIndex = array[i];
            array[i] = array[randomIndex];
            array[randomIndex] = currentIndex;
        }
    }
    return array;
}

// complexity O(n) time and O(1) space