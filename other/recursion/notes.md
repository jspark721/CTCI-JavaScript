# Recursion

#### Why use recursion?

- it breaks down large problems into small chunks
- it's a fundamental used in more advanced algorithms

#### When to use recursion?

- problems that contain smaller instances of the same problem

#### Anatomy of Recursion

- base case: the "smallest" instance of a problem that is solved trivially -- we can figure this base case out in constant time O(n)
- recursive case: an instance of a problem that "shrinks" the size of the input toward the base case

## Complex Recursion

### explore an recursive array algorithm

write a function `sum` that takes an array of numbers as an input. the function should return the total sum of all elements. the function must be recursive

- first way to think about it, create some test cases and examples with varying sizes and see what the answer would be

`sum([]) = 0`
`sum([1]) = 1`
`sum([5,7]) = 12`
`sum([1,5,7]) = 1 + 12`
`sum([a,b,c,d,...]) = a + sum([b,c,d,...])`

## Recursion Combinations

Common questions that are asked to use recursion combinations

- given N things, in how many ways can we arrange them?
- in how many ways can we do X?
- what is the shortest way to do Y?

**Combination is a collection of of things where the _order does not matter_**

Given a set of n things, there are 2^n combinations -- it's **binary**, so that's why it's 2^n possible combinations, either include the current element or exclude the current element

what are the combinations of the below array?
`[a,b,c]`
[]
[a]
[b]
[c]
[a,b] [b,a] is the same
[b,c]
[a,c]
[a,b,c]

**given a set of n things, there are 2^n possible combinations**

## Recursion Permutations

**Permutation is a collection of things where the _order does matter_**

Given a set of n things, there are n! permutations
