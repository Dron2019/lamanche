/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable no-loop-func */
/* eslint-disable no-restricted-syntax */

const filterItems = {
  year: 'null',
  month: 'null',
};

const cards = document.querySelectorAll('.news-card');
const cardsWrapper = document.querySelector('.news-cards-wrap');

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
