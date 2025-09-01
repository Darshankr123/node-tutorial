const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Welcome to home page");
});

server.listen(5000);
