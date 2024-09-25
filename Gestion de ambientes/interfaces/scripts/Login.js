let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slide-card');
    slides.forEach(slide => slide.style.display = 'none');
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 10000);
}
showSlides();

// Función para manejar el inicio de sesión y redirección basada en roles
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const loginButton = document.getElementById('loginButton');

    loginButton.addEventListener('click', function (event) {
        event.preventDefault(); // Evita el envío automático del formulario

        const formData = new FormData(loginForm);
        const username = formData.get('username');
        const password = formData.get('password');

        fetch('http://127.0.0.1:8080/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            }),
            credentials: 'include' // Incluir cookies para enviar credenciales
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('La respuesta de la red no fue correcta');
            }
            return response.json();
        })
        .then(data => {
            if (data.bloqueado) {
                window.location.href = 'ActualizarCorreoAlternativoBloqueado.html';
            } else {
                // Almacenar el token en localStorage
                if (data.token) {
                    localStorage.setItem('token', data.token);
                }

                // Redirigir según el rol
                switch (data.rol) {
                    case 'ROL_COORDINADOR':
                        window.location.href = 'http://127.0.0.1:5500/Gestion-de-Ambientes/Gestion%20de%20ambientes/Coordinador/Layout/coordinadorDashboard.html';
                        break;
                    case 'ROL_ALISTAMIENTO':
                        window.location.href = 'http://127.0.0.1:5500/Gestion-de-Ambientes/Gestion%20de%20ambientes/Alistamiento/alistamientoDashboard.html';
                        break;
                    case 'ROL_INSTRUCTOR':
                        window.location.href = 'http://127.0.0.1:5500/Gestion-de-Ambientes/Gestion%20de%20ambientes/Instructor/instructorDashboard.html';
                        break;
                }
            }
        })
        .catch(error => console.error('Error:', error));
    });
});

function togglePassword() {
    const passwordField = document.getElementById('password');
    const toggleButton = document.querySelector('.toggle-password span');

    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        toggleButton.textContent = 'visibility_off';
    } else {
        passwordField.type = 'password';
        toggleButton.textContent = 'visibility';
    }
}

document.querySelector('.toggle-password').addEventListener('click', togglePassword);
