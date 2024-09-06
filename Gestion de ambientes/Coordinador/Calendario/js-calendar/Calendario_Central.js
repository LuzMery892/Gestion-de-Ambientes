document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    plugins: [ 'dayGrid', 'timeGrid', 'interaction' ],
    locale: 'es',
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    initialView: 'dayGridMonth', 
    editable: true,
    selectable: true,
    height: 'auto', // Esto ajusta automáticamente la altura según el contenido
    aspectRatio: 2.4, // Reduce la relación de aspecto para hacer la vista mensual más compacta
    views: {
      dayGridMonth: {
        titleFormat: { year: 'numeric', month: 'long' },
        // Puedes agregar otros ajustes específicos para la vista mensual aquí si es necesario
      },
      timeGridWeek: {
        slotDuration: '01:00:00',
        slotLabelInterval: '01:00',
        slotMinTime: '06:00:00',
        slotMaxTime: '22:00:00'
      },
      timeGridDay: {
        slotDuration: '01:00:00',
        slotLabelInterval: '01:00',
        slotMinTime: '06:00:00',
        slotMaxTime: '22:00:00'
      }
    },
    select: function(info) {
      console.log('selected ' + info.startStr + ' to ' + info.endStr);
    },
    eventClick: function(info) {
      console.log('Event: ' + info.event.title);
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

