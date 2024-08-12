   // Obtén el botón de cerrar el formulario
   const closeFormButton = document.querySelector('.close-form2');
   // Obtén el contenedor del formulario
   const formNewUser = document.querySelector('.form_newUser');

   // Verifica si el botón y el formulario existen
   if (closeFormButton && formNewUser) {
       // Maneja el clic en el botón de cerrar el formulario
       closeFormButton.addEventListener('click', function() {
           // Oculta el formulario
           formNewUser.style.display = 'none';
           // Redirige a Principal.html
           window.location.href = 'Principal.html';
       });
   }




///CRUD USERS///

function filterByRole(role) {
    fetch(`/usuarios/listaPorRol?rol=${role}`)
        .then(response => response.json())
        .then(data => updateUserTable(data))
        .catch(error => console.error('Error:', error));
}

function searchUser() {
    const name = document.getElementById('searchName').value;
    fetch(`/usuarios/buscarusuarios_PorNombre?nombre=${name}`)
        .then(response => response.json())
        .then(data => updateUserTable([data])) 
        .catch(error => console.error('Error:', error));
}

function updateUserTable(users) {
    const tbody = document.getElementById('userTableBody');
    tbody.innerHTML = '';
    users.forEach(user => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${user.nombre}</td>
            <td>${user.correo}</td>
            <td>${user.telefono}</td>
            <td>${user.identificacion}</td>
            <td>${user.rol.nombre}</td>
            <td class="action-buttons">
                <button type="button" class="action_botton" onclick="editUser(${user.id})">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAASVJREFUSEvtltENwjAMRK+bwCawCUwCTAKbwCawCfQkUjWunSZuon5ApH7V9bMvtusOK51uJS5agzcAXlpyKfCuQA06lwB+fwdwA3CUvjTwAcC1AKo5DtDgZmKjgZ99lJQo56jZANB8RLYSPI70AuAxQ7feM3DKLBPYB58p8GCUk3rvkEHzOX/tJTzyVwsslZJwFlekTg2wLCQmzGsKcFWwpWANGkBJ+BJwCkp4ska84EVQRuUBe6BhCg4FVgr2QtnT7nbyQNnLnGKTOy/J+J0YJFYhjYN1Z2yBU9XbDDw3VpuA56C8mSrgzH9FZPYHZw0Q/srURa1Ac0p9yulja3MoYJmm23Ei1rLHKHP3rpygqB53ruFY6y2htcDqXtZ6oTfV+D3wB28pax8GeWDyAAAAAElFTkSuQmCC" alt="editar" class="setting1">
                </button>
                <button type="button" class="action_botton" onclick="deleteUser(${user.id})">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAPFJREFUSEvtVtEVwiAQSyfRUXQT3cxNdBN1Exuf9VEEEmyf+AGfNHch4bjegEZraMSLGuIDgK046G3EnBwxLvEZwM5JOOIuAPYK6xBT5VUlir6TmAfILoeYSqmYq5TQxT0T/Q0xbWURhWsT7LFw7hn/FI6xLL6k4tCuymuV8Nk1xVY3Iw6PPT0h63lEemVsqbhkcMFcGVtLPHWvsEOl9lYnTiV092YG1Sp2SbrijzrsVqsG0ouLDrkuLHrHzTqX/Pe9AKs3kJ8Su2QpHKeOY+pDqYF8M13GHNnhUA17JOdUogb5nNr3jBUDFPESm4uxzYgf6SOGH0AL/E4AAAAASUVORK5CYII=" alt="eliminar" class="setting1">
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function editUser(id) {
    // Aquí deberías hacer una solicitud para obtener los detalles del usuario y mostrar un formulario de edición
    console.log('Editar usuario con ID:', id);
}

function deleteUser(id) {
    if (confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
        // Aquí deberías hacer una solicitud DELETE al backend para eliminar el usuario
        fetch(`/usuarios/eliminar/${id}`, { method: 'DELETE' })
            .then(response => {
                if (response.ok) {
                    alert('Usuario eliminado exitosamente');
                    searchUser(); // Volver a cargar la lista de usuarios
                } else {
                    alert('Error al eliminar el usuario');
                }
            })
            .catch(error => console.error('Error:', error));
    }
}

function saveChanges() {
    // Aquí deberías recopilar los datos del formulario de edición y enviar una solicitud PUT para guardar los cambios
    console.log('Guardar cambios');
}

function closeSettings() {
    // Aquí deberías manejar el cierre del formulario de configuración
    console.log('Cerrar ajustes');
}