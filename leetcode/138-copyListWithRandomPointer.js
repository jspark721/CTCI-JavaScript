/**
 * A Linked List is given such that each node contains an additional random pointer which could point to any node in the list or null
 *
 * Return a copy of the list
 *
 */
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (head === null) {
    return null;
  }

  //create a hashmap to map the original nodes in a clone
  let clone = new Map();

  //1st pass -- give all nodes their clone in the mapping
  let current = head;
  while (current !== null) {
    clone.set(current, new Node(current.val));
    current = current.next;
  }

  //2nd pass == reset the current pointer to the head of the original list, give all the clones the next and random pointer assignments
  current = head;
  while (current !== null) {
    //set the next of current's clone to the clone of current's next
    clone.get(current).next = clone.get(current.next) || null;
    clone.get(current).random = clone.get(current.random) || null;
    current = current.next;
  }
  return clone.get(head);
};
