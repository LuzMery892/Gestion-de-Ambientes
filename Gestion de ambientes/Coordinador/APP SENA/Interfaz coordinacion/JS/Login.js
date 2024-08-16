function togglePassword() {
  const passwordInput = document.getElementById('password');
  const toggleButton = document.querySelector('.toggle-password');

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    toggleButton.textContent = '👁️'; 
    passwordInput.type = 'password';
    toggleButton.textContent = '👁️';
  }
}