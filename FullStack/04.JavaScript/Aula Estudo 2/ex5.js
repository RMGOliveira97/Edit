
function newParagraph(){
    const element = document.createElement("p");
    element.textContent = `New paragraph`;
    document.querySelector(".new-paragraph-js").appendChild(element);
}