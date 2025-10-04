const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("First Middleware");
  console.log(req.url, req.method);
  next();
});

app.use((req, res, next) => {
  console.log("Second Middleware");
  console.log(req.url, req.method);
  next();
});

// app.use((req, res, next) => {
//   console.log("third Middleware");
//   console.log(req.url, req.method);
//   res.send("<h1>This is the response from the server</h1>");
// });

app.get("/", (req, res) => {
  res.send(`<h1>This is the home page</h1>
    <a href="/contact-us">Contact us</a><br/>`);
});

app.get("/contact-us", (req, res) => {
  res.send(`<h1>This is the contact us page</h1>
    <h2>Please give your details</h2>
    <form action="/contact-us" method="POST">
        <label>Your Name:</label>
        <input type="text" name="name" />
        <label>email:</label>
        <input type="email" name="email" />
        <button type="submit">Submit</button>
    </form>`);
});

app.post("/contact-us", (req, res, next) => {
  const body = [];
  req.on("data", (chunk) => {
    console.log(chunk);
    body.push(chunk);
  });

  req.on("end", () => {
    const parsedBody = Buffer.concat(body).toString();
    console.log(parsedBody);
    const finaldata = new URLSearchParams(parsedBody);
    bodyObject = Object.fromEntries(finaldata);
    res.send(`<h1>Name : ${bodyObject.name} </h1>
        <h1>Email : ${bodyObject.email} </h1>
        <a href="contact-us">Contact-us</a>`);
  });
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
