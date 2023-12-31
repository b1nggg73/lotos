const sliderImages = document.querySelector('.slider-images');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const aPopularAnime = document.querySelector('.main__popular-anime-play-a');
let n = 0;
let slideIndex = 0;

let intervalSlider = setInterval(sliderAuto, 10000);
function sliderAuto() {
  slideIndex = n;
  if (slideIndex < 0) {
    slideIndex = 2;
  } else if (slideIndex > 2) {
    slideIndex = 0;
  }
  sliderImages.style.transform = `translateX(-${slideIndex * 100}%)`;
  n++;
  if (n >= 3) {
    n = 0;
  }
}

function showSlide(n) {
  slideIndex = n;
  if (slideIndex < 0) {
    slideIndex = 2;
  } else if (slideIndex > 2) {
    slideIndex = 0;
  }
  sliderImages.style.transform = `translateX(-${slideIndex * 100}%)`;
  if (sliderImages.style.transform == 'translateX(0%)') {
    aPopularAnime.href = 'https://jut.su/oneepiece/episode-1.html';
  }
  if (sliderImages.style.transform == 'translateX(-100%)') {
    aPopularAnime.href = 'https://jut.su/bleeach/season-1/episode-1.html';
  }
  if (sliderImages.style.transform == 'translateX(-200%)') {
    aPopularAnime.href = 'https://jut.su/vinland-saga/season-1/episode-1.html';
  }
}

showSlide(slideIndex);

prevButton.addEventListener('click', () => {
  clearInterval(intervalSlider);
  intervalSlider = setInterval(sliderAuto, 10000);
  showSlide(slideIndex - 1);
});

nextButton.addEventListener('click', () => {
  clearInterval(intervalSlider);
  intervalSlider = setInterval(sliderAuto, 10000);
  showSlide(slideIndex + 1);
});
