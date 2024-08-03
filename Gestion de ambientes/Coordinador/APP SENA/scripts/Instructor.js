// Lógica específica para la interfaz del instructor
console.log("Panel de Instructor cargado");

// Función para obtener las reservas del instructor ejemplo:
function obtenerReservasInstructor() {
    fetch('http://localhost:8080/api/instructor/reservas', {
        method: 'GET', // Método HTTP para obtener datos
        headers: {
            'Content-Type': 'application/json', // Tipo de contenido que se espera
            'Authorization': 'Bearer ' + token // Autenticación si es necesario
        }
    })
    .then(response => response.json()) // Convertir la respuesta a formato JSON
    .then(data => {
        console.log(data); // Mostrar los datos en la consola
        // Aquí puedes actualizar la interfaz con los datos obtenidos
        // Ejemplo: document.getElementById('reservas-lista').innerHTML = data.map(reserva => `<li>${reserva.descripcion}</li>`).join('');
    })
    .catch(error => {
        console.error('Error al obtener reservas:', error); // Manejo de errores
    });
}

// Llamada a la función para obtener reservas cuando se carga el panel
document.addEventListener('DOMContentLoaded', obtenerReservasInstructor);
