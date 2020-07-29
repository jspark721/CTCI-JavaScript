/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  if (!l1 || !l2) {
    return l1 === null ? l2 : l1;
  }

  let node = null;
  if (l1.val < l2.val) {
    node = l1;
    node.next = mergeTwoLists(l1.next, l2);
  } else {
    node = l2;
    node.next = mergeTwoLists(l1, l2.next);
  }
  return node;
};

//time complexity: O(n*m) -- n is l1 and m is l2
//space complexity: O(n*m)
