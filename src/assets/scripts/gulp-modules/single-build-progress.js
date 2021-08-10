/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-use-before-define */
/* eslint-disable func-names */
/* eslint-disable no-proto */
/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
/* eslint-disable no-new */

// eslint-disable-next-line no-undef
// const swiper1 = new Swiper('.mySwiper', {
//   slidesPerView: 1.5,
//   spaceBetween: 30,
//   loop: false,
//   freeMode: true,
//   centeredSlides: true,
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   breakpoints: {
//     // when window width is >= 320px
//     320: {
//       slidesPerView: 1,
//       spaceBetween: 20,
//     },
//     // when window width is >= 480px
//     576: {
//       slidesPerView: 1.5,
//       spaceBetween: 30,
//     },
//   },
// });

// locoScroll.destroy();
// setTimeout(() => {
//   document.querySelector('.page__inner').style.transform = '';
// }, 3000);

// swiper1.on('afterInit', () => {
//   locoScroll.update();
// });

/** СТрелка переключатель в зависимости от положения на єкране */

// function sideSwitchArrow(swiper, arrow, container) {
//   const mediumCordValue = document.documentElement.clientWidth / 2;
//   document.body.append(arrow);
//   container.style.cursor = 'none';
//   arrow.style.cursor = 'none';
//   arrow.style.zIndex = 10;
//   arrow.__proto__.hide = function () {
//     this.style.opacity = '0';
//     this.style.pointerEvents = 'none';
//   };
//   arrow.__proto__.show = function () {
//     this.style.opacity = '1';
//     // this.style.pointerEvents = 'auto';
//   };
//   arrow.dataset.side = 'leftSide';


//   container.addEventListener('mousemove', desktopNavButtonHandler);
//   container.addEventListener('mouseenter', () => {
//     arrow.show();
//   });
//   container.addEventListener('mouseleave', () => {
//     arrow.hide();
//   });
//   if (document.documentElement.clientWidth < 769) {
//     window.removeEventListener('mousemove', desktopNavButtonHandler);
//     arrow.remove();
//   }

//   /** Записывает координаты обьекта, на котором нужно скрыть стрелку переключения слайдера */
//   /** ms ---> main-screen */


//   function desktopNavButtonHandler(evt) {
//     // arrow.style.position = 'fixed';
//     arrow.style.left = `${evt.clientX - 18}px`;
//     arrow.style.top = `${evt.clientY - 18}px`;

//     getCursorSide(evt.clientX);
//     handleArrowVisibility(evt);
//   }


//   function handleArrowVisibility() {
//   }

//   function getCursorSide(x) {
//     if (x < (mediumCordValue)) {
//       arrow.classList.add('left-side');
//       arrow.dataset.side = 'leftSide';
//       // switchGallerySlide('leftSide');
//     } else {
//       arrow.classList.remove('left-side');
//       arrow.dataset.side = 'rightSide';
//       // switchGallerySlide('rightSide')
//     }
//   }
//   function changeMe() {
//     switchGallerySlide(arrow.dataset.side);
//   }
//   container.addEventListener('click', changeMe);
//   if (document.documentElement.clientWidth < 576) {
//     container.removeEventListener('click', changeMe);
//   }
//   const navigate = {
//     leftSide: () => {
//       swiper.slidePrev();
//     },
//     rightSide: () => {
//       swiper.slideNext();
//     },
//   };

//   function switchGallerySlide(side) {
//     navigate[side]();
//     return navigate.side;
//   }


//   // eslint-disable-next-line no-unused-vars
// }
// sideSwitchArrow(
//   swiper1,
//   document.querySelector('.moving-arrow'),
//   document.querySelector('.slider-wrap'),
// );
/** СТрелка переключатель в зависимости от положения на єкране END */

const webCameraCallPopup = document.querySelectorAll('[data-build-camera-popup]');
const webCameraPopup = document.querySelector('[data-build-cam-popup]');
const webCamClose = webCameraPopup.querySelector('[data-popup-close]');
document.body.append(webCameraPopup);
function closePopup(evt) {
  if (evt.target.classList.contains('web-camera-popup-wrapper')) {
    evt.preventDefault();
    locoScroll.start();
    gsap.timeline({
      clearProps: 'all',
    }).set(webCameraPopup, { pointerEvents: 'none' })
      .to(webCameraPopup.querySelector('.web-camera-popup'), { autoAlpha: 0, y: 100, clearProps: 'all' })
      .set(webCameraPopup.querySelector('.web-camera-popup'), { autoAlpha: 0, clearProps: 'all' })
      .set(webCameraPopup, { autoAlpha: 0, y: 0, clearProps: 'all' });
  }
}
webCameraPopup.addEventListener('click', closePopup);
webCameraCallPopup.forEach((el) => {
  el.addEventListener('click', (evt) => {
    evt.preventDefault();
    locoScroll.stop();
    gsap.timeline({
      clearProps: 'all',
    }).set(webCameraPopup, { autoAlpha: 1, pointerEvents: 'all' })
      .to(webCameraPopup, { autoAlpha: 1 })
      .from(webCameraPopup.querySelector('.web-camera-popup'), { autoAlpha: 0, y: -100 }, '<')
      .set(webCameraPopup.querySelector('.web-camera-popup'), { autoAlpha: 1, y: 0, clearProps: 'all' });
  });
});

webCamClose.addEventListener('click', (evt) => {
  evt.preventDefault();
  locoScroll.start();
  gsap.timeline({
    clearProps: 'all',
  }).set(webCameraPopup, { pointerEvents: 'none' })
    .to(webCameraPopup.querySelector('.web-camera-popup'), { autoAlpha: 0, y: 100, clearProps: 'all' })
    .set(webCameraPopup.querySelector('.web-camera-popup'), { autoAlpha: 0, clearProps: 'all' })
    .set(webCameraPopup, { autoAlpha: 0, y: 0, clearProps: 'all' });
});


const navSwiper = new Swiper('[data-build-slides-nav]', {
  slidesPerView: 2,
  spaceBetween: 20,
  slideToClickedSlide: true,
  breakpoints: {
    // when window width is >= 320px
    576: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
  },
});
const popupSwiper = new Swiper('[data-build-popup-slides]', {
  // effect: 'fade',
  // loop: true,
  speed: 1200,
  navigation: {
    nextEl: '.detailed-nav-next',
    prevEl: '.detailed-nav-prev',
  },
  thumbs: {
    swiper: navSwiper,
  },
});

popupSwiper.update();
navSwiper.update();


const singleBuildGalleriePopup = new Popup({
  call: document.querySelectorAll('[data-call-build-popup]'),
  close: document.querySelector('[data-detailed-popup-close]'),
  styles: {
    backgroundColor: 'rgba(56, 62, 65, 0.99)',
  },
  afterOpenCb: () => {
    popupSwiper.update();
    navSwiper.update();
  },
  content: document.querySelector('.detailed-photos-popup'),
});

document.querySelectorAll('[data-call-build-popup]').forEach((button, index) => {
  button.addEventListener('click', () => {
    popupSwiper.slideTo(index);
  });
});

/** Закрытие попапа по свайпу */
class SwipeHandler {
  constructor(props) {
    this.x = props.x || 0;
    this.y = props.y || 0;
    this.startY = props.startY || 0;
    this.swipedDistanceY = props.swipedDistanceY || 0;
  }

  get distance() {
    return this.y - this.startY;
  }
}
/**
*
* @param {string} selector - Селектор попапа
* @description Need {@link https://greensock.com/ GreenSock} for work
*
*/
function closePopupOnSwipe(selector) {
  const popup = document.querySelector(selector);
  if (popup === null) {
    console.warn(`
      Cannot initialize "${selector}" of null
    `);
    return;
  }
  const distanceToClose = 125;

  const cords = new SwipeHandler({});
  popup.addEventListener('touchstart', function (evt) {
    cords.startY = evt.targetTouches[0].screenY;
    cords.y = evt.targetTouches[0].screenY;
  });
  popup.addEventListener('touchmove', function (evt) {
    evt.preventDefault();
    cords.y = evt.targetTouches[0].screenY;
    if ((cords.distance) > 30) {
      gsap.to(popup, {
        y: cords.distance,
        autoAlpha: 1.5 - ((cords.distance) / 100),
      });
    }
  });
  popup.addEventListener('touchend', function () {
    if ((cords.distance) > distanceToClose) {
      gsap.to(popup, { autoAlpha: 0, y: 0 });
    } else {
      gsap.to(popup, { y: 0, autoAlpha: 1 });
    }
  });
}
/** Закрытие попапа по свайпу END */
closePopupOnSwipe('[data-build-cam-popup]');
closePopupOnSwipe(`.${singleBuildGalleriePopup.uniqueClass}`);
