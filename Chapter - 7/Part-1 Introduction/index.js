const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("the first middleware is executed", req.url, req.method);
  next();
});

app.use((req, res, next) => {
  console.log("the second middleware is executed", req.url, req.method);
  res.send(`<h1>This is the first response</h1>`);
});
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
