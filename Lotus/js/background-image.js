const wrapper = document.getElementById('wrapper');
const sliders = document.querySelectorAll('#sliders');

for (let i = 0; i < sliders.length; i++) {
  const slider = sliders[i];

  slider.addEventListener('click', function () {
    wrapper.style.backgroundImage =
      "url('file:///C:/FrontEnd/Lotus/img/background-image" + i + ".jpg')";
    let sliderActive = document.querySelector('.main__sliders-active');
    sliderActive.classList.remove('main__sliders-active');
    sliderActive.classList.add('main__sliders-noneactive');
    slider.classList.add('main__sliders-active');
    slider.classList.remove('main__sliders-noneactive');
  });
}
