//Ir buscar elemento através da sua tag
//Não está errado, mas é feio
document.getElementsByTagName("h1")[0].innerHTML =
  "<h1 onclick='changeColorToGreen()'></h1>";
document.getElementsByTagName("h1")[0].style.position = "relative";

//For mais que uma alteração:
const h1 = document.getElementsByTagName("h1")[0];
h1.innerHTML = "Hello";
h1.style.position = "relative";

//Ir buscar um elemento através de ID
const myTitle = document.getElementById("myTitle");
myTitle.innerHTML = "My Title";
myTitle.style.width = 100;

//Ir buscar um elemento por class
const myClasses = document.getElementsByClassName("my-paragraph-js");

for (let i = 0; i < myClasses.length; i++) {
  myClasses[i].style.color = "green";
}

// for (let i = myClasses.length - 1; i >= 0; i--) {
//   myClasses[i].style.color = "green";
// }

//Ir buscar um elemento em HTML com querySelector ou querySelectorAll
const myClass = document.querySelector(".my-paragraph-js"); //vai buscar o primeiro p

const myClassesQuery = document.querySelectorAll(".my-paragraph-js"); //vai buscar todas as classes my-paragraph-js

const myDivParagraph = document.querySelectorAll(
  ".my-div-js > .my-paragraph-js"
); //Vai buscar os descendentes diretos de my-div-js

//Eventos

function changeColorToGreen() {
  document.querySelector(".my-div-js div .my-paragraph-js").style.color =
    "green";
}

//EventListener

document
  .querySelector(".my-div-js div .my-paragraph-js")
  .addEventListener("click", changeColorToGreen);

h1.setAttribute("class", "my-title-js"); //    <h1 id="myTitle" class="my-title-js">Welcome to class 4</h1>


