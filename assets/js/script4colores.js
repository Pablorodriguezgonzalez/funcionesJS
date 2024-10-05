// Función para cambiar el color a negro
function cambiarColorNegro(element) {
  element.style.backgroundColor = "black";
}

// Seleccionando cada div por su id
const divAzul = document.getElementById("divAzul");
const divRojo = document.getElementById("divRojo");
const divVerde = document.getElementById("divVerde");
const divAmarillo = document.getElementById("divAmarillo");

// Añadiendo evento click a cada div
divAzul.addEventListener("click", function () {
  cambiarColorNegro(this);
});

divRojo.addEventListener("click", function () {
  cambiarColorNegro(this);
});

divVerde.addEventListener("click", function () {
  cambiarColorNegro(this);
});

divAmarillo.addEventListener("click", function () {
  cambiarColorNegro(this);
});
