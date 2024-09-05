const closeFormButton5 = document.querySelector('.close_form6');
const contenedor_principalNovedad = document.querySelector('.contenedor_principalNov');

if (closeFormButton5 && contenedor_principalNovedad) {
   closeFormButton5.addEventListener('click', function() {
    contenedor_principalNovedad.style.display = 'none'; 
    window.location.href = 'coordinadorDashboard.html'; 
  });
}

const card_pomar = document.getElementById('card-2');

if (card_pomar) {
    card_pomar.addEventListener('click', function(event) {
        event.preventDefault(); 
        window.location.href = 'Novedades_sedePomar.html'; 
    });
}

const card_central = document.getElementById('card-1');

if (card_central) {
    card_central.addEventListener('click', function(event) {
        event.preventDefault(); 
        window.location.href = 'Novedades_sedeCentral.html'; 
    });
}

const card_usb = document.getElementById('card-4');

if (card_usb) {
    card_usb.addEventListener('click', function(event) {
        event.preventDefault(); 
        window.location.href = 'Novedades_usb.html'; 
    });
}

const card_buenosaires = document.getElementById('card-3');

if (card_buenosaires ) {
    card_buenosaires .addEventListener('click', function(event) {
        event.preventDefault(); 
        window.location.href = 'Novedades_sedeBuenosaires.html'; 
    });
}


document.addEventListener("DOMContentLoaded", function() {
    // Función para actualizar los datos de las tarjetas
    async function updateCardData() {
        try {
            const response = await fetch('/api/ambientes'); // Cambia la URL al endpoint de tu API
            const data = await response.json();

            // Actualiza los elementos con los datos del backend
            document.getElementById('total-ambientes-1').textContent = data.sede1.totalAmbientes;
            document.getElementById('reportes-pendientes-1').textContent = data.sede1.reportesPendientes;
            document.getElementById('ambientes-cerrados-1').textContent = data.sede1.ambientesCerrados;

            document.getElementById('total-ambientes-2').textContent = data.sede2.totalAmbientes;
            document.getElementById('reportes-pendientes-2').textContent = data.sede2.reportesPendientes;
            document.getElementById('ambientes-cerrados-2').textContent = data.sede2.ambientesCerrados;

            document.getElementById('total-ambientes-3').textContent = data.sede3.totalAmbientes;
            document.getElementById('reportes-pendientes-3').textContent = data.sede3.reportesPendientes;
            document.getElementById('ambientes-cerrados-3').textContent = data.sede3.ambientesCerrados;

            document.getElementById('total-ambientes-4').textContent = data.sede4.totalAmbientes;
            document.getElementById('reportes-pendientes-4').textContent = data.sede4.reportesPendientes;
            document.getElementById('ambientes-cerrados-4').textContent = data.sede4.ambientesCerrados;

        } catch (error) {
            console.error('Error al actualizar los datos:', error);
        }
    }

    // Llama a la función para actualizar los datos
    updateCardData();

    // Opcional: Actualiza los datos periódicamente
    setInterval(updateCardData, 60000); // Actualiza cada 60 segundos
});
