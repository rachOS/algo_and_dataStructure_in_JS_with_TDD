const { list } = require("./Lists/List");
list.append("el");
console.log(list.dataStore);
list.remove("el");
console.log(list.dataStore);
list.append("test");
console.log(list.dataStore);
list.remove("test");
console.log(list.dataStore);
