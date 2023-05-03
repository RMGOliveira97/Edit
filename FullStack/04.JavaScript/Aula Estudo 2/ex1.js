function changeText(){
    const element = document.querySelector("p");
    if (element.innerHTML === "Olá, mundo!"){
        element.innerHTML = "Adeus, mundo!"
    }else {
        element.innerHTML = "Olá, mundo!"
    }
}