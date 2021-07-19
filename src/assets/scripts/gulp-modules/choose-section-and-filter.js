/* eslint-disable no-undef */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
const apartments = [
  {
    id: '82',
    build: '1',
    floor: '6',
    section: '1',
    rooms: '1',
    all_room: '43.53',
    live_room: '14.54',
    number: '172',
    img_big: 'https://boston-house.kiev.ua/wp-content/themes/boston/assets/img/projects/1/1/KV-172-1Є-2-1-10(Nomer-versii_-1).png',
    type: '1Ye_2_2_10',
    in_array: false,
    price: '1 519 371',
    price_m2: '34 904',
  },
  {
    id: '83',
    build: '1',
    floor: '6',
    section: '2',
    rooms: '1',
    all_room: '42.79',
    live_room: '14.56',
    number: '173',
    img_big: 'https://boston-house.kiev.ua/wp-content/themes/boston/assets/img/projects/1/1/KV-7-1B-1-1-7(Nomer-versii_-1).png',
    type: '1Zh_2_2_11',
    in_array: false,
    price: '1 513 354',
    price_m2: '35 367',
  },
  {
    id: '84',
    build: '1',
    floor: '6',
    section: '3',
    rooms: '1',
    all_room: '43.13',
    live_room: '14.32',
    number: '174',
    img_big: 'https://boston-house.kiev.ua/wp-content/themes/boston/assets/img/projects/1/1/KV-6-1A-1-1-6(Nomer-versii_-1).png',
    type: '1I_2_2_12',
    in_array: false,
    price: '1 588 866',
    price_m2: '36 839',
  },
  {
    id: '85',
    build: '1',
    floor: '6',
    section: '4',
    rooms: '1',
    all_room: '42.79',
    live_room: '15.04',
    number: '175',
    img_big: 'https://boston-house.kiev.ua/wp-content/themes/boston/assets/img/projects/1/1/KV-7-1B-1-1-7(Nomer-versii_-1).png',
    type: '1Y_2_2_13',
    in_array: false,
    price: '1 544 933',
    price_m2: '36 105',
  },
  {
    id: '86',
    build: '1',
    floor: '6',
    section: '5',
    rooms: '2',
    all_room: '50.55',
    live_room: '22.97',
    number: '176',
    img_big: 'https://boston-house.kiev.ua/wp-content/themes/boston/assets/img/projects/1/1/KV-176-2E-2-1-14(Nomer-versii_-1).png',
    type: '2E_2_2_14',
    in_array: false,
    price: '1 955 375',
    price_m2: '38 682',
  },
  {
    id: '87',
    build: '1',
    floor: '6',
    section: '6',
    rooms: '3',
    all_room: '94.37',
    live_room: '44.51',
    number: '177',
    img_big: 'https://boston-house.kiev.ua/wp-content/themes/boston/assets/img/projects/1/1/BOSTON-3.1A-Prodazhka-01(Nomer-versii_-2).png',
    type: '3A_2_2_15',
    in_array: false,
    price: '3 695 529',
    price_m2: '39 160',
  },
  {
    id: '89',
    build: '1',
    floor: '6',
    section: '7',
    rooms: '3',
    all_room: '62.19',
    live_room: '28.19',
    number: '179',
    img_big: 'https://boston-house.kiev.ua/wp-content/themes/boston/assets/img/projects/1/1/KV-179-3K-2-1-17(Nomer-versii_-1).png',
    type: '3K_2_2_17',
    in_array: false,
    price: '2 097 047',
    price_m2: '33 720',
  },
  {
    id: '91',
    build: '1',
    floor: '6',
    section: '8',
    rooms: '1',
    all_room: '43.61',
    live_room: '14.92',
    number: '180',
    img_big: 'https://boston-house.kiev.ua/wp-content/themes/boston/assets/img/projects/1/1/KV-180-1L-2-1-18(Nomer-versii_-1).png',
    type: '1L_2_2_18',
    in_array: false,
    price: '1 620 984',
    price_m2: '37 170',
  },
  {
    id: '426',
    build: '2',
    floor: '6',
    section: '9',
    rooms: '1',
    all_room: '43.53',
    live_room: '14.54',
    number: '172',
    img_big: 'https://boston-house.kiev.ua/wp-content/themes/boston/assets/img/projects/1/2/KV-172-1Є-2-1-10(Nomer-versii_-1).png',
    type: '1Ye_2_2_10',
    in_array: false,
    price: '1 542 573',
    price_m2: '35 437',
  },
  {
    id: '428',
    build: '2',
    floor: '6',
    section: '10',
    rooms: '1',
    all_room: '43.13',
    live_room: '14.32',
    number: '174',
    img_big: 'https://boston-house.kiev.ua/wp-content/themes/boston/assets/img/projects/1/2/KV-6-1A-1-1-6(Nomer-versii_-1).png',
    type: '1I_2_2_12',
    in_array: false,
    price: '1 542 329',
    price_m2: '35 760',
  },
  {
    id: '430',
    build: '2',
    floor: '6',
    section: '11',
    rooms: '3',
    all_room: '93.25',
    live_room: '43.74',
    number: '176',
    img_big: 'https://boston-house.kiev.ua/wp-content/themes/boston/assets/img/projects/1/2/KV-176-3F-2-1-14(Nomer-versii_-1).png',
    type: '3F_2_2_14',
    in_array: false,
    price: '3 166 211',
    price_m2: '33 954',
  },
  {
    id: '432',
    build: '2',
    floor: '6',
    section: '12',
    rooms: '2',
    all_room: '55.44',
    live_room: '23.14',
    number: '178',
    img_big: 'https://boston-house.kiev.ua/wp-content/themes/boston/assets/img/projects/1/2/KV-178-2Zh-2-1-16(Nomer-versii_-1).png',
    type: '2Zh_2_2_16',
    in_array: false,
    price: '2 120 857',
    price_m2: '38 255',
  },
  {
    id: '433',
    build: '2',
    floor: '6',
    section: '13',
    rooms: '2',
    all_room: '50.02',
    live_room: '19.09',
    number: '179',
    img_big: 'https://boston-house.kiev.ua/wp-content/themes/boston/assets/img/projects/1/2/KV-179-2I-2-1-17(Nomer-versii_-1).png',
    type: '2I_2_2_17',
    in_array: false,
    price: '1 866 296',
    price_m2: '37 311',
  },
  {
    id: '446',
    build: '2',
    floor: '6',
    section: '14',
    rooms: '2',
    all_room: '50.23',
    live_room: '19.09',
    number: '2',
    img_big: 'https://boston-house.kiev.ua/wp-content/themes/boston/assets/img/projects/1/2/KV-2-2A-1-1-2(Nomer-versii_-1).png',
    type: '2A_1_1_2',
    in_array: false,
    price: '1 870 113',
    price_m2: '37 231',
  },
  {
    id: '485',
    build: '2',
    floor: '6',
    section: '15',
    rooms: '2',
    all_room: '55.57',
    live_room: '23.14',
    number: '3',
    img_big: 'https://boston-house.kiev.ua/wp-content/themes/boston/assets/img/projects/1/2/KV-3-2B-1-1-3(Nomer-versii_-1).png',
    type: '2B_1_1_3',
    in_array: false,
    price: '2 109 937',
    price_m2: '37 969',
  },
  {
    id: '2',
    build: '1',
    floor: '7',
    section: '16',
    rooms: '1',
    all_room: '43.61',
    live_room: '14.52',
    number: '10',
    img_big: 'https://boston-house.kiev.ua/wp-content/themes/boston/assets/img/projects/1/1/KV-1-1D-1-1-1(Nomer-versii_-1).png',
    type: '1.1D_1_1_1',
    in_array: false,
    price: '1 469 352',
    price_m2: '33 693',
  },
  {
    id: '13',
    build: '1',
    floor: '7',
    section: '17',
    rooms: '2',
    all_room: '48.39',
    live_room: '18.6',
    number: '11',
    img_big: 'https://boston-house.kiev.ua/wp-content/themes/boston/assets/img/projects/1/1/KV-2-2A-1-1-2(Nomer-versii_-1).png',
    type: '2.1A_1_1_2',
    in_array: false,
    price: '1 722 587',
    price_m2: '35 598',
  },
  {
    id: '24',
    build: '1',
    floor: '7',
    section: '18',
    rooms: '2',
    all_room: '55.73',
    live_room: '23.14',
    number: '12',
    img_big: 'https://boston-house.kiev.ua/wp-content/themes/boston/assets/img/projects/1/1/KV-3-2B-1-1-3(Nomer-versii_-1).png',
    type: '2.1B_1_1_3',
    in_array: false,
    price: '1 904 907',
    price_m2: '34 181',
  },
  {
    id: '35',
    build: '1',
    floor: '7',
    section: '19',
    rooms: '2',
    all_room: '50.39',
    live_room: '19.7',
    number: '13',
    img_big: 'https://boston-house.kiev.ua/wp-content/themes/boston/assets/img/projects/1/1/KV-13-2.1V-1-1-4(Nomer-versii_-1).png',
    type: '2.1V_1_1_4',
    in_array: false,
    price: '1 848 557',
    price_m2: '36 685',
  },
  {
    id: '46',
    build: '1',
    floor: '7',
    section: '20',
    rooms: '2',
    all_room: '50.51',
    live_room: '22.97',
    number: '14',
    img_big: 'https://boston-house.kiev.ua/wp-content/themes/boston/assets/img/projects/1/1/KV-14-2.1G-1-1-5(Nomer-versii_-1).png',
    type: '2.1G_1_1_5',
    in_array: false,
    price: '1 809 975',
    price_m2: '35 834',
  },
  {
    id: '57',
    build: '1',
    floor: '7',
    section: '21',
    rooms: '1',
    all_room: '42.79',
    live_room: '15.04',
    number: '15',
    img_big: 'https://boston-house.kiev.ua/wp-content/themes/boston/assets/img/projects/1/1/KV-15-1.1A-1-1-6(Nomer-versii_-1).png',
    type: '1.1A_1_1_6',
    in_array: false,
    price: '1 439 156',
    price_m2: '33 633',
  },
  {
    id: '570',
    build: '2',
    floor: '7',
    section: '22',
    rooms: '2',
    all_room: '48.91',
    live_room: '18.93',
    number: '188',
    img_big: 'https://boston-house.kiev.ua/wp-content/themes/boston/assets/img/projects/1/2/KV-188-2.1I-2-1-17(Nomer-versii_-1).png',
    type: '2.1I_2_2_17',
    in_array: false,
    price: '1 768 439',
    price_m2: '36 157',
  },
  {
    id: '68',
    build: '1',
    floor: '7',
    section: '23',
    rooms: '1',
    all_room: '43.13',
    live_room: '14.32',
    number: '16',
    img_big: 'https://boston-house.kiev.ua/wp-content/themes/boston/assets/img/projects/1/1/KV-16-1.1B-1-1-7(Nomer-versii_-1).png',
    type: '1.1B_1_1_7',
    in_array: false,
    price: '1 441 663',
    price_m2: '33 426',
  },
  {
    id: '79',
    build: '1',
    floor: '7',
    section: '24',
    rooms: '1',
    all_room: '42.79',
    live_room: '14.61',
    number: '17',
    img_big: 'https://boston-house.kiev.ua/wp-content/themes/boston/assets/img/projects/1/1/KV-15-1.1A-1-1-6(Nomer-versii_-1).png',
    type: '1.1V_1_1_8',
    in_array: false,
    price: '1 431 839',
    price_m2: '33 462',
  },
];
function handleFilterItemsChanges(filterArg) {
  const filter = filterArg;
  const filterItems = document.querySelectorAll('[data-filter-item]');
  filterItems.forEach((item) => {
    const { type, name, value } = item.dataset;
    item.addEventListener('change', () => {
      if (type === 'checkbox' && item.checked) {
        filter[name].add(value);
      } else if (type === 'radio' && item.checked) {
        filter[name] = value;
      } else if (type === 'checkbox' && !item.checked) {
        filter[name].delete(value);
      }
    });
  });
}
function initFilterItems() {
  const filterItems = document.querySelectorAll('[data-filter-item]');
  const object = {};
  filterItems.forEach((item) => {
    const { type, name } = item.dataset;
    const { id } = item;

    if (type === 'checkbox') {
      object[name] = new Set();
    } else if (type === 'radio') {
      object[name] = '';
    } else {
      object[id] = {
        min: '',
        max: '',
      };
    }
  });
  return object;
}
const filter = initFilterItems();
handleFilterItemsChanges(filter);
function setFilteringValues(dataObjectArg, key, digit) {
  const dataObject = dataObjectArg;
  dataObject[key].min = digit[0];
  dataObject[key].max = digit[1];
}

function initBoxRange({ range, onChange, onFinish }) {
  let minV = 0;
  //   let maxV = 0;
  const minArr = [];
  const maxArr = [];
  apartments.forEach((flat) => {
    minArr.push(flat[range.getAttribute('id')] >= 0 ? parseFloat(flat[range.getAttribute('id')]) : null);
  });
  apartments.forEach((flat) => {
    maxArr.push(flat[range.getAttribute('id')] >= 0 ? parseFloat(flat[range.getAttribute('id')]) : null);
  });
  minV = Math.min.apply(null, minArr);
  //   maxV = Math.max.apply(null, maxArr);
  range.dataset.max = range.getAttribute('id');
  range.dataset.max = Math.max.apply(null, minArr) + 1;
  range.dataset.min = minV - 1;
  range.dataset.to = Math.max.apply(null, minArr) + 1;
  range.dataset.from = minV - 1;
  const {
    max, min, from, to,
  } = range.dataset;
  $(range).ionRangeSlider({
    type: 'double',
    values_separator: '-',
    min,
    max,
    from,
    to,
    hide_min_max: true,
    onChange(/* ionRange */) {
      onChange();
      // setValue(range, ionRange, ['from', 'to']);
      // console.log(filter);
    },

    onFinish(ionRange) {
      onFinish(ionRange);
    },
  });
  // after init set filter state
  const dataRange = $(range).data('ionRangeSlider');
  //   setFilter(dataRange.options, dataRange.input);
  return dataRange;
}

const RANGES = document.querySelectorAll('.js-range-init');

RANGES.forEach((elArgs) => {
  const el = elArgs;
  const range = initBoxRange({
    range: el,
    onChange: (/* ionRange */) => {
    },
    onStart: (/* ionRange */) => {},
    onFinish: (/* ionRange */) => {
    //   setFilter(ionRange, ionRange.input[0]);
      setFilteringValues(
        filter,
        el.getAttribute('id'),
        [range.old_from, range.old_to],
      );
    },
  });
  el.range = range;
});

function renderPathesInfo(path) {
  path.addEventListener('mouseenter', () => {
    const dataInfo = Object.entries(path.dataset);
    dataInfo.forEach((item) => {
      const renderEl = document.querySelector(`[data-render='${item[0]}']`);
      if (renderEl !== null) {
        renderEl.textContent = item[1];
      }
    });
  });
}
const floorLinkPathes = document.querySelectorAll('[data-info-path]');
floorLinkPathes.forEach(renderPathesInfo);

const filterWrapper = document.querySelector('[data-filter-wrapper]');
const planWrapper = document.querySelector('[data-build-plan-wrapper]');
const switchScreenItems = document.querySelectorAll('[data-switch-screen]');

let currentPageState = 'planWrapper';

gsap.defaults(
  {
    duration: 0.25,
  },
);
const screensSwitcher = {
  filterWrapper: () => {
    gsap.timeline()
      .to(planWrapper, { x: 50, autoAlpha: 0, clearProps: 'all' })
      .set(planWrapper, { display: 'none' })
      .set(filterWrapper, { display: '' })
      .fromTo(filterWrapper, { x: -50, autoAlpha: 0 }, { x: 0, autoAlpha: 1 }, '<');
  },
  planWrapper: () => {
    gsap.timeline()
      .to(filterWrapper, { x: 50, autoAlpha: 0, clearProps: 'all' })
      .set(filterWrapper, { display: 'none' })
      .set(planWrapper, { display: '' })
      .fromTo(planWrapper, { x: -50, autoAlpha: 0 }, { x: 0, autoAlpha: 1 }, '<');
  },
};
screensSwitcher[currentPageState]();
switchScreenItems.forEach((el) => {
  el.addEventListener('click', () => {
    if (currentPageState === el.dataset.switchScreen) return;
    currentPageState = el.dataset.switchScreen;
    screensSwitcher[currentPageState]();
  });
});

const cardsContainer = document.querySelector('[data-cards-container]');
const tablesContainer = document.querySelector('[data-tables-container]');
const switchFilterScreenItems = document.querySelectorAll('[data-switch-filter-screen]');
let currentFilterState = 'cardsContainer';
const filterScreensSwitcher = {
  cardsContainer: () => {
    gsap.timeline()
      .to(tablesContainer, { x: 50, autoAlpha: 0, clearProps: 'all' })
      .set(tablesContainer, { display: 'none' })
      .set(cardsContainer, { display: '' })
      .fromTo(cardsContainer, { x: -50, autoAlpha: 0 }, { x: 0, autoAlpha: 1 }, '<');
  },
  tablesContainer: () => {
    gsap.timeline()
      .to(cardsContainer, { x: 50, autoAlpha: 0, clearProps: 'all' })
      .set(cardsContainer, { display: 'none' })
      .set(tablesContainer, { display: '' })
      .fromTo(tablesContainer, { x: -50, autoAlpha: 0 }, { x: 0, autoAlpha: 1 }, '<');
  },
};

filterScreensSwitcher[currentFilterState]();
switchFilterScreenItems.forEach((el) => {
  el.addEventListener('click', () => {
    if (currentFilterState === el.dataset.switchFilterScreen) return;
    currentFilterState = el.dataset.switchFilterScreen;
    filterScreensSwitcher[currentFilterState]();
  });
});
