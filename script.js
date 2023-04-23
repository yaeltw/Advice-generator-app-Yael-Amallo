let idQuoteDOM = document.querySelector(".id");
let quoteDOM = document.querySelector(".quote");
let button = document.querySelector(".redondo-verde");

let idQuote = null;
let quote = null;

function fetchTotal() {
  fetch("https://api.adviceslip.com/advice")
    .then((promesa) => promesa.json())
    .then((datos) => {
      quote = datos.slip.advice;
      idQuote = datos.slip.id;
      idQuoteDOM.innerHTML = idQuote;
      quoteDOM.innerHTML = `"${quote}"`;
    });
}

button.addEventListener("click", fetchTotal);
