function areaCalculator(event) {
  const squareSide = +document.querySelector(".squareSide-js").value;
  const rectangleHeight = +document.querySelector(".rectangleHeight-js").value;
  const rectangleLength = +document.querySelector(".rectangleLenght-js").value;
  const triangleHeight = +document.querySelector(".triangleHeight-js").value;
  const triangleBase = +document.querySelector(".triangleBase-js").value;

  const areaSquare = squareSide ** 2;
  const areaRectangle = rectangleHeight * rectangleLength;
  const areaTriangle = (triangleHeight * triangleBase) / 2;

  if (areaSquare > areaRectangle && areaSquare > areaTriangle) {
    document.querySelector(
      ".result-js"
    ).innerHTML = `<p>O maior é quadrado</p>`;
  } else if (areaRectangle > areaTriangle) {
    document.querySelector(
      ".result-js"
    ).innerHTML = `<p>O maior é retangulo</p>`;
  } else {
    document.querySelector(
      ".result-js"
    ).innerHTML = `<p>O maior é o triangulo</p>`;
  }
}

