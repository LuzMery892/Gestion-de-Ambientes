// Manejo de la funcionalidad del menú desplegable
const buttons = document.querySelectorAll('.navbar__button');

buttons.forEach(button => {
  button.addEventListener('click', function () {
    const submenu = this.nextElementSibling; 
    const arrow = this.querySelector('.navbar__arrow');
    const parentItem = this.closest('.navbar__item');

    const isSubmenuOpen = submenu && submenu.classList.contains('navbar__submenu--show');

    document.querySelectorAll('.navbar__submenu').forEach(sub => {
      if (sub !== submenu) {
        sub.classList.remove('navbar__submenu--show');
        const relatedArrow = sub.previousElementSibling.querySelector('.navbar__arrow');
        if (relatedArrow) {
          relatedArrow.classList.remove('navbar__arrow--rotate');
        }
        sub.closest('.navbar__item').style.marginBottom = '0px'; 
      }
    });

    if (isSubmenuOpen) {
      submenu.classList.remove('navbar__submenu--show');
      if (arrow) {
        arrow.classList.remove('navbar__arrow--rotate');
      }
      parentItem.style.marginBottom = '0px'; 
    } else {
      if (submenu) {
        submenu.classList.add('navbar__submenu--show');
        if (arrow) {
          arrow.classList.add('navbar__arrow--rotate');
        }
        parentItem.style.marginBottom = submenu.scrollHeight + 'px';
      }
    }
  });
});

// Añadir redirección al hacer clic en el enlace 'createUserLink'
const createUserLink = document.getElementById('createUserLink');

if (createUserLink) {
  createUserLink.addEventListener('click', function(event) {
    event.preventDefault(); 
    window.location.href = 'User.html'; 
  });
}

const settingUserLink = document.getElementById('settingUserLink');

if (settingUserLink) {
  settingUserLink.addEventListener('click', function(event) {
    event.preventDefault(); 
    window.location.href = 'Ajustes_user.html'; 
  });
}

const newAmbienteLink = document.getElementById('newAmbienteLink');

if (newAmbienteLink) {
  newAmbienteLink.addEventListener('click', function(event) {
    event.preventDefault(); 
    window.location.href = 'Ambiente.html'; 
  });
}

const settingAmbienteLink = document.getElementById('settingAmbienteLink');

if (settingAmbienteLink) {
  settingAmbienteLink.addEventListener('click', function(event) {
    event.preventDefault(); 
    window.location.href = 'Ajustes_ambiente.html'; 
  });
}

const ReportesAmbienteLink = document.getElementById('ReportesAmbienteLink');

if (ReportesAmbienteLink) {
  ReportesAmbienteLink.addEventListener('click', function(event) {
    event.preventDefault(); 
    window.location.href = 'Novedades.html'; 
  });
}

const Buscar_ReservaLink = document.getElementById('buscar_reserva');

if (Buscar_ReservaLink ) {
  Buscar_ReservaLink .addEventListener('click', function(event) {
    event.preventDefault(); 
    window.location.href = 'Buscar_reserva.html'; 
  });
}

// Cargar notificaciones en la barra de navegación
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
