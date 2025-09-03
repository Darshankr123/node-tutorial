const { readFile } = require("fs");

const getText = async (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const data = await getText("a.txt");
console.log(data);
