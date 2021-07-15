/* eslint-disable no-new */
// eslint-disable-next-line no-undef
const swiper1 = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  centeredSlides: true,
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
});
function setCurrentIndexView(index, elementArg, swiper) {
  const element = elementArg;
  const toView = index < 10 ? `0${index.toString()}` : index;
  element.innerHTML = `
    ${toView}
    <div class="current">${swiper.slides.length - 2}</div>
  `;
}
function changeNumbers(swiper) {
  const current = document.querySelector('.all');
  setCurrentIndexView((swiper.realIndex + 1), current, swiper);
}

changeNumbers(swiper1);

swiper1.on('afterInit', changeNumbers);
swiper1.on('activeIndexChange', changeNumbers);
