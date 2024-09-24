    // Manejar el envío del formulario de cambio de contraseña
    document.querySelector('.password-form')?.addEventListener('submit', function(event) {
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
  
  
  // Función para alternar la visibilidad de la contraseña
  function togglePasswordVisibility(id) {
    const passwordInput = document.getElementById(id);
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text'; 
    } else {
      passwordInput.type = 'password'; 
    }
  }
  