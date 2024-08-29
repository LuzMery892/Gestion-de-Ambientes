// Escuchar el evento submit del formulario de login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto

    // Obtiene los valores de email y contraseña del formulario
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Envía una solicitud POST al backend para autenticar al usuario
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }), // Envía las credenciales en el cuerpo de la solicitud
    })
    .then(response => {
        // Verifica si la respuesta es exitosa
        if (!response.ok) {
            throw new Error('Error en la respuesta del servidor');
        }
        return response.json(); // Convierte la respuesta a JSON
    })
    .then(data => {
        // Redirige al usuario según su rol
        if (data.role === 'ROL_COORDINADOR') {
            window.location.href = '/Principal.html'; //redirigir a la carpeta que quede como dashboard o interfaz inicial de cada rol
        } else if (data.role === 'ROL_ALISTAMIENTO') {
            window.location.href = '/html/alistamiento/dashboard.html';
        } else if (data.role === 'ROL_INSTRUCTOR') {
            window.location.href = '/html/instructor/dashboard.html';
        } else {
            alert('Rol no reconocido');
        }
    })
    .catch(error => {
        console.error('Error:', error); // Muestra el error en la consola
        alert('Error al iniciar sesión'); // Muestra un mensaje de error al usuario
    });
});
