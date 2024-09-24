document.addEventListener('DOMContentLoaded', () => {
    const reportarButton = document.getElementById('reportarButton');

    // Manejo del clic en el botón "Reportar"
    reportarButton.addEventListener('click', () => {
        const reportarForm = document.getElementById('reportarForm');
        const formData = new FormData(reportarForm);

        // Muestra los datos en consola (para depuración)
        for (const [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }

        // Cierra el modal después de reportar
        const modalElement = document.getElementById('reportarModal');
        const modal = bootstrap.Modal.getInstance(modalElement);
        if (modal) {
            modal.hide();
        }
    });
});
