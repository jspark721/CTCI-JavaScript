#Dynamic Array

## array list, growable array, resizable array, mutable array

a dynamic array is an array with automatic resizing. one limitation of arrays is that it's fixed in size, meaning we have to specify the number of elements your array will hold ahead of time

### strengths 
- fast lookups - O(1) access at a given index
- variable size - add as many items
- cache friendly

### weaknesses
- slow worst-case appends - Usually, adding a new element at the end of the dynamic array takes O(1)O(1) time. But if the dynamic array doesn't have any room for the new item, it'll need to expand, which takes O(n)O(n) time.
- costly inserts and deletes - same as arrays, elements are stored adjacent to eachother, adding or removing an item in the middle of the array requires "scooting" over other elements which takes O(n) time


## but in JavaScript, dynamic arrays are just called arrays