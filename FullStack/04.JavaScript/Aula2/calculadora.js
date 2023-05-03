let x = +prompt("Introduza um número");
let y = +prompt("Introduza outro núemro");

let sum = x + y;
console.log(`A soma de ${x} mais ${y} é igual a ${sum}`);

let sub = x - y;
console.log(`A subtração de ${x} menos ${y} é igual a ${sub}`);

let mult = x * y;
console.log(`A multiplicação de ${x} por ${y} é igual a ${mult}`);

let div = x / y;
console.log(`A divisão de ${x} por ${y} é igual a ${div}`);

let divInt = x % y;
console.log(`A divisão interia de ${x} por ${y} é igual a ${divInt}`);

document.querySelector(
  ".sum-js"
).innerHTML = `A soma de ${x} mais ${y} é igual a ${sum}`;

document.querySelector(
  ".mul-js"
).innerHTML = `A multiplicação de ${x} por ${y} é igual a ${mult}`;

document.querySelector(
  ".sub-js"
).innerHTML = `A subtração de ${x} menos ${y} é igual a ${sub}`;

document.querySelector(
  ".div-js"
).innerHTML = `A divisão de ${x} por ${y} é igual a ${div}`;

document.querySelector(
  ".divInt-js"
).innerHTML = `A divisão interia de ${x} por ${y} é igual a ${divInt}`;

