function togglePassword() {
  const passwordInput = document.getElementById('password');
  const toggleButton = document.querySelector('.toggle-password');

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    toggleButton.textContent = '👁️'; // Cambia el icono a uno que indica que la contraseña está visible
  } else {
    passwordInput.type = 'password';
    toggleButton.textContent = '👁️'; // Cambia el icono a uno que indica que la contraseña está oculta
  }
}