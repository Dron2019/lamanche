/* eslint-disable no-undef */
@@include('../libs/hammer/hammer.js')

function slider(container) {
  const nav = container.querySelector('.slider-nav');
  const currentNum = container.querySelector('.current');
  const allNum = container.querySelector('.all');
  const prevArrow = nav.querySelector('svg:first-child');
  const nextArrow = nav.querySelector('svg:last-child');
  const $slides = container.querySelectorAll('img');
  const transitionEasing = new BezierEasing(0.26, 0.81, 0.43, 1);
  const transitionSpeed = 1.75;
  let currentIndex = 0;
  let nextIndex = 0;
  const hammer = new Hammer(container, {

  });
  hammer.on('swipeleft', (ev) => {
    console.log(ev);
    indexIncrement();
    animateSlidesForward($slides[currentIndex], $slides[nextIndex]);
    currentIndex = nextIndex;
    setCurrentIndexView(nextIndex + 1);
  });
  hammer.on('swiperight', () => {
    indexDecrement();
    animateSlidesBackward($slides[currentIndex], $slides[nextIndex]);
    currentIndex = nextIndex;
    setCurrentIndexView(nextIndex + 1);
  });
  allNum.textContent = $slides.length;
  function animateSlidesForward(current, next) {
    gsap.set(next, { webkitClipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)' });
    gsap.timeline({})
      .set(container, { pointerEvents: 'none' })
      .set(current, { zIndex: 3 })
      .set(next, { zIndex: 4 })
      .to(next, { webkitClipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', ease: transitionEasing, duration: transitionSpeed })
      .set(container, { pointerEvents: 'all' })
      .set(next, { webkitClipPath: '' })
      .set(current, { zIndex: 2 });
  }
  function animateSlidesBackward(current, next) {
    gsap.set(next, { webkitClipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' });
    gsap.timeline({})
      .set(container, { pointerEvents: 'none' })
      .set(current, { zIndex: 3 })
      .set(next, { zIndex: 4 })
      .to(next, { webkitClipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', ease: transitionEasing, duration: transitionSpeed , })
      .set(container, { pointerEvents: 'all' })
      .set(next, { webkitClipPath: '' })
      .set(current, { zIndex: 2 });
  }
  function indexIncrement() {
    if (nextIndex !== ($slides.length - 1)) {
      nextIndex += 1;
    } else {
      nextIndex = 0;
    }
  }
  function indexDecrement() {
    nextIndex = (nextIndex === 0) ? $slides.length - 1 : nextIndex - 1;
  }
  function setCurrentIndexView(index) {
    const toView = index < 10 ? `0${index.toString()}` : index;
    currentNum.textContent = toView;
  }
  nextArrow.addEventListener('click', () => {
    indexIncrement();
    animateSlidesForward($slides[currentIndex], $slides[nextIndex]);
    setCurrentIndexView(nextIndex + 1);
    currentIndex = nextIndex;
  });
  prevArrow.addEventListener('click', () => {
    indexDecrement();
    animateSlidesBackward($slides[currentIndex], $slides[nextIndex]);
    setCurrentIndexView(nextIndex + 1);
    currentIndex = nextIndex;
  });
  return {
    nextSlide: () => {
      indexIncrement();
      animateSlidesForward($slides[currentIndex], $slides[nextIndex]);
      setCurrentIndexView(nextIndex + 1);
      currentIndex = nextIndex;
    },
    prevSlide: () => {
      indexDecrement();
      animateSlidesBackward($slides[currentIndex], $slides[nextIndex]);
      setCurrentIndexView(nextIndex + 1);
      currentIndex = nextIndex;
    },
    container,


  };
}

const clipSlider = slider(document.querySelector('[data-slider]'));

/** ?????????????? ?????????????????????????? ?? ?????????????????????? ???? ?????????????????? ???? ???????????? */

function sideSwitchArrow(swiper, arrow, container) {
  const mediumCordValue = document.documentElement.clientWidth / 2;
  document.body.append(arrow);
  container.style.cursor = 'none';
  arrow.style.cursor = 'none';
  arrow.style.zIndex = 10;
  arrow.__proto__.hide = function () {
    this.style.opacity = '0';
    this.style.pointerEvents = 'none';
  };
  arrow.__proto__.show = function () {
    this.style.opacity = '1';
    // this.style.pointerEvents = 'auto';
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

  /** ???????????????????? ???????????????????? ??????????????, ???? ?????????????? ?????????? ???????????? ?????????????? ???????????????????????? ???????????????? */
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
  container.addEventListener('click', function clickToChange() {
    switchGallerySlide(arrow.dataset.side);
  });
  if (document.documentElement.clientWidth < 576) {
    container.removeEventListener('click', clickToChange);
  }
  const navigate = {
    leftSide: () => {
      swiper.prevSlide();
    },
    rightSide: () => {
      swiper.nextSlide();
    },
  };

  function switchGallerySlide(side) {
    navigate[side]();
    return navigate.side;
  }


  // eslint-disable-next-line no-unused-vars
}
sideSwitchArrow(
  clipSlider,
  document.querySelector('.moving-arrow'),
  clipSlider.container,
);
/** ?????????????? ?????????????????????????? ?? ?????????????????????? ???? ?????????????????? ???? ???????????? END */

gsap.registerPlugin(ScrollTrigger);
/* eslint-disable no-undef */
locoScroll.on('scroll', () => {
  // eslint-disable-next-line no-unused-expressions
  ScrollTrigger.update;
});

ScrollTrigger.scrollerProxy(document.body, {
  scrollTop(value) {
    return (arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y);
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  pinType: document.body.style.transform ? 'transform' : 'fixed',
});
ScrollTrigger.addEventListener('fixed', () => locoScroll.update());

ScrollTrigger.refresh();

const clipPathEasing = new BezierEasing(0.75, 0.01, 0.14, 1);
const clipPathAnimationBlocks = document.querySelectorAll('[data-clip-path-animation]');
clipPathAnimationBlocks.forEach((section) => {
  gsap.set(section, { webkitClipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)' });
  const tl = gsap.timeline({
    paused: true,
    scrollTrigger: {
      triggerHook: 0.5,
      trigger: section,
      end: '+=50%',
    },
  });
  tl.to(section, { webkitClipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', duration: 2, ease: clipPathEasing });
  gsap.set(section, { backgroundPositionY: '-50px' });
  gsap.timeline({
    paused: true,
    scrollTrigger: {
      triggerHook: 0.5,
      trigger: section,
      // end: '+=50%',
      onUpdate: (self) => {
        gsap.to(section, { backgroundPositionY: `${(self.progress * 100) - 50}px` });
      },
    },
  });
});

const homeInfoLists = document.querySelectorAll('[data-slide-in-anim]');
const infoListEasing = new BezierEasing(0.17, 0.7, 0.52, 0.93);
homeInfoLists.forEach((section) => {
  const tl = gsap.timeline({
    paused: true,
    scrollTrigger: {
      triggerHook: 0.8,
      trigger: section,
    },
  });
  tl.fromTo(section,
    { autoAlpha: 0, y: 50 },
    {
      autoAlpha: 1, y: 0, duration: 0.9, ease: infoListEasing,
    });
});

const liveSections = document.querySelectorAll('[data-live-sections]');
liveSections.forEach((section) => {
  gsap.set(section, { transformOrigin: 'bottom' });
  const tl = gsap.timeline({
    paused: true,
    scrollTrigger: {
      start: '99% bottom',
      trigger: section,
      scrub: 1,
    },
  });
  tl.fromTo(section,
    { scale: 1 },
    {
      scale: 1.02,
    });
});
gsap.registerEffect({
  name: 'counter',
  extendTimeline: true,
  defaults: {
    end: 0,
    duration: 1.5,
    ease: 'power1',
    increment: 1,
  },
  effect: (targetArg, config) => {
    const targets = targetArg;
    const tl = gsap.timeline();
    // eslint-disable-next-line no-useless-escape
    const num = targets[0].innerText.replace(/\,/g, '');
    targets[0].innerText = num;

    tl.to(targets, {
      duration: config.duration,
      innerText: config.end,
      // snap:{innerText:config.increment},
      modifiers: {
        innerText(innerText) {
          return gsap.utils.snap(config.increment, innerText).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        },
      },
      ease: config.ease,
    }, 0);

    return tl;
  },
});


const numbersToAnimate = document.querySelectorAll('[data-to-animate-number]');
numbersToAnimate.forEach((section) => {
  const sectionArg = section;
  sectionArg.textContent = 0;
  gsap.timeline({
    paused: true,
    scrollTrigger: {
      triggerHook: 0.5,
      trigger: section,
      // end: '+=50%',
      onEnter: () => {
        gsap.timeline().counter(section, { end: section.dataset.toAnimateNumber, increment: 1 });
      },
    },
  });
});

const videos = document.querySelectorAll('video');
videos.forEach((section) => {
  ScrollTrigger.create({
    triggerHook: 0.1,
    trigger: section,
    onEnter: () => {
      section.play();
      console.log('enter');
    },
    onEnterBack: () => {
      section.play();
      console.log('enter');
    },
    onLeave: () => {
      section.pause();
      console.log('leave');
    },
    onLeaveBack: () => {
      section.pause();
      console.log('leave');
    },
  });
});



document.querySelectorAll('.scroll-mouse').forEach((mouse) => {
  mouse.addEventListener('click', () => {
    locoScroll.scrollTo(mouse.closest('section').nextElementSibling);
  });
})


/*???????????????? 
data-scroll-section - ?????? ????????????, ?????????????? ?????????????????? ????????????????
?? ???????????????? ???????????? ???????? ???????????????????? ???? sections ?????? ???????????????????? ????????????

*/


function handleAccurateScroll() {
  const scrollSections = document.querySelectorAll('section, [data-scroll-correction]');
  let currentSectionInView = null;
  let isScrolling = false;
  
  scrollSections.forEach((sect) => {
    const observer = new IntersectionObserver((entries) => {
      /* Content excerpted, show below */
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (sect.dataset.scrollCorrection !== undefined) {
            currentSectionInView = sect;
          } else {
            
            currentSectionInView = null;
          }
          console.log(currentSectionInView);
        }
      });
    }, { 
      rootMargin: '0px',
      threshold: 0.45,
    });
    observer.observe(sect);
  })
  
  function debounce(f, ms) {
    let isCooldown = false;
    return function() {
      if (isCooldown) return;
      f.apply(this, arguments);
      isCooldown = true;
      setTimeout(() => isCooldown = false, ms);
    };
  }
  function accSectScroll(el) {
    if (isScrolling === true) return;
    if (el) {
      isScrolling = true;
      locoScroll.scrollTo(el);
      currentSectionInView = null;
    }
    setTimeout(() => {
      isScrolling = false;
      
    }, 3000);
  }
  const accurateSectionScroll = debounce(accSectScroll, 1500);
  locoScroll.on('scroll', () => {
    accurateSectionScroll(currentSectionInView);
  })
}

if (document.documentElement.clientWidth > 950) handleAccurateScroll();
/*???????????????? END */



/** Rotation text enter effect */
// gsap.fromTo('.home-section-0__title',{
//   y: 0,
//   z: .01,
//   rotationX: -90,
//   rotationY: 0,
//   rotationZ: 0
// }, {
//   y: 0,
//   z: .01,
//   rotationX: 0,
//   rotationY: .01,
//   rotationZ: 0,
//   duration: .9
// }, 330);
// gsap.fromTo('.home-section-0__title',{
//   y: "3em",
//   z: .01,
//   rotationX: "-150",
//   rotationY: "-60",
//   rotationZ: "60"
// }, {
//   y: 0,
//   z: .01,
//   rotationX: 0,
//   rotationY: .01,
//   rotationZ: 0,
//   duration: .9
// }, 330);
// gsap.fromTo('.home-section-0__title').fromTo(i, {
//   autoAlpha: 0
// }, {
//   autoAlpha: 1,
//   ease: "power4.out",
//   duration: 1
// }, 330)

// gsap.timeline({
//   delay: .2,
//   defaults: {
//       duration: 1,
//       ease: "expo.out"
//   }
// })
// .fromTo('.home-section-0__title', {
//   rotationX: -90
// }, {
//   rotationX: 0
// }, .15)
// .fromTo('.home-section-0__title', {
//   autoAlpha: 0
// }, {
//   autoAlpha: 1,
//   ease: "power4.out",
//   duration: 1* 2.5
// }, 0)

// const yyy = document.querySelector('.home-section-0__title');
// gsap.set(yyy, { whiteSpace: 'nowrap' })
// gsap.fromTo(yyy, {
//   rotationZ: -20
// }, {
//   rotationZ: 0,
//   duration: 1.2* 2.5
// }, .1),


  // gsap.fromTo(yyy, {
  //     y: "3em",
  //     z: .01,
  //     rotationX: "-150",
  //     rotationY: "-60",
  //     rotationZ: "60"
  // }, {
  //     y: 0,
  //     z: .01,
  //     rotationX: 0,
  //     rotationY: .01,
  //     rotationZ: 0,
  //     duration: 0.55
  // }, .1),
  // a.fromTo(e, {
  //     opacity: 1e-4
  // }, {
  //     opacity: 1,
  //     ease: "power4.inOut",
  //     duration: 0.55
  // }, 1)
