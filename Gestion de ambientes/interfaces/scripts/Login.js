function togglePassword() {
  const passwordInput = document.getElementById('password');
  const toggleButton = document.querySelector('.togglePassword');
  if (passwordInput.type === 'password') {
      passwordInput.type = 'text'; 
  } else {
      passwordInput.type = 'password';   
  }
}

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
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('http://localhost:8080/login', {//redirigi datos del formulario para ser auteticados por spring security y obtener por resuesta el rol para ser redirigido
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({ username, password }),
    })
    .then(response => {
        if (response.ok) {
            return fetch('http://localhost:8080/login/success');
        } else {
            throw new Error('Error en la respuesta del servidor');
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.role === 'ROL_COORDINADOR') {
            window.location.href = '/Gestion-de-Ambientes/Gestion%20de%20ambientes/Coordinador/coordinadorDashboard.html';
        } else if (data.role === 'ROL_ALISTAMIENTO') {
            window.location.href = '/Gestion-de-Ambientes/Gestion%20de%20ambientes/Alistamiento/alistamientoDashboard.html';
        } else if (data.role === 'ROL_INSTRUCTOR') {
            window.location.href = '/Gestion-de-Ambientes/Gestion%20de%20ambientes/Instructor/instructorDashboard.html';
        } else {
            alert('Rol no reconocido');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error al iniciar sesión');
    });
});