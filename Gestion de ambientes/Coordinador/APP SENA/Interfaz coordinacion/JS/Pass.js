
    const submenuToggle = document.getElementById('submenuToggle1');
    const containerPass = document.getElementById('container_pass');
    const closeFormButton = document.querySelector('.close_form');
  
    // Muestra el formulario
    submenuToggle.addEventListener('click', function(event) {
      event.preventDefault();
      containerPass.classList.remove('hidden');
      containerPass.focus(); // Enfoca el contenedor del formulario
    });
  
    // Cierra el formulario cuando se haga clic en el botón de cierre
    closeFormButton.addEventListener('click', function() {
      containerPass.classList.add('hidden');
    });
  
    // Asegurarse de que el clic dentro del contenedor no lo cierre
    containerPass.addEventListener('click', function(event) {
      event.stopPropagation(); // Prevenir que el clic dentro del contenedor cierre el formulario
    });
  
    // Función para alternar la visibilidad de la contraseña
    window.togglePasswordVisibility = function(inputId) {
      const input = document.getElementById(inputId);
      if (input) {
        const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
        input.setAttribute('type', type);
      }
    };
  