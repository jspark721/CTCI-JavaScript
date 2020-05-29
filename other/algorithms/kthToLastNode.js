class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const a = new LinkedListNode('Angel Food');
const b = new LinkedListNode('Bundt');
const c = new LinkedListNode('Cheese');
const d = new LinkedListNode('Dark Chocolate');
const e = new LinkedListNode('Eclair');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

const kthToLastNode = function (head, k) {
  if (!head) return;

  let currentNode = head;
  while (k > 0) {
    currentNode = currentNode.next;
    k--;
  }
  let secondNode = head;
  while (currentNode) {
    currentNode = currentNode.next;
    secondNode = secondNode.next;
  }

  return secondNode.value;
};
console.log(kthToLastNode(a, 2)); // should return 'Dark Chocolate'
