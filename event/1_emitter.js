const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

eventEmitter.on("xyz", (name, type) => {
  console.log("This is Gaming Challenge", name, type);
});
eventEmitter.on("xyz", () => {
  console.log("This is Project Challenge");
});
eventEmitter.on("xyz", () => {
  console.log("This is Coding Challenge");
});

eventEmitter.emit("xyz", "Counter Strike", "shooting");
