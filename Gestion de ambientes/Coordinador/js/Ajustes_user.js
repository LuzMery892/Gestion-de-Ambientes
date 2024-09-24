// Función para seleccionar o deseleccionar todas las filas
function toggleSelectAll(source) {
  const checkboxes = document.querySelectorAll('.rowSelect');
  checkboxes.forEach(checkbox => checkbox.checked = source.checked);
}
async function fetchUsersByRole(role) {
  try {
      const response = await fetch(`/usuarios/listaPorRol?rol=${role}`);
      if (response.ok) {
          const users = await response.json();
          displayUsers(users);
      } else {
          alert('Error al obtener usuarios por rol.');
      }
  } catch (error) {
      console.error('Error fetching users by role:', error);
  }
}

async function searchUser() {
  const name = document.querySelector('#search-input').value;
  try {
      const response = await fetch(`/usuarios/listarPorNombre?nombre=${name}`);
      if (response.ok) {
          const users = await response.json();
          displayUsers(users);
      } else {
          alert('Error al buscar usuarios.');
      }
  } catch (error) {
      console.error('Error searching user:', error);
  }
}

async function deleteUser(userId) {
  if (confirm('¿Estás seguro de que quieres eliminar este usuario?')) {
      try {
          const response = await fetch(`/usuarios/eliminar-usuario/${userId}`, {
              method: 'DELETE',
          });
          if (response.ok) {
              alert('Usuario eliminado correctamente.');
              // Actualizar la tabla después de eliminar el usuario
              fetchUsersByRole(document.querySelector('.role-option.active').dataset.role);
          } else {
              alert('Error al eliminar el usuario.');
          }
      } catch (error) {
          console.error('Error deleting user:', error);
      }
  }
}

async function saveChanges() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  const usersToDelete = Array.from(checkboxes).map(checkbox => checkbox.dataset.id);

  try {
      const response = await fetch('/usuarios/eliminar-multiples', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(usersToDelete),
      });

      if (response.ok) {
          alert('Usuarios eliminados correctamente.');
          // Actualizar la tabla después de eliminar los usuarios
          fetchUsersByRole(document.querySelector('.role-option.active').dataset.role);
      } else {
          alert('Error al eliminar los usuarios.');
      }
  } catch (error) {
      console.error('Error saving changes:', error);
  }
}

function displayUsers(users) {
  const tableBody = document.querySelector('#user-table tbody');
  tableBody.innerHTML = ''; // Limpiar tabla antes de mostrar nuevos usuarios
  users.forEach(user => {
      const row = document.createElement('tr');
      row.innerHTML = `
          <td><input type="checkbox" data-id="${user.id}"></td>
          <td>${user.nombre}</td>
          <td>${user.correo}</td>
          <td>${user.rol.nombre}</td>
          <td>
              <button onclick="deleteUser(${user.id})">Eliminar</button>
          </td>
      `;
      tableBody.appendChild(row);
  });
}