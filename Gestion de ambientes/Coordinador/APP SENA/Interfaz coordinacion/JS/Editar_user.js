   // Obtén el botón de cerrar el formulario
   const closeFormButton7 = document.querySelector('.close_form7');
   // Obtén el contenedor del formulario
   const Contenedor_editUser = document.querySelector('.container_editUser');

   // Verifica si el botón y el formulario existen
   if (closeFormButton7 && Contenedor_editUser ) {
       // Maneja el clic en el botón de cerrar el formulario
       closeFormButton7.addEventListener('click', function() {
           // Oculta el formulario
           Contenedor_editUser .style.display = 'none';
           // Redirige a Principal.html
           window.location.href = 'Principal.html';
       });
   }
