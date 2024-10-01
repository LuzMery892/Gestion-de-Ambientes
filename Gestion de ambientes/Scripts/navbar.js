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

//************************************************************* */

function hideElementsBasedOnRole(rol) {
  // Ocultar el contenedor de 'coordinador-container' si es necesario
  const coordinadorContainer = document.getElementById('coordinador-container');
  if (rol === 'ALISTAMIENTO' && coordinadorContainer) {
      coordinadorContainer.style.display = 'none';
  }

  // Ocultar el elemento de historial
  const historialItem = document.getElementById('historial_item');
  if (rol === 'ALISTAMIENTO' && historialItem) {
      historialItem.style.display = 'none'; // Oculta el elemento
  }
}

