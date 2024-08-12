const closeFormButton4 = document.querySelector('.close_form4');
const container_ambiente_Setting = document.querySelector('.container_ambiente_setting');

if (closeFormButton4 && container_ambiente_Setting) {
   closeFormButton4.addEventListener('click', function() {
    container_ambiente_Setting.style.display = 'none'; 
    window.location.href = 'Principal.html'; 
  });
}