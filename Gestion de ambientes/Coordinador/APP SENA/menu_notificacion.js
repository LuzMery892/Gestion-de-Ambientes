// Manejo del menú de navegación (abrir/cerrar)
const toggleButton = document.getElementById('toggleButton');
const navigationMenu = document.querySelector('.navigation-menu');

function toggleMenu() {
  if (navigationMenu.style.display === 'none' || navigationMenu.style.display === '') {
    navigationMenu.style.display = 'flex';
  } else {
    navigationMenu.style.display = 'none';
  }
}

function clickOutsideMenu(event) {
  if (
    navigationMenu.style.display === 'flex' &&
    !navigationMenu.contains(event.target) &&
    !toggleButton.contains(event.target)
  ) {
    navigationMenu.style.display = 'none';
  }
}

// Inicialmente ocultar el menú de navegación
navigationMenu.style.display = 'none';

toggleButton.addEventListener('click', toggleMenu);
document.addEventListener('click', clickOutsideMenu);