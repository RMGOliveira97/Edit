document.querySelector(".my-title-js").textContent = "Hello";
document.querySelector(".my-paragraph-js").style.backgroundColor = "red";
document.querySelector(".my-button-js").style.color = "green";

// add Event listener
document.querySelector(".my-title-js").addEventListener("mouseover", onclick);
document
  .querySelector(".my-title-js")
  .addEventListener("mouseleave", resetColor);

function mouseEntering() {
  document.querySelector(".my-title-js").style.color = "red";
}

function resetColor() {
  document.querySelector(".my-title-js").style.color = "black";
}

//Create HTML Element
const newElement = document.createElement("p"); //Criar elemento
newElement.innerHTML = "My new paragraph"; //Adicionar texto ao elemento criado
document.querySelector("p").appendChild(newElement); //adicionar a um parágrafo o novo elemento criado
