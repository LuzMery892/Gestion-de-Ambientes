// Función para obtener el token de autorización
function getAuthToken() {
  return localStorage.getItem('token'); // El token se almacena en localStorage
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
    // Usar fetchWithToken para incluir el token
    const response = await fetchWithToken(`http://localhost:8080/usuarios/buscarPorFiltro${queryString}`);
    
    if (!response.ok) {
        console.error('Código de estado HTTP:', response.status);
        // Manejo de errores basado en el estado
        const errorMessage = await response.text(); // Obtiene el mensaje de error del servidor
        throw new Error(`Error en la solicitud: ${errorMessage}`);
    }

    const usuarios = await response.json();
    mostrarUsuarios(usuarios);
  } catch (error) {
    mostrarMensajeError('No se pudieron cargar los usuarios: ' + error.message);
    console.error('Detalles del error:', error);
  }
}

// Función para mostrar usuarios en la tabla
function mostrarUsuarios(usuarios) {
  const tbody = document.getElementById('userTableBody');
  tbody.innerHTML = ''; // Limpiar tabla

  if (usuarios.length === 0) {
      mostrarMensajeError('No se encontraron usuarios.');
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
      fila.appendChild(crearCeldaTexto(usuario.nombreCompleto));
      fila.appendChild(crearCeldaTexto(usuario.centroFormacion));
      fila.appendChild(crearCeldaTexto(usuario.identificacion));
      fila.appendChild(crearCeldaTexto(usuario.correoInstitucional));
      fila.appendChild(crearCeldaTexto(usuario.correoAlternativo));
      fila.appendChild(crearCeldaTexto(usuario.telefono));
      
      tbody.appendChild(fila);
  });
}

// Función auxiliar para crear una celda de texto
function crearCeldaTexto(contenido) {
  const celda = document.createElement('td');
  celda.textContent = contenido || 'N/A';
  return celda;
}

// Función para mostrar un mensaje de error
function mostrarMensajeError(mensaje) {
  const mensajeError = document.getElementById('error-message');
  mensajeError.textContent = mensaje;
  mensajeError.style.display = 'block';
}

// Función para seleccionar/deseleccionar todos los checkboxes
function toggleSelectAll(checkbox) {
  const checkboxes = document.querySelectorAll('.user-checkbox');
  checkboxes.forEach(cb => cb.checked = checkbox.checked);
}
