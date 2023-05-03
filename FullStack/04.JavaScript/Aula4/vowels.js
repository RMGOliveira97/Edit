function calculateNumberOfVowels() {
    //INPUTS
    const stringInput = document.querySelector("input").value;

    //LÓGICA
    let numberOfVowels = 0;

    for (let i = 0; i < stringInput.length; i++) {
      const char = stringInput.charAt(i).toLowerCase();

      if (
        char === "a" ||
        char === "e" ||
        char === "i" ||
        char === "o" ||
        char === "u"
      ) {
        numberOfVowels++; // numberOfVowels = numberOfVowels + 1;
      }
    }

    //OUTPUT
    document.querySelector(
      ".result-js"
    ).textContent = `O número de vogais é ${numberOfVowels}`;
  }