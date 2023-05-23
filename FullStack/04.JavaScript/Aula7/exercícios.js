// Exercício 1

const numb = [1, 2, 3, 4, 5];

numb.reduce((acc, curr) => acc + curr, 0);

console.log(numb.reduce);

// Exercício 2
// primeira maneira
Object.keys({ name: "John", age: 25, city: "New York" });

console.log(Object.keys);

// segunda maneira
function objectKeys(object) {
  return Object.keys(object);
}

const keys = objectKeys({ name: "John", age: 25, city: "New York" });

console.log(keys);

function objectValues(object) {
  return Object.values(object);
}

const values = objectValues({ name: "John", age: 25, city: "New York" });

console.log(values);

// Exercício 3

const fruits = ["apple", "banana", "orange", "grape", "kiwi"];

const numbOfLetters = fruits.filter((fruit) => fruit.length >= 5);

function filterFruit() {
  return fruits.filter((fruit) => fruit.length >= 5);
}

console.log(filterFruit());

// Exercício 4

const people = [
  { name: "John", age: 25 },
  { name: "Jane", age: 17 },
  { name: "Bob", age: 20 },
];

function greaterThen18(people) {
  return people.filter((people) => people.age >= 18);
}

console.log(greaterThen18(people));

// Exercício 5

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function evenNumbers(numbers) {
  return numbers.filter((number) => number % 2 === 0);
}

console.log(evenNumbers(numbers));

// Exercício 6

const fruits2 = ["apple", "banana", "cherry"];

function firstElement(fruits2) {
  return fruits2[0];
}

console.log(firstElement(fruits2));

// Exercício 7

const average = [1, 2, 3, 4, 5];

function calculateAverage(average) {
  return average.reduce((sum, number) => sum + number, 0) / average.length;
}

console.log(calculateAverage(average));

// Exercício 8

const list = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Bob", age: 20 },
];

function highestValue(list) {
  return list.sort((a,b) => a.age - b.age);
}

console.log(highestValue(list)[list.length - 1]);

// Exercício 9

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function isPrime(num) {
  if (num < 2){
    return false
  }
  for(let i = 2; i <= Math.sqrt(num); i++){
    if (num % i === 0){
      return false
    }
  }
return true
  }
 
  const primes = numbers2.filter((num) => isPrime(num));

  console.log(primes);

// Exercício 10

const namesAge = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Bob", age: 20 },
];

const onlyNames = namesAge.map((element) => element.name);

console.log(onlyNames);


// Exercício 11

const numbers3 = [1, 4, 2, 9, 5];

const mapMaxNumber = Math.max(...numbers3);

const mapMinNumber = Math.min(...numbers3);

const highestDifference = mapMaxNumber - mapMinNumber;

console.log(highestDifference);


// Exercício 12

const fruits3 = ["banana", "apple", "cherry", "durian"];

function sortAlphabetical(){
  return fruits3.sort()
}

console.log(sortAlphabetical());


// Exercício 13

const numbers4 = [1, 4, 2, 9, 5];

function descending(){
  return numbers4.reverse();
}

console.log(descending());

// Exercíco 14

const people2 = [{name: "John", age: 25}, {city: "New York", age: 30}, {name: "Bob", hobby: "reading"}];

