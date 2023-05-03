
function conversorMph (even) {

    const kmhInput = +document.querySelector(".input-js").value;
    const conversionResult = kmhInput / 1.609;

    document.querySelector(".result-js").innerHTML = `<p>O valor em Milhas é ${conversionResult} mph. </p>`
}