/* eslint-disable no-undef */

function slider(container) {
  const nav = container.querySelector('.slider-nav');
  const currentNum = container.querySelector('.current');
  const allNum = container.querySelector('.all');
  const prevArrow = nav.querySelector('svg:first-child');
  const nextArrow = nav.querySelector('svg:last-child');
  const $slides = container.querySelectorAll('img');
  const transitionEasing = new BezierEasing(0, 0.84, 0.43, 1);
  const transitionSpeed = 2;
  let currentIndex = 0;
  let nextIndex = 0;
  allNum.textContent = $slides.length;
  function animateSlidesForward(current, next) {
    gsap.set(next, { webkitClipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)' });
    gsap.timeline({})
      .set(nav, { pointerEvents: 'none' })
      .set(current, { zIndex: 3 })
      .set(next, { zIndex: 4 })
      .to(next, { webkitClipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', ease: transitionEasing, duration: transitionSpeed })
      .set(nav, { pointerEvents: 'all' })
      .set(current, { zIndex: 2 });
  }
  function animateSlidesBackward(current, next) {
    gsap.set(next, { webkitClipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' });
    gsap.timeline({})
      .set(nav, { pointerEvents: 'none' })
      .set(current, { zIndex: 3 })
      .set(next, { zIndex: 4 })
      .to(next, { webkitClipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', ease: transitionEasing, duration: transitionSpeed })
      .set(nav, { pointerEvents: 'all' })
      .set(current, { zIndex: 2 });
  }

  function setCurrentIndexView(index) {
    const toView = index < 10 ? `0${index.toString()}` : index;
    currentNum.textContent = toView;
  }
  nextArrow.addEventListener('click', () => {
    if (nextIndex !== ($slides.length - 1)) {
      nextIndex += 1;
    } else {
      nextIndex = 0;
    }
    animateSlidesForward($slides[currentIndex], $slides[nextIndex]);
    setCurrentIndexView(nextIndex + 1);
    currentIndex = nextIndex;
  });
  prevArrow.addEventListener('click', () => {
    nextIndex = (nextIndex === 0) ? $slides.length - 1 : nextIndex - 1;
    animateSlidesBackward($slides[currentIndex], $slides[nextIndex]);
    setCurrentIndexView(nextIndex + 1);
    currentIndex = nextIndex;
  });
}

slider(document.querySelector('[data-slider]'));
