document.addEventListener('DOMContentLoaded', () => {
    const llavesLockersCheckbox = document.getElementById('llaves-lockers');
    const cantidadContainer = document.getElementById('cantidad-container');
    const saveMaterialsButton = document.getElementById('save-materials');

    // Función para mostrar/ocultar el campo de cantidad
    function toggleCantidadContainer() {
        if (llavesLockersCheckbox.checked) {
            cantidadContainer.style.display = 'block';
        } else {
            cantidadContainer.style.display = 'none';
        }
    }

    // Inicializar el estado del campo de cantidad en función del checkbox al cargar la página
    toggleCantidadContainer();

    // Manejar el cambio en el checkbox
    llavesLockersCheckbox.addEventListener('change', toggleCantidadContainer);

    // Manejo del clic en el botón "Guardar"
    saveMaterialsButton.addEventListener('click', () => {
        const materialForm = document.getElementById('materialForm');
        const formData = new FormData(materialForm);

        // Muestra los datos en consola (para depuración)
        for (const [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }

        // Cierra el modal después de guardar
        const modalElement = document.getElementById('materialModal');
        const modal = bootstrap.Modal.getInstance(modalElement);
        if (modal) {
            modal.hide();
        }
    });
});
