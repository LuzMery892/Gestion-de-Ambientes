   // Obtén el botón de cerrar el formulario
   const closeFormButton4 = document.querySelector('.close_form4');
   // Obtén el contenedor del formulario
   const Contenedor_Ambiente = document.querySelector('.Contenedor_newAmbiente');

   // Verifica si el botón y el formulario existen
   if (closeFormButton4 && Contenedor_Ambiente) {
       // Maneja el clic en el botón de cerrar el formulario
       closeFormButton4.addEventListener('click', function() {
           // Oculta el formulario
           Contenedor_Ambiente.style.display = 'none';
           // Redirige a Principal.html
           window.location.href = 'index.html';
       });
   }
