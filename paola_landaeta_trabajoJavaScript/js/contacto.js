document.addEventListener('DOMContentLoaded', () => {
    const obtenerUbicacionButton = document.getElementById('obtener-ubicacion');
    const ubicacionDiv = document.getElementById('ubicacion');
    const rutaDiv = document.getElementById('ruta');
  
    obtenerUbicacionButton.addEventListener('click', () => {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitud = position.coords.latitude;
        const longitud = position.coords.longitude;
        const destino = 'Avenida de la Gavia, Madrid';
        const url = `https://www.google.com/maps/dir/?api=1&destination=${destino}&origin=${latitud},${longitud}`;
        ubicacionDiv.innerText = `Latitud: ${latitud}, Longitud: ${longitud}`;
        rutaDiv.innerHTML = `<a href="${url}" target="_blank">Ver ruta en Google Maps</a>`;
      }, (error) => {
        console.error('Error al obtener la ubicación:', error);
        ubicacionDiv.innerText = 'Error al obtener la ubicación';
      });
    });
  
    const formularioContacto = document.getElementById('contacto-form');
    formularioContacto.addEventListener('submit', (e) => {
      e.preventDefault();
      const nombre = document.getElementById('nombre').value.trim();
      const email = document.getElementById('email').value.trim();
      const mensaje = document.getElementById('mensaje').value.trim();
      if (nombre === '') {
        alert('Por favor, ingrese su nombre');
        document.getElementById('nombre').focus();
        return;
      }
      if (email === '') {
        alert('Por favor, ingrese su email');
        document.getElementById('email').focus();
        return;
      }
      if (!validarEmail(email)) {
        alert('Por favor, ingrese un email válido');
        document.getElementById('email').focus();
        return;
      }
      if (mensaje === '') {
        alert('Por favor, ingrese un mensaje');
        document.getElementById('mensaje').focus();
        return;
      }
    });
  });
  
  function validarEmail(email) {
    const expresionRegular = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return expresionRegular.test(email);
  }

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
