function togglePassword() {
  const passwordInput = document.getElementById('password');
  const toggleButton = document.querySelector('.togglePassword');

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    toggleButton.textContent = '👁️'; 
    passwordInput.type = 'password';
    toggleButton.textContent = '👁️';
  }
}

let slideIndex = 0;

function showSlides() {
  const slides = document.querySelectorAll('.slide-card');
  slides.forEach(slide => slide.style.display = 'none');
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = 'block';
  setTimeout(showSlides, 10000);
}
showSlides();