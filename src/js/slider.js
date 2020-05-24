import Swiper from 'swiper';

if ($('.swiper-container').length) {
  let slider = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    loop: false,
    freeMode: false,
    spaceBetween: 30,
    speed: 500,
    updateOnWindowResize: true,

    navigation: {
      nextEl: '.swiper-button-next--rec',
      prevEl: '.swiper-button-prev--rec',
    },

    breakpoints: {
      1200: {
        slidesPerView: 2,
        spaceBetween: 20
      },
    }

  });
}
