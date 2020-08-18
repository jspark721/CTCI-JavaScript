/*
Implement an algorithm to find the kth to last element of a singly linked list

input: linked list, k (number)
output: node value
edge cases: empty list
constraints: optimize

1. we can use two pointers, first and second pointer, first is at head and second pointer is at kth value from the start
when second pointer reaches the end (null), we can return the first pointer as it will be at the kth to the last element

2. we can count how many nodes are in the list by traversing the list once and getting a counter value
then, we subract counter - k, and then traverse the list until we reach the (counter - k)th value 
and return that node
*/

function ListNode(value, next) {
  this.value = value;
  this.next = next;
}

const returnKthToLast = (head, k) => {
  if (head == null) {
    return -1;
  }

  let first = head;
  let second = head;
  while (k > 0) {
    second = second.next;
    k--;
  }

  while (second !== null) {
    first = first.next;
    second = second.next;
  }

  return first.value;
};

//time complexity: O(n + k) where n is the length of the nodes in the list and k is the k value
//space complexity: O(1) not using any extra space

const returnKthToLast2 = (head, k) => {
  if (head == null) return 0;

  let counter = 0;
  let current = head;
  while (current !== null) {
    current = current.next;
    counter++;
  }

  let kthNode = counter - k;
  let result = head;
  for (let i = 0; i < kthNode; i++) {
    result = result.next;
  }

  return result.value;
};

let mylist = new ListNode(
  1,
  new ListNode(2, new ListNode(21, new ListNode(3, new ListNode(7, null))))
);

console.log(returnKthToLast2(mylist, 2)); // 3
console.log(returnKthToLast(mylist, 3)); // 21
