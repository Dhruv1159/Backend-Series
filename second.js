const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  process.exit(); // as we have logged the req the server will gets automatically closed
});
const PORT = 5000;
server.listen(PORT, () => {
  console.log(`server is listning on ${PORT} port`);
});

// in this we have builded the node js server using http core module
