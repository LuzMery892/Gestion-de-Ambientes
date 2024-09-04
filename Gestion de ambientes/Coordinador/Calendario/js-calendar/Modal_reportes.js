document.addEventListener('DOMContentLoaded', () => {
    // Selecciona el botón "Reportar" y otros elementos necesarios
    const reportarButton = document.getElementById('reportarButton');
  
    // Manejo del clic en el botón "Reportar"
    reportarButton.addEventListener('click', () => {
        // Aquí puedes agregar la lógica para enviar los datos del formulario
        const reportarForm = document.getElementById('reportarForm');
        const formData = new FormData(reportarForm);
  
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
  
        // Cierra el modal después de reportar
        const modal = bootstrap.Modal.getInstance(document.getElementById('reportarModal'));
        modal.hide();
    });
  });