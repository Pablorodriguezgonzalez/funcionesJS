// Función que cambia el color de fondo del elemento, con verde como color por defecto
function pintar(color = "green") {
  ele.style.backgroundColor = color;
}

// Seleccionamos el elemento del DOM
const ele = document.getElementById("ele1");

// Al cargar la pagina, aplicamos el color verde por defecto
pintar(); // Color inicial

// Añadimos el evento click para llamar a la funcion pintar con el color amarillo
ele.addEventListener("click", function () {
  pintar("yellow"); // Al hacer clic, cambiamos el color a amarillo
});
