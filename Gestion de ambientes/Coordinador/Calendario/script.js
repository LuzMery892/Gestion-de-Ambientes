
document.addEventListener('DOMContentLoaded', function () {
    // Obtiene la referencia al elemento del DOM donde se renderizará el calendario.
    const calendarEl = document.getElementById('calendar');
    // Inicializa un modal de Bootstrap para el formulario.
    const myModal = new bootstrap.Modal(document.getElementById('form'));
    // Obtiene la referencia al elemento de alerta de error.
    const dangerAlert = document.getElementById('danger-alert');
    // Obtiene la referencia al botón de cerrar el modal.
    const close = document.querySelector('.btn-close');
    
    // Obtiene los eventos almacenados en localStorage o usa eventos predeterminados si no hay ninguno.
    const myEvents = JSON.parse(localStorage.getItem('events')) || [
        {
            id: uuidv4(),
            title: 'Edit Me',
            start: '2023-04-11',
            backgroundColor: 'red',
            allDay: false,
            editable: false,
        },
        {
            id: uuidv4(),
            title: 'Delete me',
            start: '2023-04-17',
            end: '2023-04-21',
            allDay: false,
            editable: false,
        },
    ];

    // Inicializa el calendario con las configuraciones y eventos.
    const calendar = new FullCalendar.Calendar(calendarEl, {
        locale: 'es', // Configura el idioma del calendario a español.
        customButtons: {
            customButton: {
                text: 'añadir reserva',
                click: function () {
                    // Muestra el modal al hacer clic en el botón personalizado.
                    myModal.show();
                    const modalTitle = document.getElementById('modal-title');
                    const submitButton = document.getElementById('submit-button');
                    modalTitle.innerHTML = 'añadir reserva';
                    submitButton.innerHTML = 'añadir reserva';
                    submitButton.classList.remove('btn-primary');
                    submitButton.classList.add('btn-success');

                    // Oculta el modal cuando se hace clic en el botón de cerrar.
                    close.addEventListener('click', () => {
                        myModal.hide();
                    });
                }
            }
        },
        // Configuración de la cabecera del calendario.
        header: {
            center: 'customButton', // Añade el botón personalizado en el centro de la cabecera.
            right: 'today, prev,next' // Añade los botones de hoy, anterior y siguiente.
        },
        plugins: ['dayGrid', 'interaction'], // Plugins usados para el calendario.
        allDay: false,
        editable: true, // Permite la edición de eventos.
        selectable: true, // Permite la selección de fechas.
        unselectAuto: false,
        displayEventTime: false, // Oculta la hora del evento.
        events: myEvents, // Eventos a mostrar en el calendario.
        eventRender: function(info) {
            // Añade un menú contextual al hacer clic derecho sobre un evento.(elimina o edita reservas)
            info.el.addEventListener('contextmenu', function(e) {
                e.preventDefault();
                let existingMenu = document.querySelector('.context-menu');
                existingMenu && existingMenu.remove();
                let menu = document.createElement('div');
                menu.className = 'context-menu';
                menu.innerHTML = `<ul>
                <li><i class="fas fa-edit"></i>Edit</li>
                <li><i class="fas fa-trash-alt"></i>Delete</li>
                </ul>`;

                const eventIndex = myEvents.findIndex(event => event.id === info.event.id);

                document.body.appendChild(menu);
                menu.style.top = e.pageY + 'px';
                menu.style.left = e.pageX + 'px';

                // Opción de editar evento.
                menu.querySelector('li:first-child').addEventListener('click', function() {
                    menu.remove();

                    const editModal = new bootstrap.Modal(document.getElementById('form'));
                    const modalTitle = document.getElementById('modal-title');
                    const titleInput = document.getElementById('event-title');
                    const startDateInput = document.getElementById('start-date');
                    const endDateInput = document.getElementById('end-date');
                    const colorInput = document.getElementById('event-color');
                    const submitButton = document.getElementById('submit-button');
                    const cancelButton = document.getElementById('cancel-button');
                    modalTitle.innerHTML = 'Edit Event';
                    titleInput.value = info.event.title;
                    startDateInput.value = moment(info.event.start).format('YYYY-MM-DD');
                    endDateInput.value = moment(info.event.end, 'YYYY-MM-DD').subtract(1, 'day').format('YYYY-MM-DD');
                    colorInput.value = info.event.backgroundColor;
                    submitButton.innerHTML = 'guardar cambios';

                    editModal.show();

                    submitButton.classList.remove('btn-success');
                    submitButton.classList.add('btn-primary');

                    // Guardar cambios del evento editado.
                    submitButton.addEventListener('click', function() {
                        const updatedEvents = {
                            id: info.event.id,
                            title: titleInput.value,
                            start: startDateInput.value,
                            end: moment(endDateInput.value, 'YYYY-MM-DD').add(1, 'day').format('YYYY-MM-DD'),
                            backgroundColor: colorInput.value
                        };

                        if (updatedEvents.end <= updatedEvents.start) { // Validación de la fecha de finalización.
                            dangerAlert.style.display = 'block';
                            return;
                        }

                        const eventIndex = myEvents.findIndex(event => event.id === updatedEvents.id);
                        myEvents.splice(eventIndex, 1, updatedEvents);
                        localStorage.setItem('events', JSON.stringify(myEvents));

                        // Actualiza el evento en el calendario.
                        const calendarEvent = calendar.getEventById(info.event.id);
                        calendarEvent.setProp('title', updatedEvents.title);
                        calendarEvent.setStart(updatedEvents.start);
                        calendarEvent.setEnd(updatedEvents.end);
                        calendarEvent.setProp('backgroundColor', updatedEvents.backgroundColor);

                        editModal.hide();
                    });
                });

                // Opción de eliminar evento.
                menu.querySelector('li:last-child').addEventListener('click', function() {
                    const deleteModal = new bootstrap.Modal(document.getElementById('delete-modal'));
                    const modalBody = document.getElementById('delete-modal-body');
                    const cancelModal = document.getElementById('cancel-button');
                    modalBody.innerHTML = `Are you sure you want to delete <b>"${info.event.title}"</b>`;
                    deleteModal.show();

                    const deleteButton = document.getElementById('delete-button');
                    deleteButton.addEventListener('click', function () {
                        myEvents.splice(eventIndex, 1);
                        localStorage.setItem('events', JSON.stringify(myEvents));
                        calendar.getEventById(info.event.id).remove();
                        deleteModal.hide();
                        menu.remove();
                    });

                    cancelModal.addEventListener('click', function () { 
                        deleteModal.hide();
                    });
                });

                document.addEventListener('click', function() {
                    menu.remove();
                });
            });
        },

        // Función que se activa al mover un evento en el calendario.
        eventDrop: function(info) {
            let myEvents = JSON.parse(localStorage.getItem('events')) || [];
            const eventIndex = myEvents.findIndex(event => event.id === info.event.id);
            const updatedEvent = {
                ...myEvents[eventIndex],
                id: info.event.id,
                title: info.event.title,
                start: moment(info.event.start).format('YYYY-MM-DD'),
                end: moment(info.event.end).format('YYYY-MM-DD'),
                backgroundColor: info.event.backgroundColor
            };
            myEvents.splice(eventIndex, 1, updatedEvent); // Reemplaza el evento con los datos actualizados.
            localStorage.setItem('events', JSON.stringify(myEvents));
            console.log(updatedEvent);
        }
    });

    // Función que se activa al seleccionar fechas en el calendario.
    calendar.on('select', function(info) {
        const startDateInput = document.getElementById('start-date');
        const endDateInput = document.getElementById('end-date');
        startDateInput.value = info.startStr;
        const endDate = moment(info.endStr, 'YYYY-MM-DD').subtract(1, 'day').format('YYYY-MM-DD');
        endDateInput.value = endDate;
        if(startDateInput.value === endDate) {
            endDateInput.value = '';
        }
    });

    // Renderiza el calendario en la página.
    calendar.render();

    const form = document.querySelector('form');

    // Manejo del evento de envío del formulario para crear o editar un evento.
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Previene el envío predeterminado del formulario.

        // Obtiene los valores ingresados en el formulario.
        const title = document.querySelector('#event-title').value;
        const startDate = document.querySelector('#start-date').value;
        const endDate = document.querySelector('#end-date').value;
        const color = document.querySelector('#event-color').value;
        const endDateFormatted = moment(endDate, 'YYYY-MM-DD').add(1, 'day').format('YYYY-MM-DD');
        const eventId = uuidv4();

        console.log(eventId);

        if (endDateFormatted <= startDate) { // Validación de la fecha de finalización.
            dangerAlert.style.display = 'block';
            return;
        }

        const newEvent = { // Crea un nuevo evento con los datos del formulario.
            id: eventId,
            title,
            start: startDate,
            end: endDateFormatted,
            backgroundColor: color,
            editable: false
        };

        myEvents.push(newEvent); // Agrega el nuevo evento a la lista de eventos.
        localStorage.setItem('events', JSON.stringify(myEvents));

        // Añade el nuevo evento al calendario y oculta el modal.
        calendar.addEvent(newEvent);
        myModal.hide();
    });
});
//---------------------------------------------------------------------------------------
$(document).ready(function() {
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();
  
    /*  className colors
  
          className: default(transparent), important(red), chill(pink), success(green), info(blue)
  
          */
  
    /* initialize the external events
          -----------------------------------------------------------------*/
  
    $("#external-events div.external-event").each(function() {
      // create an Event Object (https://arshaw.com/fullcalendar/docs/event_data/Event_Object/)
      // it doesn't need to have a start or end
      var eventObject = {
        title: $.trim($(this).text()) // use the element's text as the event title
      };
  
      // store the Event Object in the DOM element so we can get to it later
      $(this).data("eventObject", eventObject);
  
      // make the event draggable using jQuery UI
      $(this).draggable({
        zIndex: 999,
        revert: true, // will cause the event to go back to its
        revertDuration: 0 //  original position after the drag
      });
    });
  
    /* initialize the calendar
          -----------------------------------------------------------------*/
  
    var calendar = $("#calendar").fullCalendar({
      header: {
        left: "title",
        center: "agendaDay,agendaWeek,month",
        right: "prev,next today"
      },
      editable: true,
      firstDay: 1, //  1(Monday) this can be changed to 0(Sunday) for the USA system
      selectable: true,
      defaultView: "month",
  
      axisFormat: "h:mm",
      columnFormat: {
        month: "ddd", // Mon
        week: "ddd d", // Mon 7
        day: "dddd M/d", // Monday 9/7
        agendaDay: "dddd d"
      },
      titleFormat: {
        month: "MMMM yyyy", // September 2009
        week: "MMMM yyyy", // September 2009
        day: "MMMM yyyy" // Tuesday, Sep 8, 2009
      },
      allDaySlot: false,
      selectHelper: true,
      select: function(start, end, allDay) {
        var title = prompt("Event Title:");
        if (title) {
          calendar.fullCalendar(
            "renderEvent",
            {
              title: title,
              start: start,
              end: end,
              allDay: allDay
            },
            true // make the event "stick"
          );
        }
        calendar.fullCalendar("unselect");
      },
      droppable: true, // this allows things to be dropped onto the calendar !!!
      drop: function(date, allDay) {
        // this function is called when something is dropped
  
        // retrieve the dropped element's stored Event Object
        var originalEventObject = $(this).data("eventObject");
  
        // we need to copy it, so that multiple events don't have a reference to the same object
        var copiedEventObject = $.extend({}, originalEventObject);
  
        // assign it the date that was reported
        copiedEventObject.start = date;
        copiedEventObject.allDay = allDay;
  
        // render the event on the calendar
        // the last `true` argument determines if the event "sticks" (https://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
        $("#calendar").fullCalendar("renderEvent", copiedEventObject, true);
  
        // is the "remove after drop" checkbox checked?
        if ($("#drop-remove").is(":checked")) {
          // if so, remove the element from the "Draggable Events" list
          $(this).remove();
        }
      },
  
      events: [
        {
          title: "All Day Event",
          start: new Date(y, m, 1)
        },
        {
          id: 999,
          title: "Repeating Event",
          start: new Date(y, m, d - 3, 16, 0),
          allDay: false,
          className: "info"
        },
        {
          id: 999,
          title: "Repeating Event",
          start: new Date(y, m, d + 4, 16, 0),
          allDay: false,
          className: "info"
        },
        {
          title: "Meeting",
          start: new Date(y, m, d, 10, 30),
          allDay: false,
          className: "important"
        },
        {
          title: "Lunch",
          start: new Date(y, m, d, 12, 0),
          end: new Date(y, m, d, 14, 0),
          allDay: false,
          className: "important"
        },
        {
          title: "Birthday Party",
          start: new Date(y, m, d + 1, 19, 0),
          end: new Date(y, m, d + 1, 22, 30),
          allDay: false
        },
        {
          title: "Click for Google",
          start: new Date(y, m, 28),
          end: new Date(y, m, 29),
          url: "https://google.com/",
          className: "success"
        }
      ]
    });
  });
  