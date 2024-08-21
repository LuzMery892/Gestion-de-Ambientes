// Manejar el cierre del formulario
const closeFormButton3 = document.querySelector('.close_form3');
const containerUserSetting = document.querySelector('.container_user_setting');

if (closeFormButton3 && containerUserSetting) {
  closeFormButton3.addEventListener('click', function() {
    containerUserSetting.style.display = 'none'; // Oculta el contenedor
    window.location.href = 'Principal.html'; // Redirige a Principal.html
  });
}

// Manejar el envío del formulario
document.getElementById('newUserForm').addEventListener('submit', function(event) {
  event.preventDefault(); 
  
  // Recoger los datos del formulario
  const formData = new FormData(this);

  // Convertir los datos a un formato JSON
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  // Enviar los datos al servidor
  fetch('/crear', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => {
    // Manejar la respuesta del servidor
    alert(data.message || 'Usuario creado exitosamente.');
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Hubo un problema con la solicitud.');
  });
});
