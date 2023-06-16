const sliderImages = document.querySelector('.slider-images');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let slideIndex = 0;

function showSlide(n) {
  slideIndex = n;
  if (slideIndex < 0) {
    slideIndex = 2;
  } else if (slideIndex > 2) {
    slideIndex = 0;
  }
  sliderImages.style.transform = `translateX(-${slideIndex * 100}%)`;
}

showSlide(slideIndex);

prevButton.addEventListener('click', () => {
  showSlide(slideIndex - 1);
});

nextButton.addEventListener('click', () => {
  showSlide(slideIndex + 1);
});
