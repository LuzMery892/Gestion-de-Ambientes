// Función para obtener el token de autorización
function getAuthToken() {
  return localStorage.getItem('token'); // El token se almacena en localStorage
}

// Función personalizada para realizar fetch con el token de autorización
function fetchWithToken(url, options = {}) {
  const token = getAuthToken();
  
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

// Función para buscar usuarios por filtro
async function buscarUsuarios() {
  const nombre = document.getElementById('nombre').value;
  const rol = document.getElementById('rol').value;
  const centroId = document.getElementById('centroId').value;

  let queryParams = [];

  if (nombre) {
      queryParams.push(`nombre=${encodeURIComponent(nombre)}`);
  }
  if (rol) {
      queryParams.push(`rol=${encodeURIComponent(rol)}`);
  }
  if (centroId) {
      queryParams.push(`centroId=${encodeURIComponent(centroId)}`);
  }

  const queryString = queryParams.length ? `?${queryParams.join('&')}` : '';

  try {
    const response = await fetchWithToken(`http://localhost:8080/usuarios/buscarPorFiltro${queryString}`);
    
    if (!response.ok) {
        console.error('Código de estado HTTP:', response.status);
        const errorMessage = await response.text();
        throw new Error(`Error en la solicitud: ${errorMessage}`);
    }

    const usuarios = await response.json();
    mostrarUsuarios(usuarios);
  } catch (error) {
    showMessage('error', 'No se pudieron cargar los usuarios: ' + error.message);
    console.error('Detalles del error:', error);
  }
}

// Función para mostrar usuarios en la tabla
function mostrarUsuarios(usuarios) {
  const tbody = document.getElementById('userTableBody');
  tbody.innerHTML = ''; // Limpiar tabla

  if (usuarios.length === 0) {
      showMessage('error', 'No se encontraron usuarios.');
      return;
  }

  usuarios.forEach(usuario => {
      const fila = document.createElement('tr');
      
      // Checkbox para seleccionar usuario
      const celdaCheckbox = document.createElement('td');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.classList.add('user-checkbox');
      checkbox.value = usuario.id; // El ID del usuario
      celdaCheckbox.appendChild(checkbox);
      fila.appendChild(celdaCheckbox);
      
      // Celdas para mostrar los campos del usuario
      fila.appendChild(crearCeldaTexto(usuario.rol));
      fila.appendChild(crearCeldaTexto(usuario.centroFormacion));
      fila.appendChild(crearCeldaTexto(usuario.nombreCompleto));
      fila.appendChild(crearCeldaTexto(usuario.identificacion));
      fila.appendChild(crearCeldaTexto(usuario.correoInstitucional));
      fila.appendChild(crearCeldaTexto(usuario.correoAlternativo));
      fila.appendChild(crearCeldaTexto(usuario.telefono));

      // Celda para el botón de eliminar
      const celdaEliminar = document.createElement('td');
      const btnEliminar = document.createElement('button');
      btnEliminar.textContent = 'Eliminar';
      btnEliminar.classList.add('btn', 'btn-danger');
      btnEliminar.onclick = () => eliminarUsuario(usuario.id); // Llama a la función de eliminación
      celdaEliminar.appendChild(btnEliminar);
      fila.appendChild(celdaEliminar);

      tbody.appendChild(fila);
  });
}
// Celda para el botón de eliminar
const celdaEliminar = document.createElement('td');
const btnEliminar = document.createElement('button');

// Texto y clase inicial del botón (verde)
btnEliminar.textContent = 'Eliminar';
btnEliminar.classList.add('btn', 'btn-success'); // Inicialmente verde

// Evento al hacer clic
btnEliminar.onclick = () => {
  btnEliminar.classList.remove('btn-success'); // Elimina la clase verde
  btnEliminar.classList.add('btn-danger'); // Añade la clase roja
  btnEliminar.textContent = 'Confirmar eliminación'; // Cambia el texto del botón
  
  // Aquí puedes añadir una confirmación adicional antes de llamar a eliminarUsuario
  setTimeout(() => {
    if (confirm('¿Estás seguro de que quieres eliminar este usuario?')) {
      eliminarUsuario(usuario.id); // Llama a la función de eliminación
    }
  }, 100);
};

celdaEliminar.appendChild(btnEliminar);
fila.appendChild(celdaEliminar);

tbody.appendChild(fila);


// Función auxiliar para crear una celda de texto
function crearCeldaTexto(contenido) {
  const celda = document.createElement('td');
  celda.textContent = contenido || 'N/A';
  return celda;
}

// Función para seleccionar/deseleccionar todos los checkboxes
function toggleSelectAll(checkbox) {
  const checkboxes = document.querySelectorAll('.user-checkbox');
  checkboxes.forEach(cb => cb.checked = checkbox.checked);
}

let currentDeleteId = null; // Variable para almacenar el ID del usuario a eliminar

// Función para mostrar el modal
function showModal(message, confirmCallback) {
    document.getElementById('modal-message').textContent = message; // Establece el mensaje
    document.getElementById('modal').style.display = 'block'; // Muestra el modal
    document.getElementById('confirm-btn').onclick = function() {
        confirmCallback(); // Llama a la función de confirmación
        closeModal(); // Cierra el modal
    };
}

// Función para cerrar el modal
function closeModal() {
    document.getElementById('modal').style.display = 'none'; // Oculta el modal
}

// Función para eliminar un solo usuario por ID
async function eliminarUsuario(id) {
    currentDeleteId = id; // Guarda el ID del usuario a eliminar
    showModal("¿Estás seguro de que deseas eliminar este usuario?", async function() {
        try {
            const response = await fetchWithToken(`http://localhost:8080/usuarios/eliminar-usuario/${currentDeleteId}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Error al eliminar el usuario');
            }

            buscarUsuarios(); // Actualiza la lista de usuarios después de la eliminación
            showMessage('success', 'Usuario eliminado con éxito.');
        } catch (error) {
            showMessage('error', error.message);
        }
    });
}

// Función para eliminar múltiples usuarios
async function saveChanges() {
    const selectedCheckboxes = document.querySelectorAll('.user-checkbox:checked');
    const ids = Array.from(selectedCheckboxes).map(cb => cb.value);

    if (ids.length === 0) {
        showMessage('error', 'No se ha seleccionado ningún usuario para eliminar.');
        return;
    }

    showModal("¿Estás seguro de que deseas eliminar estos usuarios?", async function() {
        try {
            const response = await fetchWithToken('http://localhost:8080/usuarios/eliminar-multiples', {
                method: 'POST',
                body: JSON.stringify(ids),
            });

            if (!response.ok) {
                throw new Error('Error al eliminar los usuarios');
            }

            buscarUsuarios(); // Actualiza la lista de usuarios después de la eliminación
            showMessage('success', 'Usuarios eliminados con éxito.');
        } catch (error) {
            showMessage('error', error.message);
        }
    });
}
// Función para mostrar un mensaje general (error o éxito)
function showMessage(type, message) {
    const messageDiv = type === 'error' ? document.getElementById('error-message') : document.getElementById('success-message');

    messageDiv.textContent = message; 
    messageDiv.style.display = 'block'; 

    setTimeout(() => {
        messageDiv.style.display = 'none';
    }, 3000); 
}