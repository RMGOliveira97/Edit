// Ex 1
function sum(x: number, y: number) {
  console.log(x + y);
}
sum(20, 15);

// Ex 2
let array: string[] = ["a", "b", "c"];

array.forEach((e) => console.log(e));

// Ex 3

const number: number[] = [2, 5, 6, 8, 4, 12, 3, 1];

function higherNumber() {
  return Math.max(...number);
}

console.log(higherNumber());

// Ex 4

const text: string = "Hello";

function invert() {
  let splitString = text.split("");
  let reverseString = splitString.reverse();
  let joinString = reverseString.join("");
  return joinString;
}

console.log(invert());

// Ex 5

function pairNumbers() {
  return [...number.filter((number) => number % 2 === 0)];
}

console.log(pairNumbers());

// Ex 6
const fruit: string[] = ["apple", "banana", "orange", "grape", "kiwi"];

function something() {
  return fruit.filter((fruit) => fruit.length > 5);
}
console.log(something());

// Ex 7

interface Person {
  name: string;
  age: number;
  gender: string;
}

const newPerson: Person = {
  name: "Inês",
  age: 27,
  gender: "female",
};

console.log(newPerson.name);
console.log(newPerson.age);
console.log(newPerson.gender);

// Ex 8

const array1: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const array2: number[] = [2, 4, 22, 56, 34, 78];

function newArray() {
  const intersection: number[] = array1.filter((e) => array2.includes(e));
  return intersection;
}

console.log(newArray());

// Ex 9

function generateNumber() {
  const x: number = Math.floor(Math.random() * 10) + 1;
  return x;
}
let x: number = generateNumber();

function guessTheNumber() {
  const guessInput = document.querySelector(".guess") as HTMLInputElement;
  const myNumber = Number(guessInput.value);

  if (myNumber === x) {
    x = generateNumber();
    alert("Correct");
  } else if (myNumber < x) {
    alert("The number is higher");
  } else if (myNumber > x) {
    alert("The number is lower");
  }
}
