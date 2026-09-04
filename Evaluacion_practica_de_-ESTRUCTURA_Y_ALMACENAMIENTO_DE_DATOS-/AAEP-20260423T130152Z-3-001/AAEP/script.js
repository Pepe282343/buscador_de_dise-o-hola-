function filtroBusqueda() {

  let buscar = document.getElementById("search-input").value.toLowerCase();

  let animales = document.querySelectorAll(".animal");

  animales.forEach(function(animal) {

    let nombre = animal.querySelector("h3").textContent.toLowerCase();

    if (nombre.includes(buscar)) {
      animal.style.display = "block";
    } else {
      animal.style.display = "none";
    }

  });
}

document.getElementById("search-input").addEventListener("input", filtroBusqueda);