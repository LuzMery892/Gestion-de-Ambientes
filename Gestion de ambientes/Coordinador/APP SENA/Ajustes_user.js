document.addEventListener('DOMContentLoaded', () => {
    // Obtener referencias a los elementos
    const closeButton3 = document.querySelector('.close-form3');
    const containerUserSetting = document.querySelector('.container_user_setting');
    const openButton3 = document.getElementById('SettingUserLink');
  
    // Función para mostrar el formulario
    const showForm = () => {
      containerUserSetting.style.display = 'block';
    };
  
    // Función para ocultar el formulario
    const hideForm = () => {
      containerUserSetting.style.display = 'none';
    };
  
    // Manejar clic en el botón de cierre
    if (closeButton3) {
      closeButton3.addEventListener('click', () => {
        hideForm();
      });
    }
  
    // Manejar clic en el enlace para abrir el formulario
    if (openButton3) {
      openButton3.addEventListener('click', (event) => {
        event.preventDefault(); 
        showForm();
      });
    }
  });