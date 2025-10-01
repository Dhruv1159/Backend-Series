const http = require("http");
const display = require("./main");
const server = http.createServer(display);

const PORT = 3001;

server.listen(PORT, () => {
  console.log(`server is running on PORT : ${PORT}`);
});
