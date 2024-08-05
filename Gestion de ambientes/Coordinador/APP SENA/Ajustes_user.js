document.addEventListener('DOMContentLoaded', function() {
    const createUserLink = document.getElementById('settingUserLink');
    const formNewUser = document.querySelector('.container_user_setting');
    const closeFormButton = document.querySelector('.close-form3');
  
    // Muestra el formulario y el overlay
    createUserLink.addEventListener('click', function(event) {
      event.preventDefault();
      formNewUser.style.display = 'block';
      overlay.style.display = 'block';
    });
  
    // Cierra el formulario y el overlay
    closeFormButton.addEventListener('click', function() {
      formNewUser.style.display = 'none';
      overlay.style.display = 'none';
    });
  
    // Cierra el formulario y el overlay si se hace clic en el overlay
    overlay.addEventListener('click', function() {
      formNewUser.style.display = 'none';
      overlay.style.display = 'none';
    });
  
    // Oculta el formulario y el overlay al cargar la página
    formNewUser.style.display = 'none';
    overlay.style.display = 'none';
  });