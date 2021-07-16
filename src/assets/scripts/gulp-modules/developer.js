/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const swiper = new Swiper('.mySwiper', {
  slidesPerView: 6,
  spaceBetween: 56,
  autoplay: true,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    350: {
      slidesPerView: 2,
    },
    // when window width is >= 480px
    576: {
      slidesPerView: 3,
    },
    // when window width is >= 640px
    950: {
      slidesPerView: 4,
    },
    1100: {
      slidesPerView: 6,
    },
  },
});
