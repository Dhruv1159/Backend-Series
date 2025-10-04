const express = require("express");
const app = express();
const PORT = 3002;

// this is the complicsted way of doing routing using app.use() function

// app.use("/", (req, res, next) => {
//   console.log("you are on default page");
//   console.log(req.url, req.method);
//   next();
// });

// app.use("/submit-details", (req, res, next) => {
//   console.log("you are on submit deatail page");
//   console.log(req.url, req.method);
//   res.send(`<h1>You are on submit detail route </h1>`);
// });

// app.use("/home", (req, res, next) => {
//   console.log("you are on home page");
//   console.log(req.url, req.method);
//   res.send(`<h1>You are on home route </h1>`);
// });

// now we will do this in different way

app.get("/", (req, res) => {
  console.log(req.url, req.method);
  res.send("<h1>This is the default page</h1>");
});

app.get("/submit-details", (req, res) => {
  console.log(req.url, req.method);
  res.send("<h1>This is the submit details page</h1>");
});

app.get("/home", (req, res) => {
  console.log(req.url, req.method);
  res.send("<h1>This is the home page</h1>");
});

app.get(/.*/, (req, res) => {
  res.status(404).send("<h1>404 - Page Not Found</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
