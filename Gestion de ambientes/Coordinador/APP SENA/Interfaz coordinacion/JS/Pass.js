
    const containerPass = document.getElementById('container_pass');
    const closeFormButton_pass = document.querySelector('.close_form');
  
  // Verifica si el botón y el formulario existen
  if (closeFormButton_pass  && container_pass) {
      // Maneja el clic en el botón de cerrar el formulario
      closeFormButton_pass .addEventListener('click', function() {
          // Oculta el formulario
          container_pass.style.display = 'none';
          // Redirige a Principal.html
          window.location.href = 'Principal.html';
      });
  }
  
    // Función para alternar la visibilidad de la contraseña
    window.togglePasswordVisibility = function(inputId) {
      const input = document.getElementById(inputId);
      if (input) {
        const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
        input.setAttribute('type', type);
      }
    };
  