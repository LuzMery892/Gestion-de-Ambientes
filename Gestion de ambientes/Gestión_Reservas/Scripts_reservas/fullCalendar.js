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
      dateClick: function(info) {
          document.getElementById('start-date').value = info.dateStr; // Fecha de inicio
          document.getElementById('end-date').value = info.dateStr; // Fecha de finalización (opcional)

          const modal = new bootstrap.Modal(document.getElementById('addReserva'));
          modal.show();
      },
      select: function(info) {
          document.getElementById('start-date').value = info.startStr.split('T')[0]; // Fecha de inicio
          document.getElementById('end-date').value = info.endStr.split('T')[0]; // Fecha de finalización (opcional)

          const modal = new bootstrap.Modal(document.getElementById('addReserva'));
          modal.show();
      },
      eventClick: function(info) {
          console.log('Event: ' + info.event.title);
      }
  });

  calendar.render();

  document.getElementById('submit-button').addEventListener('click', function() {
      const startDate = document.getElementById('start-date').value;
      const endDate = document.getElementById('end-date').value || startDate;
      const startTime = document.getElementById('start-time').value;
      const endTime = document.getElementById('end-time').value || startTime;
      const color = document.getElementById('event-color').value;
      const instructor = document.getElementById('instructor-select').value;
      const instructorProfile = document.getElementById('instructor-profile').value;
      const instructorCompetence = document.getElementById('instructor-competence').value;

      // Obtener los días seleccionados
      const diasSemana = Array.from(document.querySelectorAll('input[name="diasSemana[]"]:checked')).map(checkbox => checkbox.value);

      // Validar campos
      if (!startDate || !startTime) {
          alert("Por favor, completa la fecha y la hora de inicio.");
          return;
      }

      // Crear el evento
      const event = {
          title: `Reserva: ${instructor}`,
          start: `${startDate}T${startTime}`,
          end: `${endDate}T${endTime}`,
          color: color,
          instructor: instructor,
          instructorProfile: instructorProfile,
          instructorCompetence: instructorCompetence
      };

      // Solo agregar días de la semana si se han seleccionado
      if (diasSemana.length > 0) {
          event.diasSemana = diasSemana;
      }

      // Añadir el evento al calendario
      calendar.addEvent(event);

      // Guardar en localStorage
      saveEventToLocalStorage(event);

      // Cerrar el modal
      const modal = bootstrap.Modal.getInstance(document.getElementById('addReserva'));
      modal.hide();

      // Reiniciar el formulario
      document.getElementById('horarioForm').reset();
      document.getElementById('instructorForm').reset();
  });

  // Función para guardar el evento en localStorage
  function saveEventToLocalStorage(event) {
      let events = JSON.parse(localStorage.getItem('events')) || [];
      events.push(event);
      localStorage.setItem('events', JSON.stringify(events));
  }

  // Función para cargar eventos desde localStorage
  function loadEventsFromLocalStorage() {
      const events = JSON.parse(localStorage.getItem('events')) || [];
      events.forEach(event => {
          calendar.addEvent(event);
      });
  }

  // Cargar eventos al inicializar el calendario
  loadEventsFromLocalStorage();
});
