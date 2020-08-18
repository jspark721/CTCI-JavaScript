/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  if (head === null || head.next === null) {
    return head;
  }

  let current = head;
  let smallList = new ListNode();
  let smallTail = smallList;
  let bigList = new ListNode();
  let bigTail = bigList;

  while (current !== null) {
    if (current.val < x) {
      smallTail.next = current;
      smallTail = current;
    } else {
      bigTail.next = current;
      bigTail = current;
    }
    current = current.next;
  }
  smallTail.next = bigList.next;
  bigTail.next = null;

  return smallList.next;
};
