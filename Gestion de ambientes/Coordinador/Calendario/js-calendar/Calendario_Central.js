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
      maxTime: '23:00:00',  // Hora máxima en vista semanal
      views: {
        timeGridWeek: {
          slotMinTime: '06:00:00',
          slotMaxTime: '23:00:00'
        },
        timeGridDay: {
          slotMinTime: '06:00:00',
          slotMaxTime: '23:00:00'
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
  