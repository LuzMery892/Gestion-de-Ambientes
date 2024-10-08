// Manejar el envío del formulario de nuevo usuario
document.addEventListener('DOMContentLoaded', function() {
  const newUserForm = document.getElementById('newUserForm');

  if (newUserForm) {
      newUserForm.addEventListener('submit', function(event) {
          event.preventDefault();
          
          // Recoger los datos del formulario
          const formData = new FormData(newUserForm);

          // Determinar el tipo de correo y asignar el correspondiente
          const correoTipo = document.getElementById('correo-tipo').value;
          const data = {
              nombre: formData.get('nombre'),
              telefono: formData.get('telefono'),
              numeroDocumento: formData.get('numeroDocumento'),
              centroFormacionId: formData.get('centroFormacionId'),
              rolNombre: formData.get('rolNombre'),
              correoInstitucional: correoTipo === 'INSTITUCIONAL' ? formData.get('correo') : null,
              correoAlternativo: correoTipo === 'ALTERNATIVO' ? formData.get('correo') : null,
          };

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
              alert(data.message || 'Usuario creado exitosamente.');
              newUserForm.reset();
          })
          .catch(error => {
              console.error('Error:', error);
              alert('Hubo un problema con la solicitud.');
          });
      });
  }

  // Lógica para manejar la selección del tipo de correo
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
})