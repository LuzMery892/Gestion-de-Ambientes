document.addEventListener('DOMContentLoaded', function() {
  const createUserLink = document.getElementById('createUserLink');
  const formNewUser = document.querySelector('.form_newUser'); // Actualiza aquí
  const closeFormButton = document.querySelector('.close-form2');

  // Maneja el clic en el enlace "Crear Usuario"
  createUserLink.addEventListener('click', function(event) {
      event.preventDefault(); // Evita el comportamiento por defecto del enlace
      formNewUser.style.display = 'block'; // Muestra el formulario
  });

  // Maneja el clic en el botón de cerrar el formulario
  closeFormButton.addEventListener('click', function() {
      formNewUser.style.display = 'none'; // Oculta el formulario
  });

  // Maneja el clic fuera del formulario para cerrarlo
  document.addEventListener('click', function(event) {
      // Comprueba si el clic es fuera del formulario y fuera del enlace de creación
      if (!formNewUser.contains(event.target) && !createUserLink.contains(event.target) && formNewUser.style.display === 'block') {
          formNewUser.style.display = 'none'; // Oculta el formulario
      }
  });

  // Oculta el formulario al cargar la página
  formNewUser.style.display = 'none'; // Actualiza aquí
});