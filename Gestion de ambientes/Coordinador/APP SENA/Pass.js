document.addEventListener('DOMContentLoaded', function() {
  // Obtener elementos del DOM
  const modal = document.getElementById('modal-pass');
  const modalOverlay = document.getElementById('modalOverlay');
  const submenuToggle = document.getElementById('submenuToggle1');
  const closeFormButton = document.querySelector('.close-form');

  // Función para abrir el modal
  function openModal() {
      modal.style.display = 'block';
      modalOverlay.style.display = 'block';
  }

  // Función para cerrar el modal
  function closeModal() {
      modal.style.display = 'none';
      modalOverlay.style.display = 'none';
  }

  // Función para alternar la visibilidad de la contraseña
  function togglePasswordVisibility(inputId) {
      const input = document.getElementById(inputId);
      const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
      input.setAttribute('type', type);
  }

  // Añadir evento click al enlace para abrir el modal
  submenuToggle.addEventListener('click', function(event) {
      event.preventDefault(); // Evita el comportamiento predeterminado del enlace
      openModal();
  });

  // Añadir evento click al botón de cerrar el modal
  closeFormButton.addEventListener('click', function() {
      closeModal();
  });

});