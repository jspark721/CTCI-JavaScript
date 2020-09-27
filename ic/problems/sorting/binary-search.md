# Binary Search Algorithm

a binary search algorithm finds an item in a sorted array in O(log n) time
a brute force search would walk through the whole array, taking O(n) time in the worst case

## How binary search works

It has to be a sorted array, it won't work if it's not sorted

1. **start with the middle number: is it bigger or smaller than our target number?** since the array is sorted, this tells us if the target would be in the left half or the right half of the array
2. **we've effectively divided the problem in half.** we can "rule out" the whole half of the array we know doesn't contain the target number
3. **repeat the same approach (of starting in the middle) on the new half-size problem.** then do it again and again, until we either find the number or "rule out" the whole set

this can be done iteratively or recursively
