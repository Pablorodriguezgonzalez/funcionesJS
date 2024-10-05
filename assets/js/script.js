function pintar(element) {
  element.style.backgroundColor = "yellow";
}

const ele = document.getElementById("ele1");

// Pasar el elemento clickeado como argumento a la función
ele.addEventListener("click", function () {
  pintar(this);
});
