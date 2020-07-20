/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (head === null) {
    return head;
  }

  let prev = null;
  let current;

  while (head !== null) {
    current = head;
    head = current.next;
    current.next = prev;
    prev = current;
  }
  return prev;
};
