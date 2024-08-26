
    // Manejo de Modal
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn2 = document.getElementById('closeModalBtn2');
    const modal = document.getElementById('modalPeriodicidad_reservas');
    const cancelBtn = document.getElementById('cancelBtn');
    const doneBtn = document.getElementById('doneBtn');

    // Función para abrir el modal
    function openModal() {
        modal.style.display = 'block';
        console.log('El modal está a punto de ser mostrado.');
    }

    // Función para cerrar el modal
    function closeModal() {
        modal.style.display = 'none';
        console.log('El modal ha sido cerrado.');
    }

    // Event listener para abrir el modal
    if (openModalBtn) openModalBtn.addEventListener('click', openModal);

    // Event listener para cerrar el modal
    if (closeModalBtn2) closeModalBtn2.addEventListener('click', closeModal);
    if (cancelBtn) cancelBtn.addEventListener('click', closeModal);
    if (doneBtn) doneBtn.addEventListener('click', closeModal);

    // Cerrar el modal si se hace clic fuera del contenido del modal
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Manejo de botones de días
    const diaBtns = document.querySelectorAll('.dia-btn');
    diaBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Alternar la clase "selected" en el botón clicado
            btn.classList.toggle('selected');
        });
    });



    const tabs = document.querySelectorAll('.select_res');
    const tabContents = document.querySelectorAll('.tab-sedes');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remover la clase activa de todas las pestañas
            tabs.forEach(t => t.classList.remove('active'));

            // Ocultar todos los contenidos de las pestañas
            tabContents.forEach(content => content.classList.remove('active'));

            // Añadir la clase activa a la pestaña clickeada
            this.classList.add('active');

            // Mostrar el contenido correspondiente
            const activeTabContent = document.querySelector(`#${this.getAttribute('data-role')}`);
            if (activeTabContent) {
                activeTabContent.classList.add('active');
            }
        });
    });

    // Inicializar la primera pestaña como activa
    if (tabs.length > 0) {
        tabs[0].classList.add('active');
        const initialTabContent = document.querySelector(`#${tabs[0].getAttribute('data-role')}`);
        if (initialTabContent) {
            initialTabContent.classList.add('active');
        }
    }