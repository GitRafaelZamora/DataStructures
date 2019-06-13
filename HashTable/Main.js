const { HashTable } = require('./HashTable');

function Main() {
  var ht = new HashTable();

  for (var i = 0; i < 10; i++) {
    ht.insert(i);
  }

  ht.insert(15)
  ht.insert(12312)

  ht.print();

  console.log();
  console.log(ht.search(15))
  console.log(ht.search(16))
}

Main();
