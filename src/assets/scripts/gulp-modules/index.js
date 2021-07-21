/* eslint-disable no-undef */
function menuOpenAnimation(menu, callMenu) {
  const menuEasing = new BezierEasing(0.27, 0, 0, 1);
  return gsap.timeline({ paused: true }).timeScale(1.4)
    .set(callMenu, { pointerEvents: 'none', cursor: 'no-drop' })
    .fromTo('.menu__right', { autoAlpha: 0, x: '20%' }, { autoAlpha: 1, x: 0, duration: 1.1 })
    .fromTo('.menu__left', { autoAlpha: 0, x: '-20%' }, { autoAlpha: 1, x: 0, duration: 1.1 }, '<')
    .fromTo(menu.querySelectorAll('.menu__big-links li'),
      { autoAlpha: 0, x: 20 },
      {
        autoAlpha: 1,
        x: 0,
        stagger: 0.1,
        ease: menuEasing,
        duration: 1.1,
      }, '<')
    .fromTo(menu.querySelectorAll('.menu__small-links li'),
      { autoAlpha: 0, x: 20 },
      {
        autoAlpha: 1,
        x: 0,
        stagger: 0.1,
        ease: menuEasing,
        duration: 1.1,
      }, '<')
    .fromTo('[mask="url(#mask0)"]', { autoAlpha: 0 }, { autoAlpha: 1, duration: 1 }, '<+0.5')
    .set(callMenu, { pointerEvents: 'all', cursor: '' });
}

function menuCloseAnimation(menu, callMenu) {
  const menuEasing = new BezierEasing(0.27, 0, 0, 1);
  menu.classList.add('opened');
  return gsap.timeline({ paused: true }).timeScale(2)
    .set(callMenu, { pointerEvents: 'none', cursor: 'no-drop' })
    .fromTo('[mask="url(#mask0)"]', { autoAlpha: 1 }, { autoAlpha: 0, duration: 1 })
    .fromTo(menu.querySelectorAll('.menu__big-links li'),
      {
        autoAlpha: 1,
        x: 0,
      },
      {
        autoAlpha: 0,
        x: 20,
        stagger: 0.1,
        ease: menuEasing,
        duration: 1.1,
      }, '<')
    .fromTo(menu.querySelectorAll('.menu__small-links li'),
      {
        autoAlpha: 1,
        x: 0,
      },
      {
        autoAlpha: 0,
        x: 20,
        stagger: 0.1,
        ease: menuEasing,
        duration: 1.1,
      }, '<')
    .fromTo('.menu__right', { autoAlpha: 1, x: 0 }, { autoAlpha: 0, x: '20%', duration: 1.1 }, '<')
    .fromTo('.menu__left', { autoAlpha: 1, x: 0 }, { autoAlpha: 0, x: '-20%', duration: 1.1 }, '<')
    .add(() => menu.classList.remove('opened'))
    .set(callMenu, { pointerEvents: 'all', cursor: '' });
}

const menu = document.querySelector('[data-menu]');
const callMenu = document.querySelector('[data-menu-call]');
const classNameForVisibility = 'opened';
const htmlEl = document.documentElement;
callMenu.addEventListener('click', () => {
  menu.classList.toggle(classNameForVisibility);
  callMenu.querySelector('svg').dispatchEvent(new Event('click'));
  htmlEl.classList.toggle('menu-open');
  if (menu.classList.contains(classNameForVisibility)) {
    menuOpenAnimation(menu, callMenu).play();
  } else {
    menuCloseAnimation(menu, callMenu).play();
  }
});

// locoScroll.scrollTo(document.querySelector('.footer'));
