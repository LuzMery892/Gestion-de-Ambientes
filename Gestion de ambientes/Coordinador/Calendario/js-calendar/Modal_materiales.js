document.addEventListener('DOMContentLoaded', () => {
    // Selecciona el botón "Guardar" y otros elementos necesarios
    const guardarButton = document.getElementById('guardarButton');
    const llavesLockers = document.getElementById('llaves-lockers');
    const cantidadContainer = document.getElementById('cantidad-container');
  
    // Función para mostrar u ocultar el campo de cantidad basado en el checkbox de llaves de lockers
    llavesLockers.addEventListener('change', () => {
        if (llavesLockers.checked) {
            cantidadContainer.style.display = 'block';
        } else {
            cantidadContainer.style.display = 'none';
        }
    });
  
    // Manejo del clic en el botón "Guardar"
    guardarButton.addEventListener('click', () => {
        // Aquí puedes agregar la lógica para guardar los datos del formulario
        // Por ejemplo, hacer una solicitud al servidor con los datos del formulario
        const materialForm = document.getElementById('materialForm');
        const formData = new FormData(materialForm);
  
        // Muestra los datos en consola (para depuración)
        for (const [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }
  
        // Puedes usar el objeto `formData` para enviar los datos del formulario al servidor
        // Ejemplo con fetch (necesita una URL de API válida)
        /*
        fetch('/ruta/a/tu/api', {
            method: 'POST',
            body: formData
        }).then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.error('Error:', error));
        */
  
        // Cierra el modal después de guardar
        const modal = bootstrap.Modal.getInstance(document.getElementById('materialModal'));
        modal.hide();
    });
  });
  