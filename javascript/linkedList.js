// Linked List

function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function (element) {
    this.element = element;
    this.next = null;
  };

  this.size = function () {
    return length;
  };

  this.head = function () {
    return head.element;
  };

  this.add = function (element) {
    var node = new Node(element);
    if (head === null) {
      // if there are no nodes in the linked list yet
      head = node;
    } else {
      // more than one element in the node
      var currentNode = head; // start at the head node, start at the beginning

      while (currentNode.next) {
        //while there is a currentNode.next -- does not equal null
        currentNode = currentNode.next; // while there is a next node, current node is te next node
      }

      currentNode.next = node; // once we get to the last node of the link, then add that currentNode as the element
    }
    length++; //increment the length
  };

  this.remove = function (element) {
    var currentNode = head;
    var previousNode;
    if (currentNode.element === element) {
      // the head node is the element that we are trying to remove
      head = currentNode.next;
    } else {
      while (currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentode.next;
      }

      previousNode.next = currentNode.next;
    }
    length--;
  };

  this.isEmpty = function () {
    return length === 0;
  };

  this.indexOf = function (element) {
    var currentNode = head;
    var index = -1;

    while (currentNode) {
      index++; // start at the beginning, if there is a current node
      if (currentNode.element === element) {
        return index;
      }
      currentNode = currentNode.next;
    }

    return -1; //if we go through the whole while loop and don't find the node, the element does not exist in the linked list
  };

  this.elementAt = function (index) {
    var currentNode = head;
    var count = 0;
    while (count < index) {
      count++;
      currentNode = currentNode.next;
    }
    return currentNode.element;
  };

  this.addAt = function (index, element) {
    var node = new Node(element);

    var currentNode = head;
    var previousNode;
    var currentIndex = 0;

    if (index > length) {
      return false;
    }

    if (index === 0) {
      // add to the head node
      node.next = currentNode;
      head = node;
    } else {
      while (currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      node.next = currentNode;
      previousNode.next = node;
    }
    length++;
  };

  this.removeAt = function (index) {
    var currentNode = head;
    var previousNode;
    var currentIndex = 0;
    if (index < 0 || index >= length) {
      return null;
    }
    if (index === 0) {
      head = currentNode.next;
    } else {
      while (currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }
    length--;
    return currentNode.element;
  };
}

var myList = new LinkedList();
myList.add('puppy');
myList.add('harvey');
myList.add('shihtzu');
myList.add('good doggo');
console.log(myList.size());
console.log(myList.removeAt(0));
console.log(myList.size());
console.log(myList.elementAt(2));
