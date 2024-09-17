const calendar_central = document.getElementById('card-central');

if (calendar_central) {
  calendar_central.addEventListener('click', function(event) {
        event.preventDefault(); 
        window.location.href ='/Gestion de ambientes/Coordinador/Calendario/Calendario_sedeCentral.html'; 
    });
}

const calendar_pomar = document.getElementById('card-pomar');

if (calendar_pomar) {
  calendar_pomar.addEventListener('click', function(event) {
        event.preventDefault(); 
        window.location.href ='/Gestion de ambientes/Coordinador/Calendario/Calendario_sedePomar.html'; 
    });
}


const calendar_buenosAires= document.getElementById('card-buenosAires');

if (calendar_buenosAires) {
  calendar_buenosAires.addEventListener('click', function(event) {
        event.preventDefault(); 
        window.location.href ='/Gestion de ambientes/Coordinador/Calendario/Calendario_sedeBuenosAires.html'; 
    });
}


const calendar_usb = document.getElementById('card-usb');

if (calendar_usb) {
  calendar_usb.addEventListener('click', function(event) {
        event.preventDefault(); 
        window.location.href ='/Gestion de ambientes/Coordinador/Calendario/Calendario_sedeUSB.html'; 
    });
}