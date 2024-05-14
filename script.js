// Sección CONTACTANOS
// Formulario de contacto

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        errorMessage.innerHTML = '';

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        if (!isValidName(name)) {
            errorMessage.innerHTML = 'Por favor ingresá un nombre válido (solo letras).';
            return;
        }

        if (email === '') {
            errorMessage.innerHTML = 'Por favor ingresá tu correo electrónico.';
            return;
        }

        if (!isValidEmail(email)) {
            errorMessage.innerHTML = 'Por favor ingresá un correo electrónico válido.';
            return;
        }

        if (message === '') {
            errorMessage.innerHTML = 'Por favor ingresá tu mensaje.';
            return;
        }

        alert('¡Formulario enviado correctamente! Te responderemos a la brevedad');
        form.reset();
    });

    // Agregar un evento para limpiar el mensaje de error cuando el usuario modifique el campo de nombre
    form.name.addEventListener('input', function() {
        errorMessage.innerHTML = '';
    });

    function isValidName(name) {
        const nameRegex = /^[A-Za-z]+$/;
        return nameRegex.test(name);
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
