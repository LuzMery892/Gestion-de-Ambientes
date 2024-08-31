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

    fetch('http://localhost:8080/login', {  // URL completa del backend
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la respuesta del servidor');
        }
        return response.json();
    })
    .then(data => {
        if (data.role === 'ROL_COORDINADOR') {
            window.location.href = '/Gestion-de-Ambientes/Gestion%20de%20ambientes/interfaces/coordinadorDashboard.html';
        } else if (data.role === 'ROL_ALISTAMIENTO') {
            window.location.href = '/Gestion-de-Ambientes/Gestion%20de%20ambientes/interfaces/alistamientoDashboard.html';
        } else if (data.role === 'ROL_INSTRUCTOR') {
            window.location.href = '/Gestion-de-Ambientes/Gestion%20de%20ambientes/interfaces/instructorDashboard.html';
        } else {
            alert('Rol no reconocido');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error al iniciar sesión');
    });
});

