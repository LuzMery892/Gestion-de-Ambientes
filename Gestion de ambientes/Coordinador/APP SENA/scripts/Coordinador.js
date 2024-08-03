// Función para gestionar tareas de coordinador ejemplo esta dice tareas pero es para que veas un boceto de como se hace su estructura
console.log("Panel de Coordinador cargado");

// Función para obtener las tareas del coordinador desde el backend
function obtenerTareasCoordinador() {
    fetch('http://localhost:8080/api/coordinador/tareas', {
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
        // Ejemplo: document.getElementById('tareas-lista').innerHTML = data.map(tarea => `<li>${tarea.descripcion}</li>`).join('');
    })
    .catch(error => {
        console.error('Error al obtener tareas:', error); // Manejo de errores
    });
}

// Llamada a la función para obtener tareas cuando se carga el panel
document.addEventListener('DOMContentLoaded', obtenerTareasCoordinador);
