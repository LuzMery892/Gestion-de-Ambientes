/* TAB 2 pestañas*/
const tabs = document.querySelectorAll('.select_amb');
    const panes = document.querySelectorAll('.tab-pane');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const role = tab.getAttribute('data-role');
        
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        panes.forEach(pane => {
          if ((pane.id === 'reportes_BuenosAires' && role === 'ReportesBuenosAires') ||
              (pane.id === 'actualizarBuenosAires' && role === 'estadoBuenosAires')) {
            pane.classList.add('active');
          } else {
            pane.classList.remove('active');
          }
        });
      });
    });
    
    // Mostrar la primera pestaña por defecto
    const defaultTab = tabs[0];
    if (defaultTab) {
      defaultTab.click();
    }

/*--------------------------------------------------------------------------------------------------------------------------------*/
/* Cerrar ventana y vuelve a html de 4 sedes*/
const closeFormButtonpomar = document.querySelector('.close-form9');
const estadoPomar = document.querySelector('.container_sedes'); 

if (closeFormButtonpomar  && estadoPomar) {
    closeFormButtonpomar .addEventListener('click', function() {
        estadoPomar.style.display = 'none'; 
    window.location.href = 'Novedades-Estado.html'; 
  });
}

/*--------------------------------------------------------------------------------------------------------------------------------*/

    function searchAmbiente() {
      const name = document.getElementById('ambienteName').value.toLowerCase();
      const status = document.getElementById('ambienteStatus').value;
      const cards = document.querySelectorAll('.card');

      cards.forEach(card => {
          const cardName = card.querySelector('.card-title').textContent.toLowerCase();
          const cardStatus = card.dataset.status;

          if ((name === '' || cardName.includes(name)) && (status === '' || cardStatus === status)) {
              card.style.display = 'block';
          } else {
              card.style.display = 'none';
          }
      });
  }
  

  function updateCardStatus(selectElement) {
      const status = selectElement.value;
      if (status === 'clausurado') {
          openModal();
      }
  }

  function openModal() {
      document.getElementById("statusModal").style.display = "block";
  }

  function closeModal() {
      document.getElementById("statusModal").style.display = "none";
  }

  function saveDetails() {
      // Aquí podrías agregar lógica para guardar los detalles.
      alert('Detalles guardados.');
      closeModal();
  }

  // Cerrar el modal si el usuario hace clic fuera de él
  window.onclick = function(event) {
      if (event.target === document.getElementById("statusModal")) {
          closeModal();
      }
  }


  function updateStatus(selectElement) {
    // Obtiene el valor seleccionado
    const status = selectElement.value;

    // Quita las clases de colores anteriores
    selectElement.classList.remove('option-pending', 'option-in-review', 'option-closed');

    // Añade la clase correspondiente según el valor seleccionado
    if (status === 'pendiente') {
        selectElement.classList.add('option-pending');
    } else if (status === 'en-revision') {
        selectElement.classList.add('option-in-review');
    } else if (status === 'cerrado') {
        selectElement.classList.add('option-closed');
    }
}

