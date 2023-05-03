//Variáveis

// let firstName = "Rodolfo";

// let age = 25;

// let country = "Portugal";

// console.log(country);

// country = "Espanha";

// console.log(country);

//Var

// var isFriday = true;

// {
//     var isFriday = false;
// }

// console.log(isFriday);

//Let

// let isFriday = true;

// {
//     let isFriday = false;
//     console.log(isFriday);
// }

// console.log(isFriday);

//Boas práticas para criar variáveis: camel case

// let displayMyFirstName = "Rodolfo";

// let displaymyfirstname = "Rodolfo"

//Person
const firstName = "Rodolfo";
const lastName = "Oliveira";
const age = 25;
const country = "Português";

//Concatenação

// let string1 = "Hello";
// let string2 = "World";
// let string3 = string1 + " " + string2;
// console.log(string3);

let myIntroduction =
  "Eu sou o " +
  firstName +
  " " +
  lastName +
  ", tenho " +
  age +
  " e sou " +
  country;

console.log(myIntroduction);

//Template literals

const myIntroductionLiteral = `Eu sou o ${firstName} ${lastName}, tenho ${age} e sou ${country}`;

console.log(myIntroductionLiteral);

//Exercício 1

let club = "Benfica";
let win = "ganhar";
let trophy = "campeonato";
let timeChampion = 38;
let Rival = null;

let myClub = `O ${club} é o melhor clube ${country} e vai ${win} o ${trophy}. ${club}, ${club}, ${club}, dá-me o ${timeChampion}! Este é o ${Rival}.`;

console.log(myClub);
