const modal = document.getElementById('materialModal');
const btn = document.querySelector('.añadir_materiales');
const span = document.querySelector('.close');
const llavesCheckbox = document.querySelectorAll('input[type="checkbox"]');
const cantidadContainer = document.getElementById('cantidad-container');

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

// Mostrar el campo de cantidad si se selecciona 'Sí'
llavesCheckbox.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        if (document.getElementById('llaves-lockers').checked) {
            cantidadContainer.style.display = 'block';
        } else {
            cantidadContainer.style.display = 'none';
        }
    });
});

// Manejar el botón de guardar (aquí solo se cierra el modal, puedes agregar lógica adicional)
document.getElementById('guardarButton').onclick = function() {
    alert('Información guardada');
    modal.style.display = 'none';
}

const materialsModal = document.getElementById('materialsModal');
const lockersYes = document.getElementById('lockers-yes');
const lockersNo = document.getElementById('lockers-no');
const quantityContainer = document.getElementById('quantity-container');

if (materialsModal) {
    materialsModal.addEventListener('shown.bs.modal', function () {
        lockersYes.addEventListener('change', function() {
            quantityContainer.style.display = 'block';
        });
        lockersNo.addEventListener('change', function() {
            quantityContainer.style.display = 'none';
        });
    });
}