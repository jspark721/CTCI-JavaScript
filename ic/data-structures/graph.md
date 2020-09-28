# Graph

a graph organizes items in an interconnected network
each item is a node (or vertex) - nodes are connected by edges

### Strengths

- representing links
- graphs are ideal for cases where you're working with things that connect to other things
- nodes and edges could, for example, respectively represent cities and highways, routers, and ethernet cables, or Facebook users and their friendships

### Weaknesses

- scaling challenges
- most graph algorithms are O(n \* lg(n)) or even slower
- depending on the size of your graph, running algorithms across your nodes may not be feasible

## Terminology

### Directed or Undirected

- in **directed** graphs, edges point from the node at one end to the node at the other end
- in **undirected** graphs, the edges simply connect the nodes at the each end

### Cyclic or Acyclic

- cyclic: if a graph ha a cycle -- an unbroken series of nodes with no repeating nodes or edges that connect to itself
- acyclic: graphs without cycles

### Weighted or Unweighted

- weighted means if each edge as a "weight" the weight could, for example, represent the distance between two locations, or the cost or time it takes to travel between the locations

### Legal Coloring

- a graph coloring is when you assign colors to each node in a graph
- legal coloring means no adjacent nodes have the same color

## Representations

### Edge List

1
/ / \
3-2 0

a list of all the edges in the graph:
`const grap [[0,1], [1,2], [1,3], 2,3]`
since node 3 has edges to nodes 1 amd 2, [1,3] and [2,3] are in the edge list

sometimes it's helpful to pair our edge list with a list of all the nodes, for example, what if a node doesn't have any edges connected to it? it wouldn't show up in the edge list at all

### Adjacency List

a list where the index represents the node and the value at the index is a list of the node's neighbors
`const graph =[ [1], [0,2,3], [1,3], [1,2] ]`

since node 3 has edges to nodes 1 and 2, graph [3] has the adjaceny list [1,2]

we could also use an object where the keys represent the node and the values are the list of neighbords

`const graph = [ 0: [1], 1: [0,2,3], 2: [1,3], 3: [1,2] ]`

**this would be useful if the nodes were represented by strings, objects or otherwise didn't map cleanly to array indices**

### Adjaceny Matrix

a matrix of 0s and 1s indicating whether node x connects to node y (0 means no, 1 means yes);

`const graph = [ [0,1,0,0], [1,0,1,1], [0,1,0,1], [0,1,1,0] ]`

since node 3 has edges to nodes 1 and 2, graph[3][1] and graph[3][2] have value 1

## Algorithms

### BFS and DFS

breadth-first search(BFS) and depth-first search (DFS) is important for graph problems, a lot of graph problems can be solved using just these traversals

**is there a path between two nodes in this undirected graph?** run DFS or BFS from one node and see if you reach the other one
**what's the shortest path between two nodes in this undirected, unweight graph?** run BFS from one node and backtrack once you reach the second

BFS always finds the shortest path, assuming the graph is undirected and unweighted. DFS does not always find the shortest path

**can this undirected graph be colored with two colors?** run BFS, assigning colors as nodes are visted. Abort if we ever try to assign a node a color different from the one it was assigned earlier

**does this undirected graph have a cycle** run BFS, keeping track of the number of times we're visiting each node. If we ever visit a node twice, then we have a cycle

### Advanced Graph Algorithms

- dijkstra's algorithm: find the shortest path from one node to all other nodes in a weight graph
- topological sort: aranges the nodes in a directed, acyclic graph in a special order based on incoming edges
- minimum spanning tree: finds the cheapest set of edges needed to reach all nodes in a weighted graph
