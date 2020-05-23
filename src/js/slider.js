import Swiper from 'swiper';

if ($('.swiper-container').length) {
  let slider = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    loop: false,
    freeMode: true,
    spaceBetween: 30,
    speed: 500,
    updateOnWindowResize: true,

    navigation: {
      nextEl: 'swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      1200: {
        slidesPerView: 2,
      },
    }

  });
}
