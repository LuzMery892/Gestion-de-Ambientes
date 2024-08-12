const closeFormButton3 = document.querySelector('.close_form3');
const containerUserSetting = document.querySelector('.container_user_setting');

if (closeFormButton3 && containerUserSetting) {
  closeFormButton3.addEventListener('click', function() {
    containerUserSetting.style.display = 'none'; // Oculta el contenedor
    window.location.href = 'Principal.html'; // Redirige a Principal.html
  });
}