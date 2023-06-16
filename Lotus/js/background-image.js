const wrapper = document.getElementById('wrapper');
const sliders = document.querySelectorAll('#sliders');
const nameAnime = document.querySelector('.main__name-anime');
const yearAnime = document.querySelector('.main__anime-year');
const ageAnime = document.querySelector('.main__anime-age-rating');
const seasonsAnime = document.querySelector('.main__anime-seasons');
const descriptionAnime = document.querySelector('.main__new-anime-description');
const ratingNewAnime = document.querySelector('.main__new-anime-rating');
const hrefAnime = document.querySelector('.main__a-button-new-anime-trailer');
const time = 10000;
function animeChange() {
  const slider = sliders[i];
  if (i == 0) {
    nameAnime.textContent = 'Клинок, рассекающий демонов';
    yearAnime.textContent = '2020';
    ageAnime.textContent = '18+';
    seasonsAnime.textContent = '4 СЕЗОНА';
    descriptionAnime.textContent =
      'Фэнтезийный мир наполнен жуткими тварями и разными опасностями, с которыми придётся повстречаться храброму Танджиро. Если смотреть аниме "Kimetsu no Yaiba" можно узнать, сможет ли юноша помочь сестре избавиться от проклятия, а также отыскать убийц семьи.';
    ratingNewAnime.textContent = '18+';
    hrefAnime.href = 'https://www.youtube.com/watch?v=V_QjFOzPrYo';
  }
  if (i == 1) {
    nameAnime.textContent = 'Адский рай';
    yearAnime.textContent = '2023';
    ageAnime.textContent = '18+';
    seasonsAnime.textContent = '1 СЕЗОН';
    descriptionAnime.textContent =
      'Захватывающие приключения с массой виртуозных и кровавых сражений можно увидеть в аниме “Jigokuraku”. Оказалось, что Сагири является лучшим палачом, а Габимару вовсе не желает смерти, ведь он хранит страшную тайну в глубине души.';
    ratingNewAnime.textContent = '18+';
    hrefAnime.href = 'https://www.youtube.com/watch?v=RCbNlP-_v0A';
  }
  if (i == 2) {
    nameAnime.textContent = 'Человек-бензопила';
    yearAnime.textContent = '2022';
    ageAnime.textContent = '18+';
    seasonsAnime.textContent = '1 СЕЗОН';
    descriptionAnime.textContent =
      'Кровавые сражения с использованием демонической силы можно увидеть в аниме "Chainsaw Man". Дэндзи превратился в человека-бензопилу, а также обрёл неимоверную силу.';
    ratingNewAnime.textContent = '18+';
    hrefAnime.href = 'https://www.youtube.com/watch?v=kz6Pm3L9p_I';
  }
  if (i == 3) {
    nameAnime.textContent = 'Ванпанчмен';
    yearAnime.textContent = '2015';
    ageAnime.textContent = '18+';
    seasonsAnime.textContent = '2 СЕЗОНА';
    descriptionAnime.textContent =
      '«One-Punch Man» побил все рекорды популярности в 2015 году, на полноправной основе став главным хитом года и заслужив признание поклонников аниме по всему миру за счёт головокружительной проработки боевых сцен и, разумеется, хорошего юмора.';
    ratingNewAnime.textContent = '18+';
    hrefAnime.href = 'https://www.youtube.com/watch?v=RPXWGV480FQ';
  }
  wrapper.style.backgroundImage =
    "url('file:///C:/FrontEnd/Lotus/img/background-image" + i + ".jpg')";
  let sliderActive = document.querySelector('.main__sliders-active');
  sliderActive.classList.remove('main__sliders-active');
  sliderActive.classList.add('main__sliders-noneactive');
  slider.classList.add('main__sliders-active');
  slider.classList.remove('main__sliders-noneactive');
  i++;
  if (i >= sliders.length) {
    i = 0;
  }
}
let intervalId = setInterval(animeChange, time);

for (let i = 0; i < sliders.length; i++) {
  const slider = sliders[i];
  slider.addEventListener('click', function () {
    wrapper.style.backgroundImage =
      "url('file:///C:/FrontEnd/Lotus/img/background-image" + i + ".jpg')";
    clearInterval(intervalId);
    intervalId = setInterval(animeChange, time);

    let sliderActive = document.querySelector('.main__sliders-active');
    sliderActive.classList.remove('main__sliders-active');
    sliderActive.classList.add('main__sliders-noneactive');
    slider.classList.add('main__sliders-active');
    slider.classList.remove('main__sliders-noneactive');
    if (i == 0) {
      nameAnime.textContent = 'Клинок, рассекающий демонов';
      yearAnime.textContent = '2020';
      ageAnime.textContent = '18+';
      seasonsAnime.textContent = '4 СЕЗОНА';
      descriptionAnime.textContent =
        'Фэнтезийный мир наполнен жуткими тварями и разными опасностями, с которыми придётся повстречаться храброму Танджиро. Если смотреть аниме "Kimetsu no Yaiba" можно узнать, сможет ли юноша помочь сестре избавиться от проклятия, а также отыскать убийц семьи.';
      ratingNewAnime.textContent = '18+';
      hrefAnime.href = 'https://www.youtube.com/watch?v=V_QjFOzPrYo';
    }
    if (i == 1) {
      nameAnime.textContent = 'Адский рай';
      yearAnime.textContent = '2023';
      ageAnime.textContent = '18+';
      seasonsAnime.textContent = '1 СЕЗОН';
      descriptionAnime.textContent =
        'Захватывающие приключения с массой виртуозных и кровавых сражений можно увидеть в аниме “Jigokuraku”. Оказалось, что Сагири является лучшим палачом, а Габимару вовсе не желает смерти, ведь он хранит страшную тайну в глубине души.';
      ratingNewAnime.textContent = '18+';
      hrefAnime.href = 'https://www.youtube.com/watch?v=RCbNlP-_v0A';
    }
    if (i == 2) {
      nameAnime.textContent = 'Человек-бензопила';
      yearAnime.textContent = '2022';
      ageAnime.textContent = '18+';
      seasonsAnime.textContent = '1 СЕЗОН';
      descriptionAnime.textContent =
        'Кровавые сражения с использованием демонической силы можно увидеть в аниме "Chainsaw Man". Дэндзи превратился в человека-бензопилу, а также обрёл неимоверную силу.';
      ratingNewAnime.textContent = '18+';
      hrefAnime.href = 'https://www.youtube.com/watch?v=kz6Pm3L9p_I';
    }
    if (i == 3) {
      nameAnime.textContent = 'Ванпанчмен';
      yearAnime.textContent = '2015';
      ageAnime.textContent = '18+';
      seasonsAnime.textContent = '2 СЕЗОНА';
      descriptionAnime.textContent =
        '«One-Punch Man» побил все рекорды популярности в 2015 году, на полноправной основе став главным хитом года и заслужив признание поклонников аниме по всему миру за счёт головокружительной проработки боевых сцен и, разумеется, хорошего юмора.';
      ratingNewAnime.textContent = '18+';
      hrefAnime.href = 'https://www.youtube.com/watch?v=RPXWGV480FQ';
    }
  });
}

let i = 0;
