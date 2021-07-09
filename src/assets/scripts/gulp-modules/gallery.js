/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
const swiper = new Swiper('.mySwiper', {
  slidesPerView: 1.5,
  spaceBetween: 30,
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
      slidesPerView: 1,
      spaceBetween: 30,
    },
    951: {
      slidesPerView: 1.5,
      spaceBetween: 30,
    },
  },
});

swiper.on('afterInit', () => {
  locoScroll.update();
});

const switchItems = document.querySelectorAll('[data-content-type]');
switchItems.forEach((item) => {
  item.addEventListener('click', () => {
    const currentActive = document.querySelector('.active[data-content-type]');
    if (currentActive !== null) {
      currentActive.classList.remove('active');
    }
    console.log(currentActive);
    item.classList.add('active');
  });
});
