const calendar_central = document.getElementById('card-central');

if (calendar_central) {
  calendar_central.addEventListener('click', function(event) {
        event.preventDefault(); 
        window.location.href ='/Gestion de ambientes/Coordinador/Calendario/Calendario_sedeCentral.html'; 
    });
}

