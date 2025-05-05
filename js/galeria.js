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