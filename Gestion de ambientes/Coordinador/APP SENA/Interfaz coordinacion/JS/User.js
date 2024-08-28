// Seleccionar elementos necesarios para cerrar el formulario y redirigir
const closeFormButton2 = document.querySelector('.close-form2');
const containerNewUser = document.querySelector('.form_newUser'); 

if (closeFormButton2 && containerNewUser) {
  closeFormButton2.addEventListener('click', function() {
    containerNewUser.style.display = 'none'; 
    window.location.href = 'Principal.html'; 
  });
}

// Manejar el envío del formulario de nuevo usuario
document.addEventListener('DOMContentLoaded', function() {
  const newUserForm = document.getElementById('newUserForm');

  if (newUserForm) {
    newUserForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Recoger los datos del formulario
      const formData = new FormData(newUserForm);

      // Convertir los datos a un formato JSON
      const data = {};
      formData.forEach((value, key) => {
        data[key] = value;
      });

      // Enviar los datos al servidor
      fetch('http://localhost:8080/usuarios/crear', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error al crear el usuario.');
        }
      })
      .then(data => {
        // Manejar la respuesta del servidor
        alert(data.message || 'Usuario creado exitosamente.');
        // Redirigir o limpiar el formulario según sea necesario
        newUserForm.reset();
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Hubo un problema con la solicitud.');
      });
    });
  }

  // Lógica para manejar la selección del tipo de correo y actualizar el placeholder
  const correoTipoSelect = document.getElementById('correo-tipo');
  const correoInput = document.getElementById('correo');

  if (correoTipoSelect && correoInput) {
    correoTipoSelect.addEventListener('change', function() {
      const selectedTipo = correoTipoSelect.value;

      if (selectedTipo === 'INSTITUCIONAL') {
        correoInput.placeholder = 'Correo institucional (ejemplo@sena.edu.co)';
      } else if (selectedTipo === 'ALTERNATIVO') {
        correoInput.placeholder = 'Correo personal (ejemplo@gmail.com)';
      }
    });
  }
});
