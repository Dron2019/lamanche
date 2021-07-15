/* eslint-disable no-undef */
/* eslint-disable no-loop-func */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
/* eslint-disable func-names */
/* eslint-disable no-restricted-syntax */
function filterBuildCards(items, filterObject, wrapper, afterCallback = () => {}) {
  items.forEach((card) => {
    const validFieldLength = Object.entries(filterObject).length;
    let validFieldsCount = 0;
    Object.entries(filterObject).forEach((validField) => {
      const key = validField[0];
      const value = validField[1].toString();
      if (card.dataset[key] === value || value === 'null') {
        validFieldsCount += 1;
      }
    });
    if (validFieldsCount === validFieldLength) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
    const validCardsCount = Array.from(items).filter(item => item.style.display !== 'none');
    (validCardsCount.length === 0)
      ? wrapper.classList.add(wrapper.dataset.noCardsSelector)
      : wrapper.classList.remove(wrapper.dataset.noCardsSelector);
  });
  afterCallback();
}

const filterItems = {
  year: 'null',
  month: 'null',
  with_video: 'null',
};
const withVideoCheckbox = document.querySelector('[data-video-chechbox]');
const cards = document.querySelectorAll('.build-progress-card');
const cardsWrapper = document.querySelector('.build-cards-wrap');


withVideoCheckbox.addEventListener('change', () => {
  filterItems[withVideoCheckbox.dataset.name] = !withVideoCheckbox.checked;
  filterBuildCards(cards, filterItems, cardsWrapper, () => {
    locoScroll.update();
  });
});
for (const dropdown of document.querySelectorAll('.custom-select-wrapper')) {
  dropdown.addEventListener('click', function () {
    this.querySelector('.custom-select').classList.toggle('open');
  });
}
for (const option of document.querySelectorAll('.custom-option')) {
  option.addEventListener('click', function () {
    if (!this.classList.contains('selected')) {
      this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
      this.classList.add('selected');
      filterItems[this.closest('.custom-select-wrapper').dataset.name] = this.dataset.value;
      this.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = this.textContent;
      filterBuildCards(cards, filterItems, cardsWrapper, () => {
        locoScroll.update();
      });
    }
  });
}

window.addEventListener('click', (e) => {
  for (const select of document.querySelectorAll('.custom-select')) {
    if (!select.contains(e.target)) {
      select.classList.remove('open');
    }
  }
});


const webCameraCallPopup = document.querySelector('[data-web-camera-popup]');
const webCameraPopup = document.querySelector('[data-web-cam-popup]');
const webCamClose = webCameraPopup.querySelector('[data-popup-close]');
webCameraCallPopup.addEventListener('click', (evt) => {
  evt.preventDefault();
  locoScroll.stop();
  gsap.timeline({
    clearProps: 'all',
  }).set(webCameraPopup, { autoAlpha: 1, pointerEvents: 'all' })
    .to(webCameraPopup, { autoAlpha: 1 })
    .from(webCameraPopup.querySelector('.web-camera-popup'), { autoAlpha: 0, y: -100 }, '<')
    .set(webCameraPopup.querySelector('.web-camera-popup'), { autoAlpha: 1, y: 0, clearProps: 'all' });
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
