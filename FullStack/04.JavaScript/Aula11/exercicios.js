// Exercício 1

function plus(x, y) {
  return x + y;
}
console.log(plus(5, 5));

// Exercicio 2
const names = ["João", "Maria", "Pedro", "Miguel", "Inês"];

names.forEach((e) => {
  console.log(e);
});

// Exercicio 3
const numbers = [2, 5, 6, 8, 4, 12, 3, 1];

const higher = Math.max(...numbers);

console.log(higher);

// Exercicio 4

const string = "Hello";

const splitString = string.split("");
const reverseString = splitString.reverse();
const joinString = reverseString.join("");

console.log(joinString);

// Exercicio 5

const pair = [...numbers.filter((number) => number % 2 === 0)];
console.log(pair);

// Exercicio 6

const fruits = ["apple", "banana", "orange", "grape", "kiwi"];

function filterFruits() {
  return fruits.filter((fruit) => fruit.length > 5);
}
console.log(filterFruits());

// Exercicio 7

const profile = [{ name: "Inês", age: 27, gender: "female" }];

console.log(profile.name);
console.log(profile.age);
console.log(profile.gender);
