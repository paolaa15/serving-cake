// Cálculo de presupuesto
function calcularPresupuesto() {
    const producto = parseInt(document.getElementById('producto').value);
    const plazo = parseInt(document.getElementById('plazo').value);
    const extras = document.querySelectorAll('.extra:checked');
    let total = producto;

    extras.forEach((extra) => {
        total += parseInt(extra.value);
    });

    // Puedes agregar más lógica de cálculo aquí si lo necesitas
    return total;
}

// Actualizar presupuesto en tiempo real
document.addEventListener('input', (e) => {
    if (e.target.matches('#producto, #plazo, .extra')) {
        const presupuesto = calcularPresupuesto();
        document.getElementById('total').textContent = `€${presupuesto}`;
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
        const presupuesto = calcularPresupuesto();
        resultado.textContent = `Presupuesto estimado: €${presupuesto}`;
    } else {
        resultado.textContent = 'Por favor, complete todos los campos';
    }
});
