const closeFormButton5 = document.querySelector('.close_form5');
const contenedor_principalNovedad = document.querySelector('.contenedor_principalNov');

if (closeFormButton5 && contenedor_principalNovedad) {
   closeFormButton5.addEventListener('click', function() {
    contenedor_principalNovedad.style.display = 'none'; 
    window.location.href = 'Principal.html'; 
  });
}

const card_pomar = document.getElementById('card-2');

if (card_pomar) {
    card_pomar.addEventListener('click', function(event) {
        event.preventDefault(); 
        window.location.href = 'Pomar.html'; 
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
