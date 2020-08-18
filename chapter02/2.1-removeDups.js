/**
 * write code to remove duplicates from an unsorted linked list
 *
 * follow up: how would you solve this problem if a temporary buffer is not allowed?
 *
 * input: linked list
 * output: linked list w/ out the duplicate
 * edge cases: empty list, or list with one node
 * constraints: optimize
 *
 * can there be multiple duplicates?
 *
 */

function ListNode(value, next) {
  this.value = value;
  this.next = next;
}

const removeDups = (head) => {
  if (head == null || head.next == null) {
    return head;
  }

  let current = head;
  while (current !== null) {
    let temp = current;
    while (temp.next !== null) {
      if (temp.next.value == current.value) {
        temp.next = temp.next.next;
      } else {
        temp = temp.next;
      }
    }
    current = current.next; //traverse to the next node in the list
  }
  return head;
};

//time complexity: O(n^2) -- nested while loop
//space complexity: O(1) -- no extra space was used
