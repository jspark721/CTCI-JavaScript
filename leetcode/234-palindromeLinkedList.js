/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

var isPalindrome = function (head) {
  //if list has zero or 1 value, it's a palindrome
  if (head == null || head.next == null) {
    return true;
  }

  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  fast = head;
  slow = reverseList(slow);

  while (slow !== null) {
    if (slow.val !== fast.val) {
      return false;
    }
    slow = slow.next;
    fast = fast.next;
  }
  return true;
};

const reverseList = (head) => {
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
