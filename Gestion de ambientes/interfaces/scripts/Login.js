
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
/*--------------------------------------------------------------------------------------------------------------------------------*/
// Función para manejar el inicio de sesión y redirección basada en roles
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const loginButton = document.getElementById('loginButton');

    loginButton.addEventListener('click', function (event) {
        event.preventDefault(); // Evita el envío automático del formulario

        const formData = new FormData(loginForm);
        const username = formData.get('username');
        const password = formData.get('password');

        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                'username': username,
                'password': password
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.bloqueado) {
                window.location.href = 'ActualizarCorreoAlternativoBloqueado.html';
            } else {
                switch (data.role) {
                    case 'ROL_COORDINADOR':
                        window.location.href = '/Gestion-de-Ambientes/Gestion de ambientes/Coordinador/coordinadorDashboard.html';
                        break;
                    case 'ROL_ALISTAMIENTO':
                        window.location.href = '/Gestion-de-Ambientes/Gestion de ambientes/Alistamiento/alistamientoDashboard.html';
                        break;
                    case 'ROL_INSTRUCTOR':
                        window.location.href = '/Gestion-de-Ambientes/Gestion de ambientes/Instructor/instructorDashboard.html';
                        break;
                }
            }
        })
        .catch(error => console.error('Error:', error));
    });
});

function togglePassword() {
    const passwordField = document.getElementById('password');
    const toggleButton = document.querySelector('.toggle-password');
    
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        toggleButton.textContent = '🔒';
    } else {
        passwordField.type = 'password';
        toggleButton.textContent = '👁️';
    }
}


