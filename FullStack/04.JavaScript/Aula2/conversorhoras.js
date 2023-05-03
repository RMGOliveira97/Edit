
function conversorHoras (even) {
    const minutos = +document.querySelector(".input-js").value;

    const horas = Math.floor(minutos / 60);
    const resto = minutos % 60;

    document.querySelector(".result-js").innerHTML = `<p>${horas} horas e ${resto} minutos.</p>`
}