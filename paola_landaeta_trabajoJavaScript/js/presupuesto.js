// Cálculo de presupuesto
function calcularPresupuesto() {
    const producto = parseInt(document.getElementById('producto').value);
    const plazo = parseInt(document.getElementById('plazo').value);
    const extras = document.querySelectorAll('.extra:checked');
    let total = producto;
    extras.forEach((extra) => {
      total += parseInt(extra.value);
    });
  
    // Cálculo de descuento según el plazo de entrega
    let descuento = 0;
    if (plazo >= 7 && plazo < 14) {
      descuento = total * 0.05; // 5% de descuento para plazos de 7 a 13 días
    } else if (plazo >= 14 && plazo < 30) {
      descuento = total * 0.10; // 10% de descuento para plazos de 14 a 29 días
    } else if (plazo >= 30) {
      descuento = total * 0.15; // 15% de descuento para plazos de 30 días o más
    }
  
    total -= descuento;
  
    return { total, descuento };
  }
  
  // Actualizar presupuesto en tiempo real
  document.addEventListener('input', (e) => {
    if (e.target.matches('#producto, #plazo, .extra')) {
      const { total } = calcularPresupuesto();
      document.getElementById('total').textContent = `€${total.toFixed(2)}`;
    }
  });
  
  // Validación de formulario
  const formulario = document.getElementById('presupuesto-form');
  const resultado = document.getElementById('presupuesto-resultado');
  formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    // Validación de campos
    if (nombre && email && telefono) {
      const { total } = calcularPresupuesto();
      resultado.textContent = `Presupuesto estimado: €${total.toFixed(2)}`;
    } else {
      resultado.textContent = 'Por favor, complete todos los campos';
    }
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
