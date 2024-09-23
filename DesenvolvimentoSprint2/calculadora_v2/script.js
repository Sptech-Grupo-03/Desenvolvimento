let currentSlide = 0;
const slides = document.querySelectorAll('.item');
const totalSlides = slides.length;
const carousel = document.querySelector('.carousel');

document.getElementById('next').addEventListener('click', () => {
  currentSlide++;
  if (currentSlide >= totalSlides) {
    currentSlide = 0; // Volta para o início
  }
  const offset = -currentSlide * 300; // Move 300px para o lado
  carousel.style.transform = `translateX(${offset}px)`;
});
