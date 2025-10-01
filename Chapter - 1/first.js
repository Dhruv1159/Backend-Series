const fs = require("fs");

const a = 10;
const b = 10;

fs.writeFile("output.txt", "writing file " + eval(a + b), (err) => {
  if (err) {
    console.log("error in writing file");
  } else {
    console.log("file written successfully");
  }
});
