// console.log("add: ", add(10, 20));
// console.log("sub: ", sub(10, 20));
// console.log("mul: ", multiply(10, 20));
// console.log("div: ", divide(10, 20));

const calc = require("./calc");
console.log(calc);
console.log(calc["add"](10, 20));
console.log(calc.add(10, 20));
console.log(calc["divide"](10, 20));

// const obj = {};
// obj.add = "aaa";
// obj.sub = "bbb";
// obj["mul"] = "ccc";

// console.log(obj);
