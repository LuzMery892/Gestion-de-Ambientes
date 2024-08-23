
const closeFormButton2 = document.querySelector('.close-form2');
const containerNewUser = document.querySelector('.form_newUser'); 

if (closeFormButton2 && containerNewUser) {
  closeFormButton2.addEventListener('click', function() {
  containerNewUser.style.display = 'none'; 
  window.location.href = 'Principal.html'; 
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
