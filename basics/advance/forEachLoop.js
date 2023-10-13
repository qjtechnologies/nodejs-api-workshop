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

//console.log(myList[0])
//console.log(myList[0]["title"])
//console.log(myList[0].completed)

//for(const val of myList)
myList.forEach((val) => {
  //console.log(val.id, val.title);
  console.log(`For id ${val.id} the title is ${val.title}`);
});

