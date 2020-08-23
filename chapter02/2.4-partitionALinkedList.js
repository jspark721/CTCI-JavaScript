/**
 * write code to partition a linked list around a value x, such that all nodes less than x come before all nodes greater than or equal to x. If x is contained within the list, the values of x only need to be after the elements less than x (see below)The partition element x can appear anywhere in the "right partition", it does not need to appear between the left and right partitions
 *
 * input 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [x = 5]
 * ouput 3 -> 2 -> 1 -> 10 -> 5 -> 5 -> 8
 */

const partitionLinkedList = (head, x) => {
  if (head == null || head.next == null) {
    return head;
  }

  let leftList = new ListNode();
  let rightList = new ListNode();
  let leftTail = leftList;
  let rightTail = rightList;
  let current = head;

  while (current !== null) {
    if (current.val < x) {
      leftTail.next = current;
      leftTail = current;
    } else {
      rightTail.next = current;
      rightTail = current;
    }
    current = current.next;
  }
  leftList.next = rightList.next;
  rightTail.next = null;

  return leftList.next;
};

//time complexity: O(n) - iterating over the original list
//space complexity: O(1) - we are not using any extra space, we are just reforming the oringal list by moving the original nodes
