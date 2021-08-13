/* eslint-disable no-use-before-define */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
/* eslint-disable no-undef */
gsap.registerPlugin(MotionPathPlugin);
function changeScreenWithEffects(toOpenElement, toCloseElement, cb = () => {}) {
  gsap.timeline()
    .set(toOpenElement, { display: '', zIndex: 1 }, '<')
    .to(toCloseElement, {
      scale: 1.05, autoAlpha: 0.5, clearProps: 'all', zIndex: 0,
    }, '<')
    .set(toCloseElement, { display: 'none' })
    .fromTo(toOpenElement, { scale: 1.05, autoAlpha: 0.5 }, { scale: 1, autoAlpha: 1 }, '<-0.5')
    .add(() => {
      locoScroll.update();
      cb();
    });
}

function insertUrlParam(key, value) {
  if (window.history.pushState) {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set(key, value);
    const newurl = `${window.location.protocol}//${window.location.host}${window.location.pathname}?${searchParams.toString()}`;
    window.history.pushState({ path: newurl }, '', newurl);
  }
}

const tl = gsap.timeline({ paused: true })
  .to('#circle1', {
    duration: 5,
    repeat: 0,
    // yoyo: true,
    ease: 'power1.inOut',
    motionPath: {
      path: '#road1',
      align: '#road1',
      // autoRotate: true,
      end: 1,
      alignOrigin: [0.5, 0.5],
    },
  }).to('#circle2', {
    duration: 5,
    repeat: 0,
    // yoyo: true,
    ease: 'power1.inOut',

    motionPath: {
      path: '#road2',
      align: '#road2',
      // autoRotate: true,
      alignOrigin: [0.5, 0.5],
    },
  }, '<').progress(0);


const svg = document.querySelector('[data-motion-svg]');
// locoScroll.destroy();
svg.addEventListener('mouseenter', function () {
  tl.restart();
});


const overlay = document.querySelector('.ms-slider-overlay ');
const slides = document.querySelectorAll('.ms-slide');
const navs = document.querySelectorAll('[data-circle]');
const params = {
  isOnSlider: false,
  isAnimating: false,
  curentIndex: 0,
  url: 'slide',
};

navs.forEach(resetStrokeValue);
navs.forEach((el, index) => {
  el.addEventListener('click', function () {
    simulatePathDrawing(navs[index], 1.5, '5');
    resetStrokeValue(navs[params.curentIndex]);
    changeScreenWithEffects(slides[index], slides[params.curentIndex], () => {
      params.curentIndex = index;
      params.isAnimating = false;
      insertUrlParam(params.url, index);
    });
  });
});
gsap.set('.ms-slide:not(:first-child)', { display: 'none' });

window.addEventListener('load', function () {
  const urlString = window.location.href;
  const url = new URL(urlString);
  const c = +url.searchParams.get(params.url);
  if (typeof c === 'number' && slides[c] !== undefined) {
    changeScreenWithEffects(
      slides[c],
      slides[0],
      () => {
        params.curentIndex = c;
        params.isAnimating = false;
        insertUrlParam(params.url, c);
      },
    );
  }
});
overlay.addEventListener('mouseenter', function () {
  locoScroll.stop();
  params.isOnSlider = true;
});
overlay.addEventListener('mouseleave', function () {
  locoScroll.start();
  params.isOnSlider = false;
});
window.addEventListener('wheel', function (evt) {
  if (params.isOnSlider && params.isAnimating === false) {
    evt.preventDefault();
    params.isAnimating = true;
    const direction = evt.deltaY > 0 ? 1 : -1;
    let nextIndex = params.curentIndex + direction;
    if (params.curentIndex === slides.length - 1 && direction > 0) {
      nextIndex = 0;
    } else if (params.curentIndex === 0 && direction < 0) {
      nextIndex = slides.length - 1;
    }
    simulatePathDrawing(navs[nextIndex], 1.5, '5');
    resetStrokeValue(navs[params.curentIndex]);
    changeScreenWithEffects(
      slides[nextIndex],
      slides[params.curentIndex],
      () => {
        params.curentIndex = nextIndex;
        params.isAnimating = false;
        insertUrlParam(params.url, nextIndex);
      },
    );
  }
}, true);


// gsap.defaults({ duration: 1 });

function simulatePathDrawing(pathArgs, strokeWidth = '3', duration = '1.5') {
  const path = pathArgs;
  // if (path.done) return;
  // var path = document.querySelector('.squiggle-animated path');
  const length = path.getTotalLength();
  // Clear any previous transition
  // eslint-disable-next-line no-multi-assign
  path.style.transition = path.style.WebkitTransition = 'none';
  // Set up the starting positions
  path.style.strokeDasharray = `${length} ${length}`;
  path.style.strokeDashoffset = length;
  // Trigger a layout so styles are calculated & the browser
  // picks up the starting position before animating
  path.getBoundingClientRect();
  // Define our transition
  // eslint-disable-next-line no-multi-assign
  path.style.transition = path.style.WebkitTransition = `stroke-dashoffset ${duration}s ease-in-out`;
  // Go!
  path.style.strokeDashoffset = '0';
  path.style.strokeWidth = strokeWidth;
  // path.style.stroke = '#F7F7F7';
  // path.done = true;
}

function resetStrokeValue(pathArgs) {
  const path = pathArgs;
  const length = path.getTotalLength();
  // Clear any previous transition
  // eslint-disable-next-line no-multi-assign
  path.style.transition = path.style.WebkitTransition = 'none';
  // Set up the starting positions
  path.style.strokeDasharray = `${length} ${length}`;
  path.style.strokeDashoffset = length;
}
