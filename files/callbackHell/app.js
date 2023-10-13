const { error } = require("console");
const fs = require("fs");

console.log("START");
fs.readFile("file1.txt", "utf-8", (err, data) => {
  if (err) console.log("Error", err.message);
  if (data) {
    fs.readFile(data, "utf-8", (err2, data2) => {
      if (err2) console.log("Error", err.message);
      if (data2) console.log("Success", data2);
    });
  }
});
console.log("END");
