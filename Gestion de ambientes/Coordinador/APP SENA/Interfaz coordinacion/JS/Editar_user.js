   // Obtén el botón de cerrar el formulario
   const closeFormButton7 = document.querySelector('.close_form7');
   // Obtén el contenedor del formulario
   const Contenedor_editUser = document.querySelector('.container_editUser');

   // Verifica si el botón y el formulario existen
   if (closeFormButton7 && Contenedor_editUser ) {
       // Maneja el clic en el botón de cerrar el formulario
       closeFormButton7.addEventListener('click', function() {
           // Oculta el formulario
           Contenedor_editUser .style.display = 'none';
           // Redirige a Principal.html
           window.location.href = 'Principal.html';
       });
   }




// Función para habilitar la edición del formulario
function enableEditing() {
    document.getElementById('container_edit').style.display = 'block';
}

// Función para cerrar el formulario de edición
function closeEditForm() {
    document.getElementById('container_edit').style.display = 'none';
}

// Función para enviar la solicitud de actualización
async function updateUser() {
    const form = document.getElementById('editUserForm');
    const formData = new FormData(form);
    const userId = getUserId(); // Obtén el ID del usuario dinámicamente

    if (!userId) {
        showError('ID de usuario no encontrado.');
        return;
    }

    const usuarioActualizado = {
        nombre: formData.get('nombre'),
        identificacion: formData.get('identificacion'),
        correoSENA: formData.get('correoSENA'),
        correoPersonal: formData.get('correoPersonal'),
        telefono: formData.get('telefono')
    };

    // Verificar campos vacíos
    for (const [key, value] of Object.entries(usuarioActualizado)) {
        if (!value) {
            showError(`El campo ${key} no puede estar vacío.`);
            return;
        }
    }

    try {
        const response = await fetch(`/usuarios/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuarioActualizado)
        });

        if (response.ok) {
            const result = await response.json();
            alert('Usuario actualizado exitosamente');
            closeEditForm();
        } else {
            const error = await response.text();
            showError(error);
        }
    } catch (error) {
        showError('Error en la solicitud: ' + error.message);
    }
}

// Función para mostrar errores
function showError(message) {
    const errorContainer = document.getElementById('errorContainer');
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = message;
    errorContainer.style.display = 'block';
}

// Manejo del formulario al enviarlo
document.getElementById('editUserForm').addEventListener('submit', function(event) {
    event.preventDefault();
    updateUser();
});
