const modal = document.getElementById('reportarModal');
        const btn = document.querySelector('.reportar_novedad');
        const span = document.querySelector('.close');

        // Abre el modal
        btn.onclick = function() {
            modal.style.display = 'flex';
        }

        // Cierra el modal al hacer clic en la X
        span.onclick = function() {
            modal.style.display = 'none';
        }

        // Cierra el modal al hacer clic fuera del contenido del modal
        window.onclick = function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        }

        // Manejar el botón de reportar (aquí solo se cierra el modal, puedes agregar lógica adicional)
        document.getElementById('reportarButton').onclick = function() {
            alert('Novedad reportada');
            modal.style.display = 'none';
        }

