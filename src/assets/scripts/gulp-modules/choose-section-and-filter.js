/* eslint-disable camelcase */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
const apartments = [
  {
    floors: '1',
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
    floors: '1',
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
    floors: '1',
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
    floors: '1',
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
    floors: '1',
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
    floors: '1',
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
    floors: '1',
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
    floors: '1',
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
    floors: '1',
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
    floors: '1',
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
    floors: '1',
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
    floors: '1',
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
    floors: '1',
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
    floors: '1',
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
    floors: '1',
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
    floors: '1',
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
    floors: '1',
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
    floors: '1',
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
    floors: '1',
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
    floors: '1',
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
    floors: '1',
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
    floors: '1',
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
    floors: '1',
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
    floors: '1',
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
locoScroll.destroy();
function tableFlatTemplate(flatData) {
  let dataset = '';
  Object.entries(flatData).forEach((filterValue) => {
    dataset += ` data-${filterValue[0]}='${filterValue[1]}'`;
  });
  return `
    <tr data-filter-me data-some="3" ${dataset}>
      <td><img src="${flatData.img_big}" title="foto" alt="foto"/>
      </td>
      <td> 
        <a href="flat?id=${flatData.id}">
          <div>${flatData.rooms}</div>
        </a>
      </td>
      <td> 
        <a href="flat?id=${flatData.id}">
          <div>${flatData.section}</div>
        </a>
      </td>
      <td> 
        <a href="flat?id=${flatData.id}">
          <div>${flatData.floor}</div>
        </a>
      </td>
      <td> 
        <a href="flat?id=${flatData.id}">
          <div>${flatData.all_room}</div>
        </a>
      </td>
      <td> 
        <a href="flat?id=${flatData.id}">
          <div>${flatData.live_room}</div>
        </a>
      </td>
    </tr>
  `;
}
function cardFlatTemplate(flatData) {
  let dataset = '';
  Object.entries(flatData).forEach((filterValue) => {
    dataset += ` data-${filterValue[0]}='${filterValue[1]}'`;
  });
  return `
  <a data-filter-me class="flat-card" ${dataset} href="flat?id=${flatData.id}">
    <img class="flat-card__img" src="${flatData.img_big}" title="foto" alt="foto"/>
    <div class="flat-card__title">Тип 1А</div>
    <table class="flat-card__info-wrap" data-some="0">
      <tr class="flat-card__info-wrap-item">
        <td>Загальна площа:</td>
        <td>${flatData.all_room} м2</td>
      </tr>
      <tr class="flat-card__info-wrap-item">
        <td>Житлова площа:</td>
        <td>${flatData.live_room} м2</td>
      </tr>
      <tr class="flat-card__info-wrap-item">
        <td>Ціна від:</td>
        <td>66 453 грн/ м2</td>
      </tr>
      <tr class="flat-card__info-wrap-item">
        <td>Кімнат:</td>
        <td>${flatData.rooms}</td>
      </tr>
    </table>
    <div class="flat-card__link underlined-link-wrap"> 
      <div class="underlined-link">переглянути</div>
      <svg class="icon--build-arrow" role="presentation">
        <use xlink:href="#icon-build-arrow"></use>
      </svg>
    </div>
  </a>
  `;
}
function prepareValidFlatsArray(filterDataValues, objectOfFlats, cb = () => {}) {
  const validationDataArray = Object.entries(filterDataValues);
  const validationDataLength = validationDataArray.length;
  const validFlats = [];
  objectOfFlats.forEach((flat) => {
    let validFieldsCount = 0;
    validationDataArray.forEach((filterPoint) => {
      const name = filterPoint[0];
      const value = filterPoint[1];
      const constructor = Object.getPrototypeOf(value).constructor.name;
      switch (constructor) {
        case 'Object':
          if (value.min === '' && value.max === '') {
            validFieldsCount += 1;
            break;
          }
          if (value.min <= +flat[name]
            && value.max >= +flat[name]) validFieldsCount += 1;
          break;
        case 'Set':
          if (value.size === 0) {
            validFieldsCount += 1;
            break;
          }
          if (value.has(flat[name])) validFieldsCount += 1;
          break;
        case 'String':
          if (value === '') {
            validFieldsCount += 1;
            break;
          }
          if (value === flat[name]) validFieldsCount += 1;
          break;
        case 'Array':
          validFieldsCount += 1;
          break;
        default:
          break;
      }
    });
    if ((validFieldsCount === validationDataLength)) {
      validFlats.push(flat);
    }
    cb();
  });
  return validFlats;
}
function filterFlats(filterDataValues, cb = () => {}) {
  const objectsToFilter = document.querySelectorAll('[data-filter-me]');
  const validationDataArray = Object.entries(filterDataValues);
  const validationDataLength = validationDataArray.length;
  objectsToFilter.forEach((flat) => {
    let validFieldsCount = 0;
    validationDataArray.forEach((filterPoint) => {
      const name = filterPoint[0];
      const value = filterPoint[1];
      const constructor = Object.getPrototypeOf(value).constructor.name;
      switch (constructor) {
        case 'Object':
          if (value.min === '' && value.max === '') {
            validFieldsCount += 1;
            break;
          }
          if (value.min <= +flat.dataset[name]
            && value.max >= +flat.dataset[name]) validFieldsCount += 1;
          break;
        case 'Set':
          if (value.size === 0) {
            validFieldsCount += 1;
            break;
          }
          if (value.has(flat.dataset[name])) validFieldsCount += 1;
          break;
        case 'String':
          if (value === '') {
            validFieldsCount += 1;
            break;
          }
          if (value === flat.dataset[name]) validFieldsCount += 1;
          break;
        case 'Array':
          validFieldsCount += 1;
          break;
        default:
          break;
      }
    });
    if ((validFieldsCount === validationDataLength)) {
      flat.style.display = '';
      flat.dataset.isValid = '1';
    } else {
      flat.style.display = 'none';
      flat.dataset.isValid = '';
    }
    // filterDataValues.validFlatsCount[0] = validFlatsCount;
    cb();
  });
}
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

gsap.defaults({ duration: 0.25 });
function changeScreenWithEffects(toOpenElement, toCloseElement) {
  gsap.timeline()
    .to(toCloseElement, { y: 25, autoAlpha: 0, clearProps: 'all' })
    .set(toCloseElement, { display: 'none' })
    .set(toOpenElement, { display: '' })
    .fromTo(toOpenElement, { y: -25, autoAlpha: 0 }, { y: 0, autoAlpha: 1 }, '<')
    .add(() => {
      locoScroll.update();
    });
}
const hideFilterNavButton = document.querySelector('[data-mobile-hide-filter]');
const filterNav = document.querySelector('[data-filter-nav]');
hideFilterNavButton.addEventListener('click', () => {
  filterNav.classList.toggle('rolled-up');
});

const filterWrapper = document.querySelector('[data-filter-wrapper]');
const planWrapper = document.querySelector('[data-build-plan-wrapper]');
const switchScreenItems = document.querySelectorAll('[data-switch-screen]');

let currentPageState = 'planWrapper';


const screensSwitcher = {
  filterWrapper: () => changeScreenWithEffects(filterWrapper, planWrapper),
  planWrapper: () => changeScreenWithEffects(planWrapper, filterWrapper),
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
const tableViewImage = document.querySelector('[data-table-image-view]');
const switchFilterScreenItems = document.querySelectorAll('[data-switch-filter-screen]');
// const classNameActiveInFilterScreen = 'filter'
switchFilterScreenItems[0].classList.add('active');
let currentFilterState = 'cardsContainer';
const filterScreensSwitcher = {
  cardsContainer: () => changeScreenWithEffects(cardsContainer, tablesContainer),
  tablesContainer: () => changeScreenWithEffects(tablesContainer, cardsContainer),
};

filterScreensSwitcher[currentFilterState]();
switchFilterScreenItems.forEach((el) => {
  el.addEventListener('click', () => {
    if (currentFilterState === el.dataset.switchFilterScreen) return;
    switchFilterScreenItems.forEach(elem => elem.classList.remove('active'));
    currentFilterState = el.dataset.switchFilterScreen;
    el.classList.add('active');
    filterScreensSwitcher[currentFilterState]();
  });
});


const tableFlatsRenderContainer = document.querySelector('[data-table-flats-render]');
const cardFlatsRenderContainer = document.querySelector('[data-card-flats-render]');

tableFlatsRenderContainer.innerHTML = '';
cardFlatsRenderContainer.innerHTML = '';
apartments.forEach((appart) => {
  tableFlatsRenderContainer.innerHTML += tableFlatTemplate(appart);
  cardFlatsRenderContainer.innerHTML += cardFlatTemplate(appart);
});

const filterButtons = document.querySelectorAll('[data-filter-button]');
filterFlats(filter, () => {
  locoScroll.update();
});
filterButtons.forEach((button) => {
  button.dataset.countResults = document.querySelectorAll('[data-is-valid="1"]').length / 2;
  button.addEventListener('click', () => {
    const validFlats = prepareValidFlatsArray(filter, apartments);
    window.dispatchEvent(new Event('filtering'));
    // filterFlats(filter, () => {
    //   locoScroll.update();
    // });
    portionedRenderFlats(validFlats, 0, 9, () => {
      locoScroll.update();
    });
    button.dataset.countResults = `
    (${validFlats.length})`;
  });

  if (document.documentElement.clientWidth < 576) {
    button.addEventListener('click', () => {
      filterNav.classList.add('rolled-up');
    });
  }
});

function portionedRenderFlats(flats, startPoint, endPoint, cb = () => {}) {
  if (startPoint === 0) {
    tableFlatsRenderContainer.innerHTML = '';
    cardFlatsRenderContainer.innerHTML = '';
  }
  if (flats[startPoint] === undefined) return;
  const portion = 9;
  const options = {
    rootMargin: '0px',
    threshold: 0.1,
  };
  for (let i = startPoint; i < endPoint; i += 1) {
    const flat = flats[i];
    if (flat !== undefined) {
      tableFlatsRenderContainer.innerHTML += tableFlatTemplate(flat);
      cardFlatsRenderContainer.innerHTML += cardFlatTemplate(flat);
    } else {
      break;
    }
  }
  const flat = tableFlatsRenderContainer.children;
  for (let i = 0; i < flats.length; i += 1) {
    if (flat[i] === undefined) break;
    flat[i].addEventListener('mouseenter', () => {
      tableViewImage.style.opacity = 1;
      tableViewImage.querySelector('img').src = flat[i].querySelector('img').src;
      tableViewImage.querySelector('[data-table-view-detailed-type]').textContent = flat[i].dataset.type;
    });
    flat[i].addEventListener('mouseleave', () => {
      tableViewImage.querySelector('img').src = '';
      tableViewImage.style.opacity = 0;
    });
    // if (flat !== undefined) {
    //   tableFlatsRenderContainer.innerHTML += tableFlatTemplate(flat);
    //   cardFlatsRenderContainer.innerHTML += cardFlatTemplate(flat);
    // } else {
    //   break;
    // }
  }
  const lastFlat = cardFlatsRenderContainer.lastElementChild;
  const lastTable = tableFlatsRenderContainer.lastElementChild;
  const callbackTable = (entries) => {
    /* Content excerpted, show below */
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        portionedRenderFlats(flats, endPoint, endPoint + portion, cb);
        observerTable.unobserve(lastTable);
      }
    });
  };
  const observerTable = new IntersectionObserver(callbackTable, options);
  observerTable.observe(lastTable);
  const callback = (entries) => {
    /* Content excerpted, show below */
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        portionedRenderFlats(flats, endPoint, endPoint + portion, cb);
        observer.unobserve(lastFlat);
      }
    });
  };
  const observer = new IntersectionObserver(callback, options);
  const target = lastFlat;
  observer.observe(target);
  cb();
}

/* mobile tolltip for floor plan */
function createTippyContent(path) {
  const some = document.createElement('div');
  const {
    ceil, flats, commerce, floors,
  } = path.dataset;
  // const some = document.querySelector('[data-clone-node-for-tippy]').cloneNode(true);
  some.innerHTML = `
    <table>
      <tr class="section-info-row">
        <td class="section-info-row-subtitle">Поверхів:</td>
        <td class="section-info-row-val" data-render="floors"> ${floors}</td>
      </tr>
      <tr class="section-info-row">
        <td class="section-info-row-subtitle">Квартир:</td>
        <td class="section-info-row-val" data-render="flats">${flats} </td>
      </tr>
      <tr class="section-info-row">
        <td class="section-info-row-subtitle">Висота стель:</td>
        <td class="section-info-row-val" data-render="ceil">${ceil} </td>
      </tr>
      <tr class="section-info-row">
        <td class="section-info-row-subtitle">Комерція:</td>
        <td class="section-info-row-val" data-render="commerce"> ${commerce}</td>
      </tr>
      <tr>
        <td>
          <a class="underlined-link-wrap" href="${path.parentElement.getAttribute('href')}">
            <div class="underlined-link">  Перейти до поверху</div>
            <svg class="icon--build-arrow" role="presentation">
              <use xlink:href="#icon-build-arrow"></use>
            </svg>
          </a>
        </td>
      </tr>
    </table>
  `;
  return some;
}

const pathesForTooltip = document.querySelectorAll('[data-info-path]');
if (document.documentElement.clientWidth < 769) {
  pathesForTooltip.forEach((path) => {
    const pathTippy = tippy(path, {
      content: createTippyContent(path),
      // interactive: true,
      placement: 'bottom',
      allowHTML: true,
      theme: 'light',
    });
    path.parentElement.addEventListener('click', (evt) => {
      evt.preventDefault();
      pathTippy.show();
    });
  });
}

/* Сортировка квартир в списке */
const filterTableTriggers = document.querySelectorAll('[data-filter]');
let currentSortEl = '';
filterTableTriggers.forEach((item) => {
  item.addEventListener('click', () => {
    const filterTablesContainerItems = document.querySelectorAll('[data-table-flats-render]>*');
    const container = document.querySelector('[data-table-flats-render]');
    if (currentSortEl !== item) {
      filterTableTriggers.forEach(t => t.classList.remove('current-sorted'));
      item.classList.add('current-sorted');
    }
    item.classList.toggle('ascent');
    currentSortEl = item;
    if (item.classList.contains('ascent')) {
      Array.from(filterTablesContainerItems)
        .sort((first, second) => (
          +first.dataset[item.dataset.filter] - +second.dataset[item.dataset.filter]
        ))
        .forEach(el => container.insertAdjacentElement('beforeend', el));
    } else {
      Array.from(filterTablesContainerItems)
        .sort((first, second) => (
          +second.dataset[item.dataset.filter] - +first.dataset[item.dataset.filter]
        ))
        .forEach(el => container.insertAdjacentElement('beforeend', el));
    }
  });
});

window.addEventListener('filtering', () => {
  filterTableTriggers.forEach(t => t.classList.remove('current-sorted'));
  filterTableTriggers.forEach(t => t.classList.remove('ascent'));
});
