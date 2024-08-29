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
document.getElementById('loginForm').addEventListener('submit', function(event) {/**este recoge el submit de el formulario de login */
    event.preventDefault(); //si haces un configuracion diferente agregalo para que se comunique con el login

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la respuesta del servidor');
        }
        return response.json(); // Convierte la respuesta a JSON
    })
    .then(data => {
        // Redirige al dashboard basado en el rol del usuario
        if (data.role === 'ROL_COORDINADOR') {
            window.location.href = '/html/coordinador/dashboard.html';
        } else if (data.role === 'ROL_ALISTAMIENTO') {
            window.location.href = '/html/alistamiento/dashboard.html';
        } else if (data.role === 'ROL_INSTRUCTOR') {
            window.location.href = '/html/instructor/dashboard.html';
        } else {
            alert('Rol no reconocido');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error al iniciar sesión');
    });
});
