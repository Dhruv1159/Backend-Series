const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<head><title>Taking User input</title></head>");
    res.write(
      '<h1>this is the user input form</h1><form action="/submit" method="POST">'
    );
    res.write('<label for="name">Name:</label>');
    res.write('<input type="text" id="name" name="name" required><br>');
    res.write('<label for="email">Email:</label>');
    res.write('<input type="email" id="email" name="email" required><br>');
    res.write('<label for="gender"></label>');
    res.write('<input type="radio" id="male" name="gender" value="male">');
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" id="female" name="gender" value="female">');
    res.write('<label for="female">Female</label><br>');
    res.write('<button type="submit">Submit</button>');
    res.write("</form>");
    return res.end();
  } else if (req.url.toLowerCase() === "/submit" && req.method === "POST") {
    // ✅ Use sync write for simplicity
    fs.writeFileSync("user.txt", "dhruv saini");

    res.statusCode = 302;
    res.setHeader("Location", "/"); // Redirect to home
    return res.end();
  } else {
    res.statusCode = 404;
    res.write("<h1>404 Not Found</h1>");
    return res.end();
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`server is running on port : ${PORT}`);
});
