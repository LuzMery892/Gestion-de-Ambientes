const closeFormButton4 = document.querySelector('.close_form5');
const container_ambiente_Setting = document.querySelector('.container_ambiente_setting');

if (closeFormButton4 && container_ambiente_Setting) {
   closeFormButton4.addEventListener('click', function() {
    container_ambiente_Setting.style.display = 'none'; 
    window.location.href = 'coordinadorDashboard.html'; 
  });
}


// Función para seleccionar o deseleccionar todas las filas
function toggleSelectAll(source) {
  const checkboxes = document.querySelectorAll('.rowSelect_amb');
  checkboxes.forEach(checkbox => checkbox.checked = source.checked);
}



document.getElementById('centro').addEventListener('change', function() {
  searchEnvironment();
});

function searchEnvironment() {
  var centro = document.getElementById('centro').value;
  var searchName = document.getElementById('searchName').value;
  // Aquí deberías añadir la lógica para filtrar y actualizar la tabla con base en `centro` y `searchName`.
  // Por ejemplo, puedes hacer una llamada a un API o filtrar datos locales.
  console.log('Buscando ambiente para la sede: ' + centro + ' y nombre: ' + searchName);
}