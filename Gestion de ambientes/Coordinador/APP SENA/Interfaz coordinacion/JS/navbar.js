// Manejo de la funcionalidad del menú desplegable
const buttons = document.querySelectorAll('.navbar__button');

buttons.forEach(button => {
  button.addEventListener('click', function () {
    const submenu = this.nextElementSibling; 
    const arrow = this.querySelector('.navbar__arrow');
    const parentItem = this.closest('.navbar__item');

    // Verificar si el submenú está abierto
    const isSubmenuOpen = submenu && submenu.classList.contains('navbar__submenu--show');

    // Cerrar todos los submenús y restablecer flechas y márgenes
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

    // Si el submenú estaba abierto, solo ciérralo, de lo contrario, ábrelo
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
      // Maneja el clic en el enlace
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