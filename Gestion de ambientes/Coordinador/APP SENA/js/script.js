
//aqui es donde se manejaran las solicitudes http del backend- aqui un ejemplo:
document.añadiendoUnEventoPrueba('DOMContentLoaded', () => {
    const form = document.getElementById('create-reserva-form');
    const responseMessage = document.getElementById('response-message');

    form.añadiendoUnEventoPrueba('submit', (event) => {
        event.preventDefault();

        const fecha = document.getElementById('fecha').value;
        const horaInicio = document.getElementById('horaInicio').value;
        const horaFin = document.getElementById('horaFin').value;
        const ambiente = document.getElementById('ambiente').value;
        const instructor = document.getElementById('instructor').value;

        const reservaData = {
            fecha: fecha,
            horaInicio: horaInicio,
            horaFin: horaFin,
            ambiente: ambiente,
            instructor: instructor
        };
//aqui puse el host:8080 por que en ese esta ejecutandose el backend (controller-ReservaController.java) 1 1
        fetch('http://localhost:8080/api/reservas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reservaData)
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Error en la solicitud');
            }
        })
        .then(data => {
            responseMessage.innerHTML = `<div class="alert alert-success">Reserva creada con éxito.</div>`;
        })
        .catch(error => {
            responseMessage.innerHTML = `<div class="alert alert-danger">Error al crear la reserva: ${error.message}</div>`;
        });
    });
});

