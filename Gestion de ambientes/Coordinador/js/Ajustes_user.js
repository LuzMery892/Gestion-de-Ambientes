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
              <img src="IMG-ICONS/edit-solid-40.png" alt="editar" class="setting1">
            </button>
            <button type="button" class="action_botton" onclick="deleteRow(${user.id})">
              <img src="IMG-ICONS/trash-regular-40.png" alt="borrar" class="setting2">
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
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAASVJREFUSEvtltENwjAMRK+bwCawCUwCTAKbwCawCfQkUjWunSZuon5ApH7V9bMvtusOK51uJS5agzcAXlpyKfCuQA06lwB+fwdwA3CUvjTwAcC1AKo5DtDgZmKjgZ99lJQo56jZANB8RLYSPI70AuAxQ7feM3DKLBPYB58p8GCUk3rvkEHzOX/tJTzyVwsslZJwFlekTg2wLCQmzGsKcFWwpWANGkBJ+BJwCkp4ska84EVQRuUBe6BhCg4FVgr2QtnT7nbyQNnLnGKTOy/J+J0YJFYhjYN1Z2yBU9XbDDw3VpuA56C8mSrgzH9FZPYHZw0Q/srURa1Ac0p9yulja3MoYJmm23Ei1rLHKHP3rpygqB53ruFY6y2htcDqXtZ6oTfV+D3wB28pax8GeWDyAAAAAElFTkSuQmCC" alt="editar" class="setting1">
            </button>
            <button type="button" class="action_botton" onclick="deleteRow(${user.id})">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAPFJREFUSEvtVtEVwiAQSyfRUXQT3cxNdBN1Exuf9VEEEmyf+AGfNHch4bjegEZraMSLGuIDgK046G3EnBwxLvEZwM5JOOIuAPYK6xBT5VUlir6TmAfILoeYSqmYq5TQxT0T/Q0xbWURhWsT7LFw7hn/FI6xLL6k4tCuymuV8Nk1xVY3Iw6PPT0h63lEemVsqbhkcMFcGVtLPHWvsEOl9lYnTiV092YG1Sp2SbrijzrsVqsG0ou+WTgU+CLP7F3fsv6Lkfhzrnq/kij0rGGpU06QjQ+moJhYjs7Nw+g8aV7guD+Xdyc/jNGT4mIjR6kpYhMFUMowXYu2P93sbzzv9nLxIBXlmmMOm9zWsT0y5o+pdjUFLkjB55nDsKtK/DnZ3yzNQy+td64A3XswA3AsrZTeHtsMkr7yMl9LlWY5sSOF1tE3C4DgGgB2P0OCX/xmMm8wUsE/Z1fsdN6yJmiqWT1McVR1PibG5W8X+hrhZ1A5RDa9iMJ5Wxu/Muf05zeI7vNP7gJY5cfjvHpC+gc7NOoT5E/1coM4bACW7dgsuU1VApXyOwTz2jXaKpYkCO7DRJ5H/mocOfmPHTXVIVtFSwh0M/QWFn8+dkQzyb6I40CBRPzTz2T3NRwYkJHkxb8H7y7M+bIlz4h//74nM9TrvlPC1XMEvwLPJ2mWjK0MzddRdFF9iH5d8Ey5wTRm3mnSy6/4D54Ta4vo6bqc8/UW2rHRZyEkc0VKLvEdLAAAAABJRU5ErkJggg==" alt="borrar" class="setting2">
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