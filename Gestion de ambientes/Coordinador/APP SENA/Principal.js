document.addEventListener('DOMContentLoaded', function () {
  // Manejo de la funcionalidad del menú desplegable
  const buttons = document.querySelectorAll('.navbar__button');

  buttons.forEach(button => {
    button.addEventListener('click', function () {
      // Obtener el submenú, la flecha y el ítem del menú
      const submenu = this.nextElementSibling; // El submenú está después del botón
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
          sub.closest('.navbar__item').style.marginBottom = '0px'; // Colapsa el ítem del menú
        }
      });

      // Si el submenú estaba abierto, solo ciérralo, de lo contrario, ábrelo
      if (isSubmenuOpen) {
        submenu.classList.remove('navbar__submenu--show');
        if (arrow) {
          arrow.classList.remove('navbar__arrow--rotate');
        }
        parentItem.style.marginBottom = '0px'; // Colapsa el ítem del menú
      } else {
        if (submenu) {
          submenu.classList.add('navbar__submenu--show');
          if (arrow) {
            arrow.classList.add('navbar__arrow--rotate');
          }
          parentItem.style.marginBottom = submenu.scrollHeight + 'px'; // Expande el ítem del menú
        }
      }
    });
  });
});