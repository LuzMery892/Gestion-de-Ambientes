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
    select: function(info) {
      console.log('selected ' + info.startStr + ' to ' + info.endStr);
    },
    eventClick: function(info) {
      console.log('Event: ' + info.event.title);
    }
  });

  calendar.render();
});


