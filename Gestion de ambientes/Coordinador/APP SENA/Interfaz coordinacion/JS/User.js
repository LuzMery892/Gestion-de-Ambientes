const closeFormButton3 = document.querySelector('.close_form3');
const containerUserSetting = document.querySelector('.container_user_setting');

if (closeFormButton3 && containerUserSetting) {
  closeFormButton3.addEventListener('click', function() {
    containerUserSetting.style.display = 'none'; // Oculta el contenedor
    window.location.href = 'Principal.html'; // Redirige a Principal.html
  });
}

// Función para seleccionar o deseleccionar todas las filas
function toggleSelectAll(source) {
  const checkboxes = document.querySelectorAll('.rowSelect');
  checkboxes.forEach(checkbox => checkbox.checked = source.checked);
}

// Función para cargar las notificaciones en la página de ajustes de usuario
function cargarNotificaciones() {
  const notificacionesContainer = document.querySelector('.notificaciones-container');
  
  if (notificacionesContainer) {
    // Supongamos que las notificaciones se obtienen de un API y se almacenan en la variable 'notificaciones'
    const notificaciones = [
      { mensaje: "Nueva reserva creada", fecha: "2024-08-20" },
      { mensaje: "Reserva cancelada", fecha: "2024-08-19" }
    ];

    notificaciones.forEach(notificacion => {
      const notificacionElement = document.createElement('div');
      notificacionElement.className = 'notificacion';
      notificacionElement.innerHTML = `<p>${notificacion.mensaje}</p><span>${notificacion.fecha}</span>`;
      notificacionesContainer.appendChild(notificacionElement);
    });
  }
}

// Llama a la función para cargar notificaciones cuando se cargue la página
window.addEventListener('DOMContentLoaded', cargarNotificaciones);
