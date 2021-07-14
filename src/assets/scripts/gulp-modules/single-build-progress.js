/* eslint-disable no-use-before-define */
/* eslint-disable func-names */
/* eslint-disable no-proto */
/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
/* eslint-disable no-new */

// eslint-disable-next-line no-undef
const swiper1 = new Swiper('.mySwiper', {
  slidesPerView: 1.5,
  spaceBetween: 30,
  loop: false,
  freeMode: true,
  centeredSlides: true,
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

locoScroll.destroy();
setTimeout(() => {
  document.querySelector('.page__inner').style.transform = '';
}, 3000);

swiper1.on('afterInit', () => {
  locoScroll.update();
});

/** СТрелка переключатель в зависимости от положения на єкране */

function sideSwitchArrow(swiper, arrow, container) {
  const mediumCordValue = document.documentElement.clientWidth / 2;

  container.style.cursor = 'none';
  arrow.style.cursor = 'none';
  arrow.style.zIndex = 10;
  arrow.__proto__.hide = function () {
    this.style.opacity = '0';
    this.style.pointerEvents = 'none';
  };
  arrow.__proto__.show = function () {
    this.style.opacity = '1';
    this.style.pointerEvents = 'auto';
  };
  arrow.dataset.side = 'leftSide';


  container.addEventListener('mousemove', desktopNavButtonHandler);
  container.addEventListener('mouseenter', () => {
    arrow.show();
  });
  container.addEventListener('mouseleave', () => {
    arrow.hide();
  });
  if (document.documentElement.clientWidth < 769) {
    window.removeEventListener('mousemove', desktopNavButtonHandler);
    arrow.remove();
  }

  /** Записывает координаты обьекта, на котором нужно скрыть стрелку переключения слайдера */
  /** ms ---> main-screen */


  function desktopNavButtonHandler(evt) {
    // arrow.style.position = 'fixed';
    arrow.style.left = `${evt.clientX - 18}px`;
    arrow.style.top = `${evt.clientY - 18}px`;

    getCursorSide(evt.clientX);
    handleArrowVisibility(evt);
  }


  function handleArrowVisibility() {
  }

  function getCursorSide(x) {
    if (x < (mediumCordValue)) {
      arrow.classList.add('left-side');
      arrow.dataset.side = 'leftSide';
      // switchGallerySlide('leftSide');
    } else {
      arrow.classList.remove('left-side');
      arrow.dataset.side = 'rightSide';
      // switchGallerySlide('rightSide')
    }
  }
  arrow.addEventListener('click', () => {
    switchGallerySlide(arrow.dataset.side);
  });

  const navigate = {
    leftSide: () => {
      swiper.slidePrev();
    },
    rightSide: () => {
      swiper.slideNext();
    },
  };

  function switchGallerySlide(side) {
    navigate[side]();
    return navigate.side;
  }


  // eslint-disable-next-line no-unused-vars
}
sideSwitchArrow(
  swiper1,
  document.querySelector('.moving-arrow'),
  document.querySelector('.slider-wrap'),
);
/** СТрелка переключатель в зависимости от положения на єкране END */
