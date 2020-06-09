/* given a linked list, remove the n-th node from the end of the list and return its head

given linked list: 1 -> 2 -> 3 -> 4 -> 5, n = 2;
after removing the second node from the end, the linked list becomes 1 -> 2 -> 3-> 5

given n will always be valid

can you do this in one pass?
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  if (head === null) return;

  const dummyHead = new ListNode(-1);
  dummyHead.next = head;

  let right = dummyHead.next;
  while (n > 0) {
    right = right.next;
    n--;
  }

  let left = dummyHead;
  while (right != null) {
    left = left.next;
    right = right.next;
  }

  left.next = left.next.next;
  return dummyHead.next;
};
