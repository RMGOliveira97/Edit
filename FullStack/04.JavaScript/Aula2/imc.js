//Exe imc
function imcCalculator(event) {
  event.preventDefault();
  //INPUTS
  const userName = document.querySelector(".name-js").value;
  const weight = document.querySelector(".weight-js").value;
  const height = document.querySelector(".height-js").value;

  const imc = weight / height ** 2;

  let classification = undefined;
  let textColor = undefined;
  //LÓGICA
  if (imc <= 20) {
    classification = "Baixo peso";
    textColor = "orange";
  } else if (imc <= 24) {
    classification = "Normal";
    textColor = "green";
  } else if (imc <= 29) {
    classification = "Excesso de peso";
    textColor = "yellow";
  } else if (imc <= 35) {
    classification = "Obesidade";
    textColor = "purple";
  } else {
    classification = "Obesidade Mórbida";
    textColor = "red";
  }
  //OUTPUTS
  document.querySelector(
    ".result-js"
  ).innerHTML = `<p>O(a) ${userName}, com os dados informados apresenta um IMC de ${imc}. Com este resultado está enquadrado em <span class="${textColor}"> ${classification}</span></p>`;
}
