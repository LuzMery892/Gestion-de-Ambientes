
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
    }
    //interactividad de la ctualizacion del cambio de contraseña dentro del sistema
    document.getElementById('changePasswordForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Previene el envío del formulario por defecto

      const contraseñaActual = document.getElementById('contraseñaActual').value;
      const nuevaContraseña = document.getElementById('nuevaContraseña').value;
      const confirmarNuevaContraseña = document.getElementById('confirmarNuevaContraseña').value;

      if (nuevaContraseña !== confirmarNuevaContraseña) {
          alert('La nueva contraseña y la confirmación no coinciden.');
          return;
      }

      // Crear el objeto con los datos del formulario
      const requestData = {
          contraseñaActual: contraseñaActual,
          nuevaContraseña: nuevaContraseña,
          confirmarNuevaContraseña: confirmarNuevaContraseña
      };

      // Enviar la solicitud al backend usando fetch
      fetch('usuarios/cambiar_contraseña', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(requestData)
      })
      .then(response => response.json())
      .then(data => {
          alert(data.message);
      })
      .catch(error => {
          console.error('Error:', error);
      });
  });

  