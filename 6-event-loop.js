const fs = require("fs");

console.log("start of file");

fs.readFile("./content/subfolder/first.txt", "utf-8", (err, data) => {
  console.log(data);
});

console.log("after reading");
