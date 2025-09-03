const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home Page");
  }
});

server.listen(3000, () => {
  console.log("server is listening on port 3000");
});
