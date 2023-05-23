//Métodos e propriedades

const emptyArray = [];
const emptyArray2 = new Array();

const array = [
  { firstName: "John", lastName: "Doe" },
  { firstName: "Jane", lastName: "Doe" },
];

//PUSH - adiciona um novo elemento no fim do array
// array.push({ firstName: "Patricia", lastName: "Miller" });

//UNSHIFT
// array.unshift({ firstName: "John", lastName: "Miller" });

// console.log(array);

//SPREAD OPERATOR
const array2 = [
  { firstName: "Tom", lastName: "Cruise" }, //UNSHIFT
  ...array,
  { firstName: "Anna", lastName: "Pitt" }, //PUSH
];

// console.log(array2);

//MAP

const fullNameArray = array2.map((person) => {
  return { ...person, fullName: `${person.firstName} ${person.lastName}` };
});

// return { firstName: "Tom", lastName: "Cruise", fullName: "Tom Cruise"}

// console.log(array2);
// console.log(fullNameArray);

//FOREACH

// fullNameArray.forEach((person) => {
//   console.log(person.fullName);
// });

//REDUCE
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11];

const sum = numbers.reduce((acc, curr) => acc + curr, 0);

// console.log(sum);

let students = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 40 },
  { name: "David", age: 22 },
  { name: "Emily", age: 27 },
  { name: "Frank", age: 35 },
  { name: "Grace", age: 31 },
  { name: "Henry", age: 28 },
  { name: "Isabel", age: 26 },
  { name: "Jack", age: 33 },
];

const averageAge =
  students.reduce((acc, curr) => acc + curr.age, 0) / students.length;

// console.log(averageAge);

// 1 iteração
// acc = 0
// curr.age = 27
//2 iteração
//acc= 27
//curr.age = 25;
// 3 iteração
//acc= 52;
//curr.age = 40;

const students2 = students.reduce((acc, curr) => [...acc, curr.name], []);

// console.log(students2);

const students3 = students.map((person) => person.name);

const arrayInsideArray = [[1, 2, 4], [2], [3]];

arrayInsideArray.reduce((acc, curr) => acc + curr.length, 0); //Resultado seria 5