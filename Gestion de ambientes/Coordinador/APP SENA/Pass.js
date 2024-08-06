document.addEventListener('DOMContentLoaded', function() {
  const submenuToggle = document.getElementById('submenuToggle1');
  const containerPass = document.getElementById('container_pass');
  const closeFormButton = document.querySelector('.close_form');

  // Muestra el formulario
  submenuToggle.addEventListener('click', function(event) {
      event.preventDefault();
      containerPass.classList.remove('hidden');
  });

  // Cierra el formulario
  closeFormButton.addEventListener('click', function() {
      containerPass.classList.add('hidden');
  });

  // Cierra el formulario si se hace clic fuera de él
  document.addEventListener('click', function(event) {
      if (!containerPass.contains(event.target) && !submenuToggle.contains(event.target)) {
          containerPass.classList.add('hidden');
      }
  });

  // Función para alternar la visibilidad de la contraseña
  window.togglePasswordVisibility = function(inputId) {
      const input = document.getElementById(inputId);
      const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
      input.setAttribute('type', type);
  };
});