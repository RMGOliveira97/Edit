//If/else statements

const age = 15;

//condição cujo resultado é true ou false
if (age > 18) {
  //code
} else if (age > 12) {
  console.log("You are under 18");
}

//Operador ternário

age > 18 ? console.log("You are over 18") : console.log("You under 18");

//Loops

const numbers = [5, 4, 6, 2, 9];

//FOR - arrays
for (let i = 0; i < numbers.length; i++) {
  console.log(i); //0,1,2,3,4; 5 < 5
  console.log(numbers[i]);
}

//FOR OF - arrays
for (let number of numbers) {
  console.log(number);
}

//FOR IN - itera as propriedades de um objecto

const user = { name: "John", age: 18 };

for (let key in user) {
  console.log(key);
}

//WHILE

let i = 0;
while (i < 18) {
  console.log(i);
  i++;
}

//Break
console.log("Break");
// const numbers = [5, 4, 6, 2, 9];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 6) {
    break;
  }
  console.log(numbers[i]);
}

//Continue
console.log("Continue");
// const numbers = [5, 4, 6, 2, 9];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    continue;
  }
  console.log(numbers[i]);
}

//SWITCH

switch (new Date().getDay()) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  default:
    console.log("Another day");
    break;
}