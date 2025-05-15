let indiceActual = 0;
let imagen = document.querySelector(".galeria-carrusel img");

// Cargar archivo JSON
fetch('./galeria.json')
  .then(response => response.json())
  .then(data => {
    let imagenes = data.imagenes.map(imagen => imagen.ruta);

    function mostrarImagen(indice) {
      imagen.src = imagenes[indice];
    }

    mostrarImagen(indiceActual);

    document.querySelector(".flecha-izquierda").addEventListener("click", () => {
      indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
      mostrarImagen(indiceActual);
    });

    document.querySelector(".flecha-derecha").addEventListener("click", () => {
      indiceActual = (indiceActual + 1) % imagenes.length;
      mostrarImagen(indiceActual);
    });
  })
  .catch(error => console.error('Error:', error));

// Agregar clase active al enlace de navegación
const currentPage = window.location.pathname;
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach((link) => {
  if (link.href.includes(currentPage)) {
    link.classList.add('active');
  }
});
