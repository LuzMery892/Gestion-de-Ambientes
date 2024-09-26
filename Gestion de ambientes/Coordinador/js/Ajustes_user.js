// Función para obtener el token de autorización
function getAuthToken() {
  return localStorage.getItem('token'); // Suponiendo que el token se almacena en localStorage
}

// Función personalizada para realizar fetch con el token de autorización
function fetchWithToken(url, options = {}) {
  const token = getAuthToken();
  
  // Agregar el token de autorización en los encabezados
  const headers = {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
    ...options.headers,
  };

  return fetch(url, {
    ...options,
    headers: headers,
  });
}

// Función para seleccionar o deseleccionar todas las filas
function toggleSelectAll(source) {
  const checkboxes = document.querySelectorAll('.rowSelect');
  checkboxes.forEach(checkbox => checkbox.checked = source.checked);
}

// Función para obtener y mostrar usuarios por rol
function fetchUsersByRole(role) {
  fetchWithToken(`/usuarios/listaPorRol?rol=${role}`)
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
        row.setAttribute('data-id', user.id); // Añadir atributo data-id
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
  fetchWithToken(`/usuarios/buscarPorNombre?nombre=${name}`)
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
        row.setAttribute('data-id', user.id); // Añadir atributo data-id
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
    fetchWithToken(`/usuarios/${userId}`, {
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
  const usersToDelete = [...document.querySelectorAll('.rowSelect:checked')].map(checkbox => {
    return checkbox.closest('tr').getAttribute('data-id');
  });

  if (usersToDelete.length > 0) {
    if (confirm('¿Estás seguro de que deseas eliminar los usuarios seleccionados?')) {
      Promise.all(usersToDelete.map(userId => {
        return fetchWithToken(`/usuarios/${userId}`, {
          method: 'DELETE'
        });
      }))
      .then(responses => {
        responses.forEach((response, index) => {
          if (!response.ok) {
            throw new Error('Error al eliminar el usuario con ID: ' + usersToDelete[index]);
          }
          // Eliminar fila de la tabla
          document.querySelector(`tr[data-id="${usersToDelete[index]}"]`).remove();
        });
        hideError();
      })
      .catch(error => {
        showError(error.message);
      });
    }
  } else {
    alert('No se han seleccionado usuarios para eliminar.');
  }
}

// Función para mostrar errores
function showError(message) {
  const errorElement = document.getElementById('error-message');
  errorElement.textContent = message;
  errorElement.style.display = 'block'; // Mostrar el mensaje de error
}

// Función para ocultar errores
function hideError() {
  const errorElement = document.getElementById('error-message');
  errorElement.textContent = '';
  errorElement.style.display = 'none'; // Ocultar el mensaje de error
}
//probando : 
// Inicialización
document.addEventListener('DOMContentLoaded', () => {
  // Cargar usuarios por rol al cargar la página
  const rolUsuario = localStorage.getItem('rol'); // se guarda el rol del usuario en localStorage
  if (rolUsuario) {
      fetchUsersByRole(rolUsuario); // Cargar usuarios según el rol
  } else {
      fetchAllUsers(); // Cargar todos los usuarios si no hay rol
  }

  // Manejador de evento para cargar todos los usuarios
  document.getElementById('cargarTodosUsuarios').addEventListener('click', () => {
      fetchAllUsers(); // Cargar todos los usuarios al hacer clic
  });
});