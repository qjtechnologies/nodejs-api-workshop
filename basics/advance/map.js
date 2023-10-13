const arr = [1,2,3,4,5,6,7,8,9,10];
//const sqArr = [];
//arr.forEach((val)=>{
//    sqArr.push(val*val)
//    //console.log(val*val)
//})
//console.log(sqArr);

const sqArr = arr.map((val) => {
    return val;
})

console.log(sqArr);


//Example 2
const myList = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: "et porro tempora",
    completed: true,
  },
  {
    userId: 1,
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false,
  },
];

const myOutput = myList.map((val)=> val)
console.log(myOutput);



