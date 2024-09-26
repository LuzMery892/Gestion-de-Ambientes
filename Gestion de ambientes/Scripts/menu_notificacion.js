
const Editar_cuenta = document.getElementById('editar_cuenta');

if (Editar_cuenta) {
  Editar_cuenta.addEventListener('click', function(event) {
    event.preventDefault(); 
    window.location.href = '../Gestion_Usuarios/Editar_micuenta.html'; 
  });
}

//*.............*//

const toggleButton = document.getElementById('toggleButton');
const navigationMenu = document.querySelector('.navigation-menu');

function toggleMenu() {
    navigationMenu.classList.toggle('show');
}

function clickOutsideMenu(event) {
    if (navigationMenu.classList.contains('show') && 
        !navigationMenu.contains(event.target) && 
        !toggleButton.contains(event.target)) {
        navigationMenu.classList.remove('show');
    }
}

// Inicialmente ocultar el menú de navegación
navigationMenu.classList.remove('show');

toggleButton.addEventListener('click', toggleMenu);
document.addEventListener('click', clickOutsideMenu);



//************************************************************************************************* */
// Cargar notificaciones en el menú de notificaciones
function cargarNotificacionesMenu() {
  const notificacionesMenu = document.querySelector('.notificaciones-menu');

  if (notificacionesMenu) {
    const notificaciones = [
      { mensaje: "Nueva reserva creada", fecha: "2024-08-20" },
      { mensaje: "Reserva cancelada", fecha: "2024-08-19" }
    ];

    notificaciones.forEach(notificacion => {
      const notificacionElement = document.createElement('div');
      notificacionElement.className = 'notificacion-menu';
      notificacionElement.innerHTML = `<p>${notificacion.mensaje}</p><span>${notificacion.fecha}</span>`;
      notificacionesMenu.appendChild(notificacionElement);
    });
  }
}

window.addEventListener('DOMContentLoaded', cargarNotificacionesMenu);



/*------------------------Cargar notificaciones en la barra de navegación----------------------------------------*/

function cargarNotificacionesNavbar() {
  const notificacionesNavbar = document.querySelector('.notificaciones-navbar');

  if (notificacionesNavbar) {
    const notificaciones = [
      { mensaje: "Nueva reserva creada", fecha: "2024-08-20" },
      { mensaje: "Reserva cancelada", fecha: "2024-08-19" }
    ];

    notificaciones.forEach(notificacion => {
      const notificacionElement = document.createElement('div');
      notificacionElement.className = 'notificacion-navbar';
      notificacionElement.innerHTML = `<p>${notificacion.mensaje}</p><span>${notificacion.fecha}</span>`;
      notificacionesNavbar.appendChild(notificacionElement);
    });
  }
}

window.addEventListener('DOMContentLoaded', cargarNotificacionesNavbar);

