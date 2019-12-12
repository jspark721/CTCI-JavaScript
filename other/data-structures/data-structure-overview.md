## common operations performed on the data structures

### stack/queue
- reversing | linear
- sorting | tower of hanoi
- searching | linear
- searching, sorted | log(n)
- min/max | stack, O(1)
- min/max, sorted | in-place, O(1)
- unique | HT, O(n)
- unique, sorted | in-place, O(n)

### linked list
- reversing | linear
- traversing | linear
- merging, sorted | linear
- interleaving | linear
- partitioning | linear
- rotating | linear
- shuffling | varies
- searching | linear
- searching, sorted | log(n)
- min/max | stack, O(1)
- min/max, sorted | in-place, O(1)
- unique | HT, O(n)
- unique, sorted | in-place, O(n)


### array/string
- reversing | linear
- sorting | merge, quick
- traversing | linear
- merging, sorted | linear
- merging, range | if sorted, O(n) linear
- interleaving | linear
- partitioning | linear
- rotating | linear
- edit distance | varies
- shuffling | varies
- searching | linear
- searching, sorted | log(n)
- min/max | stack, O(1)
- min/max, sorted | in-place, O(1)
- unique | HT, O(n)
- unique, sorted | in-place, O(n)


### hash table
- searching | linear
- min/max | stack, O(1)
- unique | default

permutations

### things to consider
- if you are doing something in-place, discuss the side-effects. side-effects can be bad because if you are mutating the data structure, you can have unintended consequences. you are saving space but there is a trade-off for side effects
- preserving original order
- set vs map vs object
- off-by-ones (errors)
- lengths of 0 and 1
- optimization vs readability // what's better?
- ask your interviewers questions, what more or other information can you ask for?

### further resources
- https://github.com/jwasham/coding-interview-university
- https://www.geeksforgeeks.org/
- HackerRank / LeetCode
- interviewing.io & pramp
