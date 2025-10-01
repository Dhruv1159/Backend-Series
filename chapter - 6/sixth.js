const fs = require("fs");

let bodyObject = {};
const requestHandler = (req, res) => {
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
    fs.writeFileSync("user.txt", "dhruv saini");
    const body = [];
    req.on("data", (chunk) => {
      // collecting data chunk by chunk
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      // creating buffers
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const finaldata = new URLSearchParams(parsedBody);
      bodyObject = Object.fromEntries(finaldata);
      // this the shorter way of doing this
      // other wise we have the traditional way of doing this also
      // for (const [key, value] of finaldata.entries()) {
      //   bodyObject[key] = value;
      // }

      //new way of doing the same we have done earlier
      console.log(bodyObject);
    });

    res.statusCode = 302;
    res.setHeader("Location", "/response");
    return res.end();
  } else if (req.url === "/response") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<h1>Name : ${bodyObject.name} </h1>`);
    res.write(`<h1>Gmail : ${bodyObject.email} </h1>`);
    res.write(`<h1>Gender : ${bodyObject.gender} </h1>`);
    return res.end();
  } else {
    res.statusCode = 404;
    res.write("<h1>404 Not Found</h1>");
    return res.end();
  }
};

module.exports = requestHandler;
