/*

You are given two non-empty linked lists representing two non-negative integers. Te digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: ( 2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explaination: 342 + 465 = 807

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 // first, figure out how to loop/traverse through the linked list, and the best way to traverse a linked list is using the while loop. while l1 and l2 is not equal to null, keep looping

var addTwoNumbers = function(l1, l2) {
  let result = new ListNode(0); // create the beginning of the linked list
  let currentNode = result;
  let carryOver = 0;

  while (l1 != null || l2 != null) {
    let v1 = 0;
    let v2 = 0;

    if(l1 != null) {
      v1 = l1.val;
    }
    if(l2 != null) {
      v2 = l2.val;
    }

    let sum = v1 + v2 + carryOver;
    carryOver = Math.floor(sum / 10);
    sum = sum % 10;
    currentNode.next = new ListNode(sum);

    currentNode = currentNode.next;
    // l1 = l1.next, this will keep looping through the linkedlist until l1.next is null
    // if l1 or l2 is shorter than the other list, we have to make sure that we don't ever access the next element when tehre is no .next element
    if (l1 != null) {
      l1 = l1.next;
    }
    if (l2 != null) {
      l2 = l2.next
    }
  }
  if(carryOver > 0) {
    currentNode.next = new ListNode(carryOver);
  }
  return result.next;
};
