// // Blocking Code

// const myFunction = () => {
//   const startTime = Date.now();
//   while (Date.now() - startTime <= 5000) {
//     const a = 1 + 1;
//   }
//   console.log(Date.now() - startTime);
//   console.log("This is my Function execution");
// };

// console.log("This is start of my code");
// myFunction();
// console.log("This is end of my code");

// Non - Blocking Code

// const callbackFunction = ;

// const myFunction = () => {
//   setTimeout(callbackFunction, 5000);
// };
const myFunction = () => {
  setTimeout(() => {
    console.log("This is my Function execution");
  }, 5000);
};

console.log("This is start of my code");
myFunction();
console.log("This is end of my code");
