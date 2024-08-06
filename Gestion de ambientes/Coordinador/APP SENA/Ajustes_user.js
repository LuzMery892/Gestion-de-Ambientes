document.addEventListener('DOMContentLoaded', function() {
  const createUserLink = document.getElementById('settingUserLink');
  const formNewUser = document.querySelector('.container_user_setting');
  const closeFormButton = document.querySelector('.close-form3');

  // Muestra el formulario
  createUserLink.addEventListener('click', function(event) {
      event.preventDefault();
      formNewUser.style.display = 'block';
  });

  // Cierra el formulario al hacer clic en el botón de cerrar
  closeFormButton.addEventListener('click', function() {
      formNewUser.style.display = 'none';
  });

  // Cierra el formulario al hacer clic fuera del formulario
  document.addEventListener('click', function(event) {
      if (!formNewUser.contains(event.target) && !createUserLink.contains(event.target)) {
          formNewUser.style.display = 'none';
      }
  });

  // Oculta el formulario al cargar la página
  formNewUser.style.display = 'none';
});


 // Función para buscar usuarios por rol
 function searchUsersByRole(role) {
    fetch(`http://localhost:8080/usuarios/listaPorRol?rol=${role}`)
      .then(response => response.json())
      .then(data => {
        updateTable(data);
      })
      .catch(error => console.error('Error fetching users by role:', error));
  }

  // Función para buscar usuarios por nombre
  function searchUser() {
    const name = document.getElementById('searchName').value;
    fetch(`http://localhost:8080/usuarios/buscarusuarios_PorNombre?nombre=${name}`)
      .then(response => response.json())
      .then(data => {
        updateTable([data]); // Asume que la respuesta es un solo usuario
      })
      .catch(error => console.error('Error fetching user by name:', error));
  }

  // Función para actualizar la tabla con los datos de los usuarios
  function updateTable(users) {
    const tableBody = document.getElementById('userTableBody');
    tableBody.innerHTML = ''; // Limpiar tabla

    users.forEach(user => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${user.nombre}</td>
        <td>${user.correo}</td>
        <td>${user.telefono}</td>
        <td>${user.numeroDocumento}</td>
        <td>${user.rol.nombre}</td>
        <td class="action-buttons">
          <button type="button" class="action_botton">
            <img src="data:image/png;base64,..." alt="Editar" class="setting1">
          </button>
          <button type="button" class="action_botton">
            <img src="data:image/png;base64,..." alt="Eliminar" class="setting1">
          </button>
        </td>
      `;
      tableBody.appendChild(row);
    });
  }

  // Event listeners para buscar usuarios por rol
  document.querySelectorAll('.role-option').forEach(option => {
    option.addEventListener('click', () => {
      const role = option.getAttribute('data-role');
      searchUsersByRole(role);
    });
  });


