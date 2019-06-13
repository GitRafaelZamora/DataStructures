const { Node } = require('./Node.js');

function LinkedList(value) {
  this.head = new Node(value);
}

LinkedList.prototype.add_node = function(value) {
  var tail = this.head;

  while (tail.next != null) {
    tail = tail.next;
  }

  var node = new Node(value);
  node.prev = tail;
  tail.next = node;
}

LinkedList.prototype.print = function() {
  var tail = this.head;

  while (tail.next != null) {
    console.log(tail.value + " ");
    tail = tail.next;
  }

  console.log(tail.value);
}

module.exports.LinkedList = LinkedList;
