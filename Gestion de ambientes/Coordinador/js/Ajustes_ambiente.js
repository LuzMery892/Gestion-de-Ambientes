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