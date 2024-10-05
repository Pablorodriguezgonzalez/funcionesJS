// Variable global para almacenar el color del div inicial
let colorActual = "";

// Función que cambia el color del div "key" según la tecla presionada
function cambiarColor(event) {
  const divKey = document.getElementById("key");

  // Verificar la tecla presionada y asignar el color correspondiente para cambiar el fondo
  if (event.key === "a") {
    colorActual = "pink"; // Rosado
  } else if (event.key === "s") {
    colorActual = "orange"; // Naranjo
  } else if (event.key === "d") {
    colorActual = "lightblue"; // Celeste
  }

  // Cambiar el color de fondo del div "key"
  if (colorActual) {
    divKey.style.backgroundColor = colorActual;
  }

  // Verificar las teclas para crear nuevos divs de colores morado, gris o café
  if (event.key === "q") {
    crearNuevoDiv("purple", "divMorado"); // Morado
  } else if (event.key === "w") {
    crearNuevoDiv("gray", "divGris"); // Gris
  } else if (event.key === "e") {
    crearNuevoDiv("brown", "divCafe"); // Café
  }
}

// Función que crea un nuevo div solo si no existe ya un div con el id dado
function crearNuevoDiv(color, id) {
  // Verificar si el div con el id ya existe
  if (!document.getElementById(id)) {
    const nuevoDiv = document.createElement("div");
    nuevoDiv.id = id; // Asignar el id al nuevo div
    nuevoDiv.style.width = "200px";
    nuevoDiv.style.height = "200px";
    nuevoDiv.style.backgroundColor = color;
    nuevoDiv.style.border = "2px solid black";
    nuevoDiv.style.marginTop = "10px"; // Agregar espacio entre los divs
    document.body.appendChild(nuevoDiv); // Añadir el nuevo div al body
  }
}

// Añadir el evento keydown para detectar la tecla presionada
document.addEventListener("keydown", cambiarColor);
