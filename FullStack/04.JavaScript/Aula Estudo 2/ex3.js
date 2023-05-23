function thanksMessage (event){
    event.preventDefault();
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;

    document.querySelector(".message-js").innerHTML = `${name} ${email}`;
}
