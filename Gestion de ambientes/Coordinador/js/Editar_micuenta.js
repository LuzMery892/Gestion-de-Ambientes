const showTab = (tabId) => {
  // Obtener todas las pestañas y ocultar el contenido de todas
  const tabs = document.querySelectorAll('.contenedor_selectinfo .select_info');
  const tabContents = document.querySelectorAll('.tab-content .tab-User');

  // Remover la clase activa de todas las pestañas
  tabs.forEach(tab => tab.classList.remove('active'));

  // Ocultar todos los contenidos de las pestañas
  tabContents.forEach(content => content.classList.remove('active'));

  // Añadir la clase activa a la pestaña clickeada
  const clickedTab = document.querySelector(`.contenedor_selectinfo .select_info[data-role="${tabId}"]`);
  if (clickedTab) {
    clickedTab.classList.add('active');
  }

  // Mostrar el contenido correspondiente
  const activeTabContent = document.querySelector(`#${tabId}`);
  if (activeTabContent) {
    activeTabContent.classList.add('active');
  }
};

// Inicializar la primera pestaña como activa
const firstTab = document.querySelector('.contenedor_selectinfo .select_info');
if (firstTab) {
  const firstTabId = firstTab.getAttribute('data-role');
  if (firstTabId) {
    showTab(firstTabId);
  }
}

// Añadir event listeners a las pestañas
const tabs = document.querySelectorAll('.contenedor_selectinfo .select_info');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const tabId = tab.getAttribute('data-role');
    showTab(tabId);
  });
});


      
    // Obtener el botón de cerrar el formulario y el contenedor
    const closeFormButton7 = document.querySelector('.close_form7');
    const contenedorEditUser = document.querySelector('.container_editUser');
  
    if (closeFormButton7 && contenedorEditUser) {
      closeFormButton7.addEventListener('click', () => {
        contenedorEditUser.style.display = 'none';
        window.location.href = 'coordinadorDashboard.html';
      });
    }
  
    // Manejar el envío del formulario de cambio de contraseña
    document.querySelector('.password-form')?.addEventListener('submit', function(event) {
      event.preventDefault(); // Previene el envío del formulario por defecto
  
      const contraseñaActual = document.getElementById('contraseñaActual').value;
      const nuevaContraseña = document.getElementById('nuevaContraseña').value;
      const confirmarNuevaContraseña = document.getElementById('confirmarNuevaContraseña').value;
  
      if (nuevaContraseña !== confirmarNuevaContraseña) {
        alert('La nueva contraseña y la confirmación no coinciden.');
        return;
      }
  
      // Crear el objeto con los datos del formulario
      const requestData = {
        contraseñaActual: contraseñaActual,
        nuevaContraseña: nuevaContraseña,
        confirmarNuevaContraseña: confirmarNuevaContraseña
      };
  
      // Enviar la solicitud al backend usando fetch
      fetch('usuarios/cambiar_contraseña', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
      })
      .then(response => response.json())
      .then(data => {
        alert(data.message);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    });
  
  
  // Función para alternar la visibilidad de la contraseña
  function togglePasswordVisibility(id) {
    const passwordInput = document.getElementById(id);
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text'; 
    } else {
      passwordInput.type = 'password'; 
    }
  }
  