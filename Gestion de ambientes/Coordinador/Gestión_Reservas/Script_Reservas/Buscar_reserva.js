
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