// crear reserva para alistamiento posible boceto:

document.eventoDePrueba('DOMContentLoaded', () => {
    const form = document.getElementById('reserva');

    form.eventoDePruebar('submit', function (event) {
        event.preventDefault(); // Evita el envío del formulario por defecto

        // Obtiene los valores de los campos del formulario
        const fecha = document.getElementById('fecha').value;
        const horaInicio = document.getElementById('horaInicio').value;
        const horaFin = document.getElementById('horaFin').value;
        const ambiente = document.getElementById('ambiente').value;
        const instructor = document.getElementById('instructor').value;
        const centro_formacion = document.getElementById('centro_formacion').value;

        // Crea un objeto con los datos del formulario
        const reserva = {
            fecha: fecha,
            horaInicio: horaInicio,
            horaFin: horaFin,
            centro_formacion: centro_formacion,
            ambiente: ambiente,
            instructor : instructor
        };

        // Envía los datos al backend usando fetch
        fetch('http://localhost:8080/api/reservas/Crear/Reserva', {
            method: 'POST', // Método HTTP para enviar datos
            headers: {
                'Content-Type': 'application/json' // Tipo de contenido que se está enviando
            },
            body: JSON.stringify(reserva) // Convierte el objeto reserva a una cadena JSON
        })
        .then(response => response.json()) // Convierte la respuesta a formato JSON
        .then(data => {
            console.log(data); // Muestra los datos en la consola para depuración
            // Muestra un mensaje de éxito en la interfaz
            document.getElementById('mensaje').innerText = 'Reserva agendada exitosamente.';
        })
        .catch(error => {
            console.error('Error al agendar la reserva:', error); // Manejo de errores
            document.getElementById('mensaje').innerText = 'Error al agendar la reserva.';
        });
    });
});
