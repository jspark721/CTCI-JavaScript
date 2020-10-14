/*
Given information about active users on the network, find the shortest route for a message from one user (the sender) to another (the recipient). Return an array of users that make up this route.

graph problem

return any shortest route

Your network information takes the form of an object where keys are usernames and values are arrays of other users nearby:
*/

const network = {
  Min: ["William", "Jayden", "Omar"],
  William: ["Min", "Noam"],
  Jayden: ["Min", "Amelia", "Ren", "Noam"],
  Ren: ["Jayden", "Omar"],
  Amelia: ["Jayden", "Adam", "Miguel"],
  Adam: ["Amelia", "Miguel", "Sofia", "Lucas"],
  Miguel: ["Amelia", "Adam", "Liam", "Nathan"],
  Noam: ["Nathan", "Jayden", "William"],
  Omar: ["Ren", "Min", "Scott"],
};

//for the network above, a message from jayden to adam should have this route = ['Jayden', 'Amelia', 'Adam']

//what data structures can have connections?

//arrays? no, those are too simple to express our network of users
//objects? maybeee
//graphs? yes that seems like it could work

//users will be nodes in our graph and we'll draw edges between users who are close enough to message eachother

//we can make the assumption that the graph is undirected, as Min can transmit a message to Jayden, then Jayden can also transmit a message to Min
//we don't have any information that some transmissions are more expensive than others, so the graph is unweighted

//two common ways to explore undirected graphs: depth-first search (DFS) and breadth-first search (BFS)

//since we want to find the shortest path, BFS is the way to go

// standard implementation of BFS
//assume we have an efficient queue implementation, Queue() with enqueue and dequeue methods and a size property

function bfs(graph, startNode, endNode) {
  const nodesToVisit = new Queue();
  nodesToVisit.enqueue(startNode);

  //keep track of what nodes we've already seen so we don't process twice
  const nodesSeen = new Set([startNode]);

  //keep track of how we got to each node
  //we'll use this to reconstruct the shortest path at the end
  const howWeReachedNodes = {};
  howWeReachedNodes[startNode] = null;

  while (nodesToVisit.size > 0) {
    const currentNode = nodesToVisit.dequeue();

    //stop when we reach the end node
    if (currentNode === endNode) {
      //found it!
      break;
    }

    graph[currentNode].forEach((neighbor) => {
      if (!nodesSeen.has(neighbor)) {
        nodesSeen.add(neighbor);
        nodesToVisit.enqueue(neighbor);

        //keep track of how we got to this node
        howWeReachedNodes[neighbor] = currentNode;
      }
    });
  }
}
//if we didn't have nodesSeen set, the algorithm would be slower
//we are using a queue instead of an array because we want an efficient FIFO structure with O(1) inserts and removes
//for an array, appending would be O(1) but removing would be O(n)

//we're actually building our path backward from endNode to startNode
//since Min is startNode and it is initialized to null

const path = {
  Min: null,
  Jayden: "Min",
  Ren: "Jayden",
  Amelia: "Jayden",
  Adam: "Amelia",
  Miguel: "Amelia",
  William: "Min",
};

//we can backtrack from the end node to start node, recovering our path
/*
to get to Adam, we went through Amelia
to get to Amelia, we went through Jayden
to get to Jayden, we went through Min
Min is the start node

chaining this together, the shortest path from Min to Adam is Min -> Jayden -> Amelia -> Adam
*/

function reconstructPath(howWeReachedNodes, startNode, endNode) {
  const shortestPath = [];
  //start from end of the path and work backwards
  let currentNode = endNode;

  while (currentNode !== null) {
    shortestPath.push(currentNode);
    currentNode = howWeReachedNodes[currentNode];
  }
  //since we started backtracking at the recipient's node, our path is going to come out backward so we need to reverse it
  return shortestPath.reverse();
}

//we need to think about the edge cases, what happens if there isn't a route from the sender to the recipient?

//if that happens, then we'll finish searching the graph without ever reconstructing and returning the path and that's a valid outcome -- it just means we can't deliver the message right now

//we treat the input user network as a graph in adjacency list format -- then we do a BFS from the sender, stopping once we reach the recipient

//in order to recocver the actual shortest path from the sender to the recipient, we do two things:
// 1. during our BFS, we keep track of how we reached each node
// 2. after our BFS reaches the end node, we use our object to backtrack from the recipient to the sender

//to make sure our BFS terminates, we're careful to avoid visiting any node twice

/* THE SOLUTION */
function reconstructThePath(howWeReachedNodes, startNode, endNode) {
  const reversedShortestPath = [];

  //start from the end of the path and work backwards
  let currentNode = endNode;

  while (currentNode !== null) {
    reversedShortestPath.push(currentNode);
    currentNode = howWeReachedNodes[currentNode];
  }

  return reversedShortestPath.reverse(); //no longer reversed
}

function bfsGetPath(graph, startNode, endNode) {
  //edge cases
  if (!graph.hasOwnProperty(startNode)) {
    throw new Error("start node not in graph!");
  }
  if (!graph.hasOwnProperty(endNode)) {
    throw new Error("end node not in graph!");
  }

  const nodesToVisit = new Queue();
  nodesToVisit.enqueue(startNode);

  //keep track of how we got to each node
  //use this to reconstruct the shortest path at the end
  //we'll also use this to keep track of which nodes we've already visited
  const howWeReachedNodes = {};
  howWeReachedNodes[startNode] = null;

  while (nodesToVisit.size > 0) {
    const currentNode = nodesToVisit.dequeue();

    //stop when we reach the end node
    if (currentNode === endNode) {
      return reconstructPath(howWeReachedNodes, startNode, endNode);
    }

    graph[currentNode].forEach((neighbor) => {
      if (!howWeReachedNodes.hasOwnProperty(neighbor)) {
        nodesToVisit.enqueue(neighbor);
        howWeReachedNodes[neighbor] = currentNode;
      }
    });
  }

  //if we get here, then we never found the end node
  //so there's NO path from startNode to endNode
  return null;
}

//time complexity O(N + M)
//in the worst case, we'll go through the BFS loop once for every node in the graph, since we only ever add each node to nodesToVisit once -- so we have O(N)
//but we have to loop at the current node's neighbors -- over all of the nodes in the graph, checking the neighbors is O(M) since it involves crossing each edge twice
