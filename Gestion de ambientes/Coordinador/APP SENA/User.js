document.addEventListener('DOMContentLoaded', function() {
    // Selecciona el enlace de crear usuario y el formulario
    const createUserLink = document.getElementById('createUserLink');
    const formNewUser = document.querySelector('.form_newuser');
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
  
    // Oculta el formulario al cargar la página
    formNewUser.style.display = 'none';
  });