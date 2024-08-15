document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simula una solicitud de inicio de sesión al backend
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.role === 'COORDINADOR') {
            window.location.href = '/html/coordinador';
        } else if (data.role === 'ALISTAMIENTO') {
            window.location.href = '/html/alistamiento';
        } else if (data.role === 'INSTRUCTOR') {
            window.location.href = '/html/instructor';
        } else {
            alert('Rol no reconocido');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error al iniciar sesión');
    });
});
