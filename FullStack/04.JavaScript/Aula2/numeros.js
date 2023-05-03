function numero(even) {
  const n = document.querySelector(".numero-js").value;

  const total = n % 2;

  if (total == 0) {
    console.log("par");
  } else {
    console.log("inpar");
  }

  document.querySelector(".result-js").innerHTML = `<p>O número é ${total}</p>`;
}
