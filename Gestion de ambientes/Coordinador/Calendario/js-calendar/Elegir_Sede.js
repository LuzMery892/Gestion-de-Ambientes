document.querySelectorAll('.sede-card').forEach(card => {
    card.addEventListener('click', function() {
      const sede = this.getAttribute('data-sede');
      document.getElementById('sedes-container').style.display = 'none';
      document.getElementById('calendario-container').style.display = 'block';
      loadCalendar(sede);
    });
  });
  
  document.getElementById('back-button').addEventListener('click', function() {
    document.getElementById('calendario-container').style.display = 'none';
    document.getElementById('sedes-container').style.display = 'block';
  });
  
  function loadCalendar(sede) {
    // Aquí puedes cargar el calendario específico para la sede seleccionada
    // Ejemplo: fetch(`calendario/${sede}.json`).then(...).then(...)
    document.getElementById('calendario').innerHTML = `<h2>Calendario para ${sede}</h2>`;
  }
  