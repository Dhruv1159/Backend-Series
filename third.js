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
    res.write(JSON.stringify(jsonData));
    res.end(); // ✅ Properly formatted JSON
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>404 Not Found</h1>");
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
