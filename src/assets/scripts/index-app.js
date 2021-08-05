import LocomotiveScroll from 'locomotive-scroll';
import i18next from 'i18next';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import axios from 'axios';
import * as yup from 'yup';
import FormMonster from '../../pug/components/form/form';
import SexyInput from '../../pug/components/input/input';
import Popup from '../../pug/components/popup/popup';

/** ******************************* */
/*
 * smooth scroll start
 */
global.gsap = gsap;
global.ScrollTrigger = ScrollTrigger;
global.axios = axios;
global.Popup = Popup;

/* eslint-disable-next-line */
const locoScroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  smoothMobile: false,
  inertia: 1.1,
  lerp: 1,
});

global.locoScroll = locoScroll;
/*
 * smooth scroll end
 */
/** ******************************* */
/** ******************************* */
/*
 * form handlers start
 */
const forms = [
  '[data-home-contact]',
  '[data-popup-form]',
];
const formsWithRedirect = [
  '[data-footer-form]',
];

formsWithRedirect.forEach((form) => {
  const $form = document.querySelector(form);
  if ($form) {
    /* eslint-disable */
    new FormMonster({
      /* eslint-enable */
      elements: {
        $form,
        showSuccessMessage: false,
        successAction: () => { window.location.href = 'message'; },
        $btnSubmit: $form.querySelector('[data-btn-submit]'),
        fields: {
          name: {
            inputWrapper: new SexyInput({ animation: 'none', $field: $form.querySelector('[data-field-name]') }),
            rule: yup.string().required(i18next.t('required')).trim(),
            defaultMessage: i18next.t('name'),
            valid: false,
            error: [],
          },

          phone: {
            inputWrapper: new SexyInput({ animation: 'none', $field: $form.querySelector('[data-field-phone]'), typeInput: 'phone' }),
            rule: yup
              .string()
              .required(i18next.t('required'))
              .min(16, i18next.t('field_too_short', { cnt: 19 - 7 })),

            defaultMessage: i18next.t('phone'),
            valid: false,
            error: [],
          },
        },

      },
    });

    $form.querySelector('.js-mask-absolute').addEventListener('click', () => {
      $form.querySelector('[name="phone"]').focus();
    }, false);
  }
});

forms.forEach((form) => {
  const $form = document.querySelector(form);
  if ($form) {
    /* eslint-disable */
    new FormMonster({
      /* eslint-enable */
      elements: {
        $form,
        showSuccessMessage: false,
        successAction: () => {
          const overlay = $form.querySelector('[data-succes-overlay]');
          overlay.style.opacity = 1;
          overlay.style.pointerEvents = 'all';
        },
        $btnSubmit: $form.querySelector('[data-btn-submit]'),
        fields: {
          name: {
            inputWrapper: new SexyInput({ animation: 'none', $field: $form.querySelector('[data-field-name]') }),
            rule: yup.string().required(i18next.t('required')).trim(),
            defaultMessage: i18next.t('name'),
            valid: false,
            error: [],
          },

          phone: {
            inputWrapper: new SexyInput({ animation: 'none', $field: $form.querySelector('[data-field-phone]'), typeInput: 'phone' }),
            rule: yup
              .string()
              .required(i18next.t('required'))
              .min(17, i18next.t('field_too_short', { cnt: 17 - 5 })),

            defaultMessage: i18next.t('phone'),
            valid: false,
            error: [],
          },
          agreement: {
            inputWrapper: new SexyInput({ animation: 'none', $field: $form.querySelector('[data-field-agree]'), typeInput: 'checkbox' }),
            rule: yup
              .string().nullable().required('Необхідно відмітити згоду'),

            defaultMessage: i18next.t('phone'),
            valid: false,
            error: [],
          },
        },

      },
    });

    $form.querySelector('.js-mask-absolute').addEventListener('click', () => {
      $form.querySelector('[name="phone"]').focus();
    }, false);
  }
});


document.querySelectorAll('[type="checkbox"]').forEach((checkbox) => {
  checkbox.addEventListener('change', () => {
    const chbx = checkbox;
    chbx.value = !!chbx.checked;
  });
});
/*
 * form handlers end
 */
function disableScroll() {
  const containersScroll = document.querySelectorAll('[data-disable-page-scroll]');
  containersScroll.forEach((block) => {
    block.addEventListener('mouseenter', () => {
      locoScroll.stop();
    });
    block.addEventListener('mouseleave', () => {
      locoScroll.start();
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  disableScroll();
  window.locoScroll.update();
});
/** ******************************* */


/** form popup handler */

const popup = document.querySelector('[data-popup-with-form]');
const closePopup = popup.querySelector('[data-popup-close]');
const callFormPopup = document.querySelectorAll('[data-call-popup-form]');
const succesOverlay = popup.querySelector('[data-succes-overlay]');
function closePopupAnimation(popupToAnimate) {
  gsap.timeline()
    .to(popupToAnimate.querySelector('form'), { autoAlpha: 0, y: 100 })
    .set(popupToAnimate, { display: 'none' });
}
closePopup.addEventListener('click', () => {
  closePopupAnimation(popup);
  succesOverlay.style.opacity = 0;
  succesOverlay.style.pointerEvents = 'none';
});

popup.addEventListener('click', (evt) => {
  if (evt.target.dataset.popupWithForm !== undefined) {
    closePopupAnimation(popup);
  }
});
callFormPopup.forEach((el) => {
  el.addEventListener('click', () => {
    gsap.timeline()
      .set(popup, { display: 'flex' })
      .set(popup.querySelector('form'), { autoAlpha: 0, y: -100 })
      .to(popup.querySelector('form'), { autoAlpha: 1, y: 0 });
  });
});
/** form popup handler END */
const options = {
  rootMargin: '0px',
  threshold: 0.1,
};
const lazyImages = document.querySelectorAll('img[data-src]:not(.swiper-lazy)');

lazyImages.forEach((imageArgs) => {
  const image = imageArgs;
  image.style.opacity = 0;
  image.style.transition = ' .3s ease-out';
  image.addEventListener('load', () => {
    image.style.opacity = 1;
  });
  const target = image;
  const observer = new IntersectionObserver((entries) => {
    /* Content excerpted, show below */
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const lazyImage = entry.target;
        lazyImage.src = lazyImage.dataset.src;
        observer.unobserve(target);
      }
    });
  }, options);
  observer.observe(target);
});
const lazyposter = document.querySelectorAll('[data-poster]');

lazyposter.forEach((imageArgs) => {
  const image = imageArgs;
  image.style.opacity = 0;
  image.style.transition = ' .3s ease-out';
  image.addEventListener('load', () => {
    image.style.opacity = 1;
  });
  const callback = (entries) => {
    /* Content excerpted, show below */
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const lazyImage = entry.target;
        lazyImage.poster = lazyImage.dataset.poster;
      }
    });
  };
  const observer = new IntersectionObserver(callback, options);
  const target = image;
  observer.observe(target);
});


const lazyBackgrounds = document.querySelectorAll('[data-background-lazy]');
lazyBackgrounds.forEach((image) => {
  const callback = function (entries, observer) {
    /* Content excerpted, show below */
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const lazyImage = entry.target;
        lazyImage.style.backgroundImage = `url(${lazyImage.dataset.src})`;
        observer.unobserve(lazyImage);
      }
    });
  };
  // eslint-disable-next-line no-undef
  const observer = new IntersectionObserver(callback, options);
  const target = image;
  observer.observe(target);
});

window.addEventListener('DOMContentLoaded', () => {
  locoScroll.update();
});
window.addEventListener('load', () => {
  locoScroll.update();
});

const blockForUpdatingLocoScroll = document.querySelectorAll('.page__content>*:last-child, .footer, .about-block-last, .about-block-last');
blockForUpdatingLocoScroll.forEach((image) => {
  const callback = function (entries, observer) {
    /* Content excerpted, show below */
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        locoScroll.update();
        observer.unobserve(image);
      }
    });
  };
  // eslint-disable-next-line no-undef
  const observer = new IntersectionObserver(callback, options);
  const target = image;
  observer.observe(target);
});


document.querySelectorAll('[data-up]').forEach((arrow) => {
  arrow.addEventListener('click', () => {
    if (locoScroll !== undefined) locoScroll.scrollTo(0, 0);
  });
});
