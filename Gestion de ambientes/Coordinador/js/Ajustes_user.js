// Función para seleccionar o deseleccionar todas las filas
function toggleSelectAll(source) {
  const checkboxes = document.querySelectorAll('.rowSelect');
  checkboxes.forEach(checkbox => checkbox.checked = source.checked);
}



// Función para obtener y mostrar usuarios por rol
function fetchUsersByRole(role) {
  fetch(`/usuarios/listaPorRol?rol=${role}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error en la solicitud: ' + response.status);
      }
      return response.json();
    })
    .then(data => {
      const tbody = document.getElementById('userTableBody');
      tbody.innerHTML = ''; // Limpiar tabla

      data.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td><input type="checkbox" class="rowSelect"></td>
          <td>${user.nombre}</td>
          <td>${user.correoInstitucional}</td>
          <td>${user.correoAlternativo}</td>
          <td>${user.telefono}</td>
          <td>${user.identificacion}</td>
          <td>${user.rol.nombre}</td>
          <td class="action-buttons">
            <button type="button" class="action_botton" onclick="editRow(${user.id})">
              <img src="../../Imagenes-appSENA/edit-solid.png" class="action-button">
            </button>
            <button type="button" class="action_botton" onclick="deleteRow(${user.id})">
              <img src="../../Imagenes-appSENA/trash-regular-40.png" alt="borrar" class="action-button">
            </button>
          </td>
        `;
        tbody.appendChild(row);
      });
      hideError();
    })
    .catch(error => {
      showError(error.message);
    });
}

// Función para buscar usuarios por nombre
function searchUser() {
  const name = document.getElementById('searchName').value;
  fetch(`/usuarios/buscarPorNombre?nombre=${name}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error en la solicitud: ' + response.status);
      }
      return response.json();
    })
    .then(data => {
      const tbody = document.getElementById('userTableBody');
      tbody.innerHTML = ''; // Limpiar tabla

      data.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td><input type="checkbox" class="rowSelect"></td>
          <td>${user.nombre}</td>
          <td>${user.correoInstitucional}</td>
          <td>${user.correoAlternativo}</td>
          <td>${user.telefono}</td>
          <td>${user.identificacion}</td>
          <td>${user.rol.nombre}</td>
          <td class="action-buttons">
            <button type="button" class="action_botton" onclick="editRow(${user.id})">
              <img src="../../Imagenes-appSENA/edit-solid.png" class="action-button">
            </button>
            <button type="button" class="action_botton" onclick="deleteRow(${user.id})">
               <img src="../../Imagenes-appSENA/trash-regular-40.png" alt="borrar" class="action-button">
            </button>
          </td>
        `;
        tbody.appendChild(row);
      });
      hideError();
    })
    .catch(error => {
      showError(error.message);
    });
}

// Función para editar un usuario (redirige a la página de edición del usuario)
function editRow(userId) {
  window.location.href = `/usuarios/${userId}`;
}

// Función para eliminar un usuario
function deleteRow(userId) {
  if (confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
    fetch(`/usuarios/${userId}`, {
      method: 'DELETE'
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error en la solicitud: ' + response.status);
        }
        // Eliminar fila de la tabla
        document.querySelector(`tr[data-id="${userId}"]`).remove();
        hideError();
      })
      .catch(error => {
        showError(error.message);
      });
  }
}

// Función para guardar cambios
function saveChanges() {
  alert('Los cambios han sido guardados.');
}