document.addEventListener('DOMContentLoaded', function() {
  const openModalButton = document.querySelector('.sidebar-btn');
  const addModalElement = document.getElementById('addReserva');
  const submitAddButton = document.getElementById('submit-button');
  const startDateInput = document.getElementById('start-date');
  const endDateInput = document.getElementById('end-date');
  const startTimeInput = document.getElementById('start-time');
  const endTimeInput = document.getElementById('end-time');
  const colorInput = document.getElementById('event-color');
  const daysOfWeek = document.querySelectorAll('input[name="diasSemana[]"]');
  const instructorSelect = document.getElementById('instructor-select');
  const instructorProfileInput = document.getElementById('instructor-profile');
  const instructorCompetenceInput = document.getElementById('instructor-competence');

  if (!openModalButton || !addModalElement || !submitAddButton || !startDateInput || !startTimeInput || !instructorSelect || !instructorProfileInput || !instructorCompetenceInput) {
    console.error('Uno o más elementos del DOM no se encuentran.');
    return;
  }

  // Inicializa el modal de Bootstrap
  const addModal = new bootstrap.Modal(addModalElement);

  // Abre el modal al hacer clic en el botón
  openModalButton.addEventListener('click', () => {
    addModal.show();
  });

  // Cierra el modal al hacer clic fuera del contenido del modal
  window.addEventListener('click', (event) => {
    if (event.target === addModalElement) {
      addModal.hide();
    }
  });

  // Lógica para manejar el clic en el botón de enviar
  submitAddButton.addEventListener('click', () => {
    const startDate = startDateInput.value;
    const endDate = endDateInput.value || startDate;
    const startTime = startTimeInput.value;
    const endTime = endTimeInput.value || startTime;
    const color = colorInput ? colorInput.value : '#3788d8';

    // Validar los datos del horario
    if (!startDate || !startTime) {
      alert('Por favor, complete los campos de horario obligatorios.');
      return;
    }

    // Validar los datos del instructor
    const instructor = instructorSelect.value;
    const instructorProfile = instructorProfileInput.value.trim();
    const instructorCompetence = instructorCompetenceInput.value.trim();

    if (!instructor || !instructorProfile || !instructorCompetence) {
      alert('Por favor, complete todos los campos de instructor.');
      return;
    }

    // Convertir fechas y horas en el formato requerido
    const start = `${startDate}T${startTime}`;
    const end = `${endDate}T${endTime}`;

    // Recolectar días de la semana seleccionados
    const selectedDays = Array.from(daysOfWeek)
      .filter(day => day.checked)
      .map(day => day.value);

    if (selectedDays.length === 0) {
      alert('Por favor, seleccione al menos un día de la semana.');
      return;
    }

    // Obtener el calendario actual
    const calendarEl = document.getElementById('calendar');
    const calendar = FullCalendar.getCalendar(calendarEl);

    // Añadir eventos al calendario para cada día seleccionado
    selectedDays.forEach(day => {
      calendar.addEvent({
        title: 'Nueva Reserva',
        start: start,
        end: end,
        backgroundColor: color,
        extendedProps: { dayOfWeek: day, instructor, instructorProfile, instructorCompetence }
      });
    });

    // Guardar eventos en localStorage
    localStorage.setItem('calendarEvents', JSON.stringify(calendar.getEvents().map(event => ({
      title: event.title,
      start: event.startStr,
      end: event.endStr,
      backgroundColor: event.backgroundColor,
      extendedProps: event.extendedProps
    }))));

    // Cierra el modal
    addModal.hide();
    alert('La reserva se ha guardado correctamente.');
  });
});
