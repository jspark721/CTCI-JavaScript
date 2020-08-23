/**
 * Implement an algorithm to delete a node in the middle (i.e. any node but the first and last node, not necessarily the exact middle) of a signly linked list, given only access to that node
 *
 * Input: linked list a -> b -> c -> d -> e -> f (given node c)
 * Ouput: nothing is returned, but the new linked list looks like a -> b -> d -> e-> f
 */

const deleteNode = (node) => {
  //copy the data from the next node over to the current node,
  node.val = node.next.val;
  //and then delete the next node
  node.next = node.next.next;
};
