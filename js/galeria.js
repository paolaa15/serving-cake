let imagenes = Array.from({length: 7}, (_, i) => `../Imágenes/img${i + 1}.jpg`);
let indiceActual = 0;
let imagen = document.querySelector(".galeria-carrusel img");

function mostrarImagen(indice) {
    imagen.src = imagenes[indice];
}

document.addEventListener("DOMContentLoaded", function() {
    mostrarImagen(indiceActual);
});

document.querySelector(".flecha-izquierda").addEventListener("click", () => {
    indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
    mostrarImagen(indiceActual);
});

document.querySelector(".flecha-derecha").addEventListener("click", () => {
    indiceActual = (indiceActual + 1) % imagenes.length;
    mostrarImagen(indiceActual);
});

const currentPage = window.location.pathname;
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach((link) => {
  if (link.href.includes(currentPage)) {
    link.classList.add('active');
  }
});

document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll('nav ul li a');
  
    navLinks.forEach((link) => {
      if (link.href.includes(currentPage)) {
        link.classList.add('active');
      }
    });
  });