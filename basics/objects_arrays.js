const arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr[1]);

const obj = {
  a: "this is a",
  b: "this is b",
  1: "this is 1",
};
console.log(obj[1]);

const arr = [1, "aa", "vvvb", 1.432];

function printer(arg) {
  const val = arg;
  console.log(val);
}
for (let i = 0; i < arr.length; i++) {
  printer(arr[i]);
}

console.log(arr.length);
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

for (const val of arr) {
  console.log(val);
}
