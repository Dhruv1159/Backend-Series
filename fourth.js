// in this file we have learned about the routing of the request on various routes

const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/home") {
    res.write("<h1>This is home page</h1>");
    res.write('<br><a href="/">Back</a>');
    return res.end();
  } else if (req.url === "/men") {
    res.write("<h1>This is men page</h1>");
    res.write('<br><a href="/">Back</a>');
    return res.end();
  } else if (req.url === "/women") {
    res.write("<h1>This is women page</h1>");
    res.write('<br><a href="/">Back</a>');
    return res.end();
  } else if (req.url === "/kids") {
    res.write("<h1>This is kids page</h1>");
    res.write('<br><a href="/">Back</a>');
    return res.end();
  } else if (req.url === "/cart") {
    res.write("<h1>This is cart page</h1>");
    res.write('<br><a href="/">Back</a>');
    return res.end();
  }

  if (req.url === "/") {
    res.write(`
        <html>
    <head>
        <title>E-Commerce</title>
    </head>
    <body>
        <ul>
            <li><a href='/home'>Home</a></li>
            <li><a href='/men'>Men</a></li>
            <li><a href='/women'>Women</a></li>
            <li><a href='/kids'>Kids</a></li>
            <li><a href='/cart'>Cart</a></li>
        </ul>
    </body>
</html>`);
    res.end();
  }
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`server is listening on PORT : ${PORT}`);
});
