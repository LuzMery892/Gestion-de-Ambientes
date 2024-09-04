document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.querySelector('.calendar-container');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    plugins: [ 'dayGrid', 'timeGrid', 'interaction' ],
    locale: 'es', // Configura el idioma en español
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    defaultView: 'dayGridMonth', // Vista inicial por defecto
    editable: true,
    selectable: true,
    minTime: '06:00:00',  // Hora mínima en vista semanal
    maxTime: '22:00:00',  // Hora máxima en vista semanal
    views: {
      timeGridWeek: {
        slotMinTime: '06:00:00',
        slotMaxTime: '22:00:00'
      },
      timeGridDay: {
        slotMinTime: '06:00:00',
        slotMaxTime: '22:00:00'
      }
    },
    select: function(info) {
      console.log('selected ' + info.startStr + ' to ' + info.endStr);
      // Aquí puedes agregar la lógica para manejar la selección de fechas
    },
    eventClick: function(info) {
      console.log('Event: ' + info.event.title);
      // Aquí puedes agregar la lógica para manejar clic en eventos
    }
  });

  calendar.render();
});

/*--------------------------------------------------------------------------------------------------------------------------------*/ 
// Abre el modal
const openModalButton = document.querySelector('.btnadd_reserva');
const modalElement = document.getElementById('addReserva');
const modal = new bootstrap.Modal(modalElement);

openModalButton.addEventListener('click', () => {
    modal.show();
});

// Cierra el modal
const closeButton = document.querySelector('.btn-close');
closeButton.addEventListener('click', () => {
    modal.hide();
});

// Opcional: cerrar el modal al hacer clic fuera del contenido del modal
window.addEventListener('click', (event) => {
    if (event.target === modalElement) {
        modal.hide();
    }
});


/*--------------------------------------------------------------------------------------------------------------------------------*/ 
// Selecciona los elementos del DOM
const deleteButton = document.getElementById('delete-button');
const cancelButton = document.getElementById('cancel-button');

// Función para manejar el clic en el botón "Eliminar"
deleteButton.addEventListener('click', () => {
    // Aquí puedes agregar la lógica para eliminar el evento
    // Por ejemplo, realizar una solicitud al servidor para eliminar el evento
    console.log('Evento eliminado');
    
    // Cierra el modal después de realizar la acción
    const modal = new bootstrap.Modal(document.getElementById('delete-modal'));
    modal.hide();
});

// Función para manejar el clic en el botón "Cancelar"
cancelButton.addEventListener('click', () => {
    // Solo cierra el modal, no es necesario agregar lógica adicional
    const modal = new bootstrap.Modal(document.getElementById('delete-modal'));
    modal.hide();
});


/*--------------------------------------------------------------------------------------------------------------------------------*/ 

