function handleStatusChange(select) {
    const availableStatus = document.getElementById('availableStatus');
    const closedStatus = document.getElementById('closedStatus');

    if (select.value === 'disponible') {
        availableStatus.style.display = 'inline'; // Mostrar disponible
        closedStatus.style.display = 'none'; // Ocultar clausurado
    } else if (select.value === 'clausurado') {
        availableStatus.style.display = 'none'; // Ocultar disponible
        closedStatus.style.display = 'inline'; // Mostrar clausurado

        // Abre el modal
        const modal = new bootstrap.Modal(document.getElementById('statusModal'));
        modal.show();
    }
}
