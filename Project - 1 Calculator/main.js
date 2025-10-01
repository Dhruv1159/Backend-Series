let bodyObject = {};

const display = (req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<h1>Welcome to Calculator</h1>
                <h2>Which operation do you want to perform ?</h2>
                <form action='calc-result' method="POST">
                <label>NUMBER 1</label>
                <input type="number" name="num1"><br>
                <label>NUMBER 2</label>
                <input type="number" name="num2"><br>

                <input type="radio" id="add" name="opr" value="add">
                <label for="add">ADD</label>

                <input type="radio" id="sub" name="opr" value="sub">
                <label for="add">SUB</label>

                <input type="radio" id="mul" name="opr" value="mul">
                <label for="add">MUL</label>

                <input type="radio" id="div" name="opr" value="div">
                <label for="add">DIV</label>
                <br><br>
                <button type="submit">Evaluate</button>
                </form>
    `);
    return res.end();
  } else if (
    req.url.toLowerCase() === "/calc-result" &&
    req.method === "POST"
  ) {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      const reqBody = Buffer.concat(body).toString();
      console.log(reqBody);
      const data = new URLSearchParams(reqBody);
      bodyObject = Object.fromEntries(data);

      const a = Number(bodyObject.num1);
      const b = Number(bodyObject.num2);
      let c;

      if (bodyObject.opr === "add") {
        c = a + b;
      } else if (bodyObject.opr === "sub") {
        c = a - b;
      } else if (bodyObject.opr === "mul") {
        c = a * b;
      } else if (bodyObject.opr === "div") {
        c = a / b;
      } else {
        c = "INVALID OPERATION";
      }

      res.setHeader("Content-Type", "text/html");
      res.write(`<h1>The result is ${c} </h1>`);
      res.write('<a href="/">back</a>');

      res.end(); // ✅ finish the response
    });
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>404 NOT FOUND</h1>");
  }
};

module.exports = display;
