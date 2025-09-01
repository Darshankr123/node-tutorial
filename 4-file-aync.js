const { readFile, writeFile } = require("fs");

const data = readFile("./content/first.txt", "utf-8");
console.log(data);
