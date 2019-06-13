function HashTable() {
  this.table = [];
}

HashTable.prototype.insert = function (value) {
  var index = hash(value);
  this.table[index] = value;
};

HashTable.prototype.search = function(value) {
  var index = hash(value);
  if (this.table[index] != null && this.table[index] === value) {
    return this.table[index];
  } else {
    return null;
  }
}

HashTable.prototype.print = function () {
  for (var i = 0; i < this.table.length; i++) {
    console.log("[" + i + "] : " + this.table[i]);
  }
};

function hash(value) {
  return value % 10;
}

module.exports.HashTable = HashTable;
