const closeFormButton5 = document.querySelector('.close_form5');
const contenedor_principalNovedad = document.querySelector('.contenedor_principalNov');

if (closeFormButton5 && contenedor_principalNovedad) {
   closeFormButton5.addEventListener('click', function() {
    contenedor_principalNovedad.style.display = 'none'; 
    window.location.href = 'Principal.html'; 
  });
}


document.addEventListener('DOMContentLoaded', function() {
    fetch('/ambientes/buscar/ambiente/porNombre') // Ajusta este endpoint según sea necesario
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('card-container');
            // Aquí supongamos que recibimos una lista de ambientes
            data.forEach(ambiente => {
                const card = document.createElement('div');
                card.classList.add('card');
                card.innerHTML = `
                    <img src="${ambiente.imagen || 'https://via.placeholder.com/300x200'}" alt="Imagen de ${ambiente.nombre}">
                    <h3>${ambiente.nombre}</h3>
                    <p><strong>Total Ambientes:</strong> ${ambiente.totalAmbientes}</p>
                    <p><strong>Reportes Pendientes:</strong> ${ambiente.reportesPendientes}</p>
                    <p class="${ambiente.estado === 'Disponible' ? 'status-good' : 'status-problem'}">
                        <strong>Estado General:</strong> ${ambiente.estado}
                    </p>
                    <div class="actions">
                        ${ambiente.estado === 'Disponible' ? 
                            `<button class="close" onclick="clausurarAmbiente(${ambiente.id})">Clausurar</button>` :
                            `<button class="reopen" onclick="ponerDisponibleAmbiente(${ambiente.id})">Reabrir</button>`
                        }
                    </div>
                `;
                container.appendChild(card);
            });
        })
        .catch(error => console.error('Error al cargar datos:', error));
});

function clausurarAmbiente(id) {
    fetch(`/ambientes/clausurar/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ razonClausura: 'Razón para clausurar' }) // Ajusta según tus necesidades
    })
    .then(response => {
        if (response.ok) {
            alert('Ambiente clausurado.');
            location.reload(); // Recarga la página para reflejar los cambios
        }
    })
    .catch(error => console.error('Error al clausurar ambiente:', error));
}

function ponerDisponibleAmbiente(id) {
    fetch(`/ambientes/disponible/${id}`, {
        method: 'POST'
    })
    .then(response => {
        if (response.ok) {
            alert('Ambiente disponible nuevamente.');
            location.reload(); // Recarga la página para reflejar los cambios
        }
    })
    .catch(error => console.error('Error al poner ambiente disponible:', error));
}