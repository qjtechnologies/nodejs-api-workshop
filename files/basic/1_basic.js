const fs = require("fs");

//Blocking Code
// console.log("Start: File Read");
// const fileData = fs.readFileSync("sample.txt", "utf-8");
// console.log(fileData);
// console.log("End: File Read");

// Non Blocking
const callbackFunction = (err, data) => {
  if (data) {
    console.log("Success");
    console.log(data);
  }
  if (err) {
    console.log("Error");
    console.log(data);
    console.log(err.message);
  }
};

console.log("Start: File Read");
const fileData = fs.readFile("sample.txtt", "utf-8", callbackFunction);
console.log("End: File Read");
