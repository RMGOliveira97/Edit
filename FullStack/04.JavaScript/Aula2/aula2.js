//const & let
​
let x = 10;
​
// {
//   let x = 20; //block-scoped
//   console.log(x); //20
// }
​
// console.log(x); //10
​
//Soma
let sum = 5 + 5;
​
//Sub
let sub = 5 - 3;
​
//Mult
let mult = 5 * 3;
​
//Div
let div = 5 / 2;
​
//Reminder
let reminder = 5 % 2; //1
​
//Incrementar
​
let i = 0;
​
i++; // 1, i = i + 1;
​
for (i = 0; i < 20; i++) {}
​
//Decrementar
let y = 20;
y = y - 1; // 19, y = y - 1;
​
for (y = 20; y >= 0; y--) {}
​
//Operadores lógico
​
let isLoggedIn = true;
​
// && - AND
// isLoggedIn && console.log("I'm logged in");
const validAge = 18;
​
// if (isLoggedIn && validAge >= 18) {
//   console.log("You can enter");
// } else {
//   console.log("You shall not pass!");
// }
​
// || - OR
​
// let input = "";
​
// if (isLoggedIn || validAge >= 18) {
//   console.log("You can enter");
// } else {
//   console.log("You shall not pass!");
// }
​
// input || console.log("Please enter your name"); //required
​
// ??
​
// input ?? console.log("Please enter your name"); //not required
​
//Igualdade
​
// console.log("2" == 2); //Valor
​
console.log("2" + 2); //CUIDADO
​
// console.log("2" === 2); //Valor e o tipo: string diferente number
​
// Não Igual - Not equal
​
// console.log(2 != "2"); //Valor
​
console.log(2 !== "2"); //Valor e tipo
​
let age = 0;
// let array = ["João","Francisco", "Maria"];
​
// for(i = 0; i < array.length; i++){
//     if(cardState !== "Caducado"){
​
//     }
// }
​
//Se validAge for 16
console.log(validAge < 18); //true
console.log(validAge > 18); //false
​
//Se validAge for 18
console.log(validAge <= 18); //true
console.log(validAge >= 18); //true
​
//Operador ternário
​
isLoggedIn && validAge >= 18
  ? console.log("You are logged in")
  : console.log("Please login");
​
if (isLoggedIn && validAge >= 18) {
  console.log("You are logged in");
} else {
  console.log("Please login");
}