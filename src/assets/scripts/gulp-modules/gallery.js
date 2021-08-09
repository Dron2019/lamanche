/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-proto */
/* eslint-disable func-names */
/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
const switchItems = document.querySelectorAll('[data-content-type]');

const transitionsOfGallery = {
  video: () => {
    gsap.timeline({ clearProps: 'all' })
      .fromTo('[data-wrapper="photo"] img:nth-child(-n+5)', { y: 0, autoAlpha: 1 }, { y: 20, autoAlpha: 0, stagger: 0.1 })
      .fromTo('[data-wrapper="photo"]', { y: 0, autoAlpha: 1 }, { y: 40, autoAlpha: 0 }, '<+0.5')
      .set('[data-wrapper="photo"]', { display: 'none' }, '<+0.25')
      .set('[data-wrapper="video"]', { display: 'block' }, '<')
      .fromTo('[data-wrapper="video"]', { y: -40, autoAlpha: 0 }, { y: 0, autoAlpha: 1 }, '<')
      .add(() => locoScroll.update());
  },
  photo: () => {
    gsap.timeline({ clearProps: 'all' })
      .fromTo('[data-wrapper="video"]', { y: 0, autoAlpha: 1 }, { y: 40, autoAlpha: 0 })
      .set('[data-wrapper="video"]', { display: 'none' }, '<+0.25')
      .set('[data-wrapper="photo"]', { display: 'block' }, '<')
      .fromTo('[data-wrapper="photo"]', { y: 40, autoAlpha: 0 }, { y: 0, autoAlpha: 1 }, '<')
      .fromTo('[data-wrapper="photo"] img:nth-child(-n+5)', { y: 20, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.1 }, '<')
      .add(() => locoScroll.update());
  },
};
switchItems.forEach((item) => {
  item.addEventListener('click', () => {
    const currentActive = document.querySelector('.active[data-content-type]');
    if (currentActive !== null) {
      currentActive.classList.remove('active');
    }
    item.classList.add('active');
    transitionsOfGallery[item.dataset.contentType]();
  });
});
switchItems[0].click();


function stopIframeVideo(element) {
  element.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
}

function startIframeVideo(element) {
  element.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
}
const galleryBlur = document.querySelector('[data-gallery-blur]');


const navSwiper = new Swiper('[data-gallery-slides-nav]', {
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
const popupSwiper = new Swiper('[data-gallery-popup-slides]', {
  fadeEffect: { crossFade: true },
  // loop: true,
  effect: 'fade',
  virtualTranslate: true,
  initialSlide: 5,
  speed: 800,
  navigation: {
    nextEl: '.detailed-nav-next',
    prevEl: '.detailed-nav-prev',
  },
  on: {
    init: (e) => {
      e.update();
    },
    slideChange: (e) => {
      let src = '';
      if (e.slides[e.realIndex + 1] !== null && e.slides[e.realIndex + 1] !== undefined) {
        src = e.slides[e.realIndex + 1].src;
      } else if (e.slides[e.realIndex] !== undefined) {
        src = e.slides[e.realIndex].src;
      }
      gsap.timeline()
        .to(galleryBlur, { autoAlpha: 0 })
        .set(galleryBlur, { backgroundImage: `url(${src})` })
        .to(galleryBlur, { autoAlpha: 1 });
    },
  },
  thumbs: {
    swiper: navSwiper,
  },
});

popupSwiper.update();
navSwiper.update();

// eslint-disable-next-line no-new
new Popup({
  call: document.querySelectorAll('[data-call-gallery-popup]'),
  close: document.querySelector('[data-detailed-popup-close]'),
  styles: {
    backgroundColor: 'rgba(56, 62, 65, 0.99)',
  },
  afterOpenCb: () => {
    popupSwiper.update();
    navSwiper.update();
  },
  content: document.querySelector('.gallery-photos-popup'),
});

document.querySelectorAll('[data-call-gallery-popup]').forEach((button, index) => {
  button.addEventListener('click', () => {
    popupSwiper.slideTo(index);
  });
});
