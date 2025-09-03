const { readFile, writeFile } = require("fs");

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

// const data = await getText("a.txt");
// console.log(data);
// getText("a.txt")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

// async approach

const startReadingFile = async () => {
  try {
    const data = await getText("a.txt");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

startReadingFile();
