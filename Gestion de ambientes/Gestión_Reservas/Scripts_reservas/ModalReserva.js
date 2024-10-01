document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: ['dayGrid', 'timeGrid', 'interaction'],
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
      // Manejar el doble clic en una celda
      dateClick: function(info) {
          // Llenar los campos del modal con la fecha seleccionada
          document.getElementById('start-date').value = info.dateStr; // Fecha de inicio
          document.getElementById('end-date').value = info.dateStr; // Fecha de finalización (opcional)

          // Abrir el modal
          const modal = new bootstrap.Modal(document.getElementById('addReserva'));
          modal.show();
      },
      select: function(info) {
          // Llenar los campos del modal con las fechas seleccionadas
          document.getElementById('start-date').value = info.startStr.split('T')[0]; // Fecha de inicio
          document.getElementById('end-date').value = info.endStr.split('T')[0]; // Fecha de finalización (opcional)
          
          // Abrir el modal
          const modal = new bootstrap.Modal(document.getElementById('addReserva'));
          modal.show();
      },
      eventClick: function(info) {
          console.log('Event: ' + info.event.title);
      }
  });

  calendar.render();

  document.getElementById('submit-button').addEventListener('click', function() {
      // Obtener los valores de los inputs
      const startDate = document.getElementById('start-date').value;
      const endDate = document.getElementById('end-date').value || startDate; // Usar fecha de inicio si no hay fin
      const startTime = document.getElementById('start-time').value;
      const endTime = document.getElementById('end-time').value || startTime; // Usar hora de inicio si no hay fin
      const color = document.getElementById('event-color').value;
      const instructor = document.getElementById('instructor-select').value;
      
      // Crear el evento
      const event = {
          title: `Reserva: ${instructor}`,
          start: `${startDate}T${startTime}`,
          end: `${endDate}T${endTime}`,
          color: color
      };

      // Añadir el evento al calendario
      calendar.addEvent(event);

      // Cerrar el modal
      const modal = bootstrap.Modal.getInstance(document.getElementById('addReserva'));
      modal.hide();

      // Reiniciar el formulario
      document.getElementById('horarioForm').reset();
      document.getElementById('instructorForm').reset();
  });
});
