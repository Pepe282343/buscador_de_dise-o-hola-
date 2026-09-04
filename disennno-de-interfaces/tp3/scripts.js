function filtroBusqueda() {
  const input = document.getElementById("search-input");
  const filtro = input.value.toLowerCase();
  const botones = document.querySelectorAll(".botones-animales button");
  let hayResultados = false;

  botones.forEach((boton) => {
    const textoBoton = boton.dataset.animal.toLowerCase();
    if (textoBoton.includes(filtro)) {
      boton.classList.remove("oculto");
      hayResultados = true;
    } else {
      boton.classList.add("oculto");
    }
  });

  const mensaje = document.getElementById("mensaje-busqueda");
  mensaje.hidden = hayResultados;
}

document.getElementById("search-input").addEventListener("input", filtroBusqueda);
