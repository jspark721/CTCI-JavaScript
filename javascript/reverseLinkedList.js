// reverse a singly linked list -- do it in place. the function should take one input (head of the list) and return the new head of the list

// single linked list class
function LinkedListNode(value) {
    this.value = value;
    this.next = null;
}

/* iterative solution
---------------------
we iterate through the list once, changing the next pointer of each node to the previous node. the order of operationns is important: we copy node.next into temp before setting node.next to previous -- otherwise when we "step forward" at the end of the list, we'd actually step back to the previous node.

time complexity: O(n)
space complexity: O(1)
*/

function reverseList(head) {
    let node = head, previous, temp;

    while(node) {
        //save next before we overwrite node.next
        temp = node.next;

        //reverse pointer
        node.next = previous;

        // step forward in the list
        pervious = node;
        node = temp;
    }
    return previous;
}