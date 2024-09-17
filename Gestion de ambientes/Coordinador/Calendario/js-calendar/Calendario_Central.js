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
    height: 'auto',
    aspectRatio: 2.5,
    views: {
      dayGridMonth: {
        titleFormat: { year: 'numeric', month: 'long' }
      },
      timeGridWeek: {
        slotDuration: '01:00:00',
        slotLabelInterval: '01:00',
        slotMinTime: '06:00:00',
        slotMaxTime: '22:00:00',
        slotLabelFormat: [{ hour: 'numeric', minute: '2-digit', hour12: true }]
      },
      timeGridDay: {
        slotDuration: '01:00:00',
        slotLabelInterval: '01:00',
        slotMinTime: '06:00:00',
        slotMaxTime: '22:00:00',
        slotLabelFormat: [{ hour: 'numeric', minute: '2-digit', hour12: true }]
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

  // Abre el modal para agregar una nueva reserva
  const openModalButton = document.querySelector('.btnadd_reserva');
  const addModalElement = document.getElementById('addReserva');
  const addModal = new bootstrap.Modal(addModalElement);

  openModalButton.addEventListener('click', () => {
    addModal.show();
  });

  // Cierra el modal para agregar una nueva reserva
  const closeAddButton = document.querySelector('#addReserva .btn-close');
  closeAddButton.addEventListener('click', () => {
    addModal.hide();
  });

  // Opcional: cerrar el modal al hacer clic fuera del contenido del modal
  window.addEventListener('click', (event) => {
    if (event.target === addModalElement) {
      addModal.hide();
    }
  });

  // Añadir una nueva reserva
  const submitAddButton = document.getElementById('submit-button');
  submitAddButton.addEventListener('click', () => {
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value || startDate;
    const startTime = document.getElementById('start-time').value;
    const endTime = document.getElementById('end-time').value || startTime;
    const color = document.getElementById('event-color').value;
    
    // Convertir fechas y horas en el formato requerido
    const start = `${startDate}T${startTime}`;
    const end = `${endDate}T${endTime}`;

    if (startDate && startTime) {
      calendar.addEvent({
        title: 'Nueva Reserva',
        start: start,
        end: end,
        backgroundColor: color || '#3788d8',
      });

      // Cierra el modal
      addModal.hide();

      // Opcional: guardar el evento en localStorage o enviar a un servidor aquí
      // ...
    }
  });
});
