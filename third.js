const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>This is the title</title></head>");
    res.write("<body><h1>This is the first response of the server</h1></body>");
    res.write("</html>");
    res.end(); // ✅ End the response
  } else if (req.url === "/json") {
    res.setHeader("Content-Type", "application/json"); // ✅ Correct MIME type
    const jsonData = {
      name: "dhruv",
      age: 21,
      occupation: "student",
    };
    res.end(JSON.stringify(jsonData)); // ✅ Properly formatted JSON
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("404 Not Found");
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
