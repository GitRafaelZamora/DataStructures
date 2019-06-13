const { LinkedList } = require('./LinkedList');

function Main() {
  var ll = new LinkedList(1);

  ll.add_node(2);
  ll.add_node(3);
  ll.add_node(2);

  ll.print();
}

Main();
