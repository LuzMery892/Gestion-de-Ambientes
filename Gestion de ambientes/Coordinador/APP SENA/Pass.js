// Función para abrir el formulario
function openForm() {
  document.querySelector('.contenedor_main').classList.remove('hidden');
}

// Función para cerrar el formulario
function closeForm() {
  document.querySelector('.contenedor_main').classList.add('hidden');
}

// Función para alternar la visibilidad de la contraseña
function togglePasswordVisibility(inputId) {
  const input = document.getElementById(inputId);
  const type = input.type === 'password' ? 'text' : 'password';
  input.type = type;
}

// Validación del formulario
function validateForm() {
  const currentPassword = document.getElementById('current-password').value.trim();
  const newPassword = document.getElementById('new-password').value.trim();
  const errors = [];

  if (!currentPassword) {
      errors.push('La contraseña actual es requerida.');
  }
  if (!newPassword) {
      errors.push('La nueva contraseña es requerida.');
  }
  if (currentPassword.length < 8) {
      errors.push('La contraseña actual debe tener al menos 8 caracteres.');
  }
  if (newPassword.length < 8) {
      errors.push('La nueva contraseña debe tener al menos 8 caracteres.');
  }

  if (errors.length > 0) {
      alert(errors.join('\n'));
      return false;
  }
  return true;
}

// Agregar eventos a los enlaces y botones
document.addEventListener('DOMContentLoaded', function() {
  // Abre el formulario al hacer clic en submenuToggle1
  document.getElementById('submenuToggle1').addEventListener('click', function(event) {
      event.preventDefault(); // Previene la acción predeterminada del enlace
      openForm(); // Abre el formulario
  });

  // Cierra el formulario al hacer clic en close-form
  document.querySelector('.close-form').addEventListener('click', function() {
      closeForm(); // Cierra el formulario
  });

  // Maneja el envío del formulario
  document.getElementById('passwordForm').addEventListener('submit', function(event) {
      if (!validateForm()) {
          event.preventDefault(); // Evita el envío del formulario si no es válido
          return false; // Asegúrate de no proceder con el envío del formulario si la validación falla
      }
      // Aquí puedes cerrar el formulario si la validación es exitosa
      closeForm(); // Opcional: si deseas cerrar el formulario después de una validación exitosa
  });
});