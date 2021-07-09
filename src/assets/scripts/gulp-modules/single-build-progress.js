/* eslint-disable no-undef */
/* eslint-disable no-new */

// eslint-disable-next-line no-undef
const swiper = new Swiper('.mySwiper', {
  slidesPerView: 1.5,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    576: {
      slidesPerView: 1.5,
      spaceBetween: 30,
    },
  },
});

swiper.on('afterInit', () => {
  locoScroll.update();
});
