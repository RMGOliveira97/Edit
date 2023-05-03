//Exe 2

function convertCelsiusToFahrenheit(event) {
  const celsiusInput = +document.querySelector(".input-js").value;
  const conversionResult = celsiusInput * 1.8 + 32;
  
  document.querySelector(".result-js").innerHTML = `<p class="${
    conversionResult < 50 ? "blue" : conversionResult < 70 ? "yellow" : "red"
  }">A converção de ${celsiusInput}ºC para Fahrenheit é ${conversionResult}</p>`;
}
