//GetElementById
const myTitle = document.getElementById("myTitle");

console.log(myTitle);

myTitle.innerHTML = "<strong>My new title</strong>";

//getElementsByClassName (Nota: devolve sempre um array mesmo que seja um só elemento)
const myClasses = document.getElementsByClassName("more-text-js");
console.log(myClasses);

/*
Para aceder a um determinado elemento de uma lista fazemos
myClasses[indice], onde o índice é o elemento da lista que queremos aceder.
ex. myClasses[0] acede ao primeiro elemento da lista
 */

for (let i = 0; i < myClasses.length; i++) {
  myClasses[i].innerHTML = `My new text ${i}`;
}

//getElementsByTagName (semelhante ao getElementsByClassName)

const myElements = document.getElementsByTagName("div");
console.log(myElements);

//querySelector (devolve a primeira ocorrência de um determinado elemento, elemento que corresponde à query)

const myQueryElement = document.querySelector(".more-text-js");

console.log(myQueryElement);

//querySelectorAll

const myQueryElements = document.querySelectorAll(".more-text-js");
console.log(myQueryElements);
for (let i = 0; i < myQueryElements.length; i++) {
  myQueryElements[i].innerHTML = `My new text with querySelectorAll ${i}`;
}

//Styling with Javascript

const element = document.querySelector(".class");
element.style.backgroundColor = "red";
element.style.color = "green";
element.style.border = "3px solid yellow";
element.style.marginLeft = "10px";

element.setAttribute("class", "red");
