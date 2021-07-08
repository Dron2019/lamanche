/* eslint-disable no-undef */
const menu = document.querySelector('[data-menu]');
const callMenu = document.querySelector('[data-menu-call]');
const classNameForVisibility = 'opened';
const htmlEl = document.documentElement;
callMenu.addEventListener('click', () => {
  menu.classList.toggle(classNameForVisibility);
  callMenu.querySelector('svg').dispatchEvent(new Event('click'));
  htmlEl.classList.toggle('menu-open');
});

// locoScroll.scrollTo(document.querySelector('.footer'));
