const fs = require("fs");

let textFile = fs.readFileSync("misc/movies.txt", "utf8").split("\n");

function createArr(file) {
  return file;
}

module.exports = { createArr, textFile };
