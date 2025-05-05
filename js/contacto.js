// Validación de formulario de contacto
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

    // Si todos los campos están rellenos correctamente, puedes enviar el formulario
    console.log('Formulario enviado');
    formularioContacto.reset();
});

function validarEmail(email) {
    const expresionRegular = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return expresionRegular.test(email);
}

