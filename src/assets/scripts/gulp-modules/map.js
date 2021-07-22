// [data-map]

/* eslint-disable no-undef */
// Google map start
function func() {
  const script = document.createElement('script');
  let key = 'AIzaSyC5AXf3Yw3tgHbODRCUwOMHJRvpKOLmJ2Q';
  if (window.location.href.match(/localhost/)) key = '';
  // const key = '';
  script.src = `https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`;
  document.getElementsByTagName('head')[0].appendChild(script);
}
// setTimeout(func, 1000);
const maps = document.querySelectorAll('.map');
const options = {
  rootMargin: '0px',
  threshold: 0.1,
};

maps.forEach((image) => {
  const callback = function (entries, observer) {
    /* Content excerpted, show below */
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const lazyImage = entry.target;
        lazyImage.src = lazyImage.dataset.src;
        observer.unobserve(image);
        func();
      }
    });
  };
  const observer = new IntersectionObserver(callback, options);
  const target = image;
  observer.observe(target);
});

// eslint-disable-next-line no-unused-vars
function initMap() {
  const gmarkers1 = [];
  const center = {
    lat: 50.47315200396692, lng: 30.517570821411027,
  };
    /** Массив, куда записываются выбраные категории */
  const choosedCategories = new Set();
  choosedCategories.add('main');
  /** Елементы, при клике на который будет происходить фильтрация */
  const filterItems = document.querySelectorAll('[data-marker]');
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center,
    scrollwheel: false,
    navigationControl: false,
    mapTypeControl: false,
    scaleControl: false,
    draggable: true,
    language: 'en',
    styles: [
      {
        featureType: 'administrative',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#444444',
          },
        ],
      },
      {
        featureType: 'landscape',
        elementType: 'all',
        stylers: [
          {
            color: '#f2f2f2',
          },
        ],
      },
      {
        featureType: 'poi',
        elementType: 'all',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'road',
        elementType: 'all',
        stylers: [
          {
            saturation: -100,
          },
          {
            lightness: 45,
          },
        ],
      },
      {
        featureType: 'road.highway',
        elementType: 'all',
        stylers: [
          {
            visibility: 'simplified',
          },
        ],
      },
      {
        featureType: 'road.arterial',
        elementType: 'labels.icon',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'transit',
        elementType: 'all',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'water',
        elementType: 'all',
        stylers: [
          {
            color: '#a6b6bc',
          },
          {
            visibility: 'on',
          },
        ],
      },
    ],

  });
  const filterMarkers = function (category, categoriesArray) {
    // console.log(categoriesArray);
    gmarkers1.forEach((el) => {
      console.log(el.category, categoriesArray.has(el.category), 'FILTER');
      if (categoriesArray.has(el.category) || categoriesArray.size <= 1) {
        el.setMap(map);
        el.setAnimation(google.maps.Animation.DROP);
      } else {
        el.setMap(null);
      }
    });
  };
  filterItems.forEach((item) => {
    // console.log(item);
    item.addEventListener('click', () => {
      item.classList.toggle('active');
      if (item.classList.contains('active')) {
        choosedCategories.add(item.dataset.category);
      } else {
        choosedCategories.delete(item.dataset.category);
      }
      filterMarkers('main', choosedCategories);
    });
  });

  let baseFolder = '/wp-content/themes/lamanche/assets/images/map/';
  if (window.location.href.match(/localhost/)) baseFolder = './assets/images/map/';
  // const baseFolder = './assets/images/markers/';
  const defaultMarkerSize = new google.maps.Size(44, 60);
  const buildLogoSize = new google.maps.Size(87, 87);
  const markersAdresses = {
    main: `${baseFolder}marker-main.png`,
    cinema: `${baseFolder}marker-cinema.svg`,
    game: `${baseFolder}marker-game.svg`,
    metro: `${baseFolder}marker-metro.svg`,
    education: `${baseFolder}marker-education.svg`,
    shop: `${baseFolder}marker-shop.svg`,
    forest: `${baseFolder}marker-forest.svg`,
    med: `${baseFolder}marker-med.svg`,
    supermarket: `${baseFolder}marker-supermarket.svg`,
    sport: `${baseFolder}marker-sport.svg`,
    bank: `${baseFolder}marker-bank.svg`,
    museum: `${baseFolder}marker-museum.svg`,
  };

  const currentLang = (function () {
    const location = window.location.href;
    if (location.match(/\/en\//)) return 'en';
    if (location.match(/\/ru\//)) return 'ru';
    return 'ua';
  }());
  // eslint-disable-next-line no-unused-vars
  const markerPopupStyle = `
          style="
          background: #1798D5;
          padding:5px 10px;
          font-weight: 500;
          font-size: 14px;
          line-height: 22px;"
          `;


  /* beautify preserve:start */
  const markersData = [
    {
      content: {
        ua: '<div>ЖК "La Manche"</div>',
        ru: '<div>ЖК "La Manche"</div>',
        en: '<div>Residential complex"La Manche"</div>',
      },
      position: { lat: 50.47315200396692, lng: 30.517570821411027 },
      type: 'main',
      icon: { url: markersAdresses.main, scaledSize: buildLogoSize },
    },
    {
      content: {
        ua: '<div>Медицинська установа</div>',
        ru: '<div>Медицинское учреждение</div>',
        en: '<div>Medicine</div>',
      },
      position: { lat: 50.473781, lng: 30.512321 },
      type: 'med',
      icon: { url: markersAdresses.med, scaledSize: defaultMarkerSize },
    },
    {
      content: {
        ua: '<div>Дитячий садочок</div>',
        ru: '<div>Детский садик</div>',
        en: '<div>Kindergarten</div>',
      },
      position: { lat: 50.472021, lng: 30.513921 },
      type: 'game',
      icon: { url: markersAdresses.game, scaledSize: defaultMarkerSize },
    },
    {
      content: {
        ua: '<div>Заклад освіти</div>',
        ru: '<div>Образовательное учреждение</div>',
        en: '<div>Education</div>',
      },
      position: { lat: 50.472894, lng: 30.513015 },
      type: 'education',
      icon: { url: markersAdresses.education, scaledSize: defaultMarkerSize },
    },
    {
      content: {
        ua: '<div>Банк</div>',
        ru: '<div>Банк</div>',
        en: '<div>Bank</div>',
      },
      position: { lat: 50.472159, lng: 30.502965 },
      type: 'bank',
      icon: { url: markersAdresses.bank, scaledSize: defaultMarkerSize },
    },
    {
      content: {
        ua: '<div>Банк</div>',
        ru: '<div>Банк</div>',
        en: '<div>Bank</div>',
      },
      position: { lat: 50.472355, lng: 30.511470 },
      type: 'bank',
      icon: { url: markersAdresses.bank, scaledSize: defaultMarkerSize },
    },
    {
      content: {
        ua: '<div>Медицинська установа</div>',
        ru: '<div>Медицинское учреждение</div>',
        en: '<div>Medicine</div>',
      },
      position: { lat: 50.471460, lng: 30.512037 },
      type: 'med',
      icon: { url: markersAdresses.med, scaledSize: defaultMarkerSize },
    },
    {
      content: {
        ua: '<div>Метро</div>',
        ru: '<div>Метро</div>',
        en: '<div>Metro</div>',
      },
      position: { lat: 50.466557, lng: 30.513491 },
      type: 'metro',
      icon: { url: markersAdresses.metro, scaledSize: defaultMarkerSize },
    },
    {
      content: {
        ua: '<div>Музей</div>',
        ru: '<div>Музей</div>',
        en: '<div>Museum</div>',
      },
      position: { lat: 50.466369, lng: 30.517440 },
      type: 'museum',
      icon: { url: markersAdresses.museum, scaledSize: defaultMarkerSize },
    },
    {
      content: {
        ua: '<div>Заклад освіти</div>',
        ru: '<div>Образовательное учреждение</div>',
        en: '<div>Education</div>',
      },
      position: { lat: 50.465546, lng: 30.522570 },
      type: 'education',
      icon: { url: markersAdresses.education, scaledSize: defaultMarkerSize },
    },
    {
      content: {
        ua: '<div>Заклад освіти</div>',
        ru: '<div>Образовательное учреждение</div>',
        en: '<div>Education</div>',
      },
      position: { lat: 50.467424, lng: 30.507700 },
      type: 'education',
      icon: { url: markersAdresses.education, scaledSize: defaultMarkerSize },
    },
    {
      content: {
        ua: '<div>Заклад освіти</div>',
        ru: '<div>Образовательное учреждение</div>',
        en: '<div>Education</div>',
      },
      position: { lat: 50.467384, lng: 30.508963 },
      type: 'education',
      icon: { url: markersAdresses.education, scaledSize: defaultMarkerSize },
    },
    {
      content: {
        ua: '<div>Кінотеатр</div>',
        ru: '<div>Кинотеатр</div>',
        en: '<div>Cinema</div>',
      },
      position: { lat: 50.468431, lng: 30.510183 },
      type: 'cinema',
      icon: { url: markersAdresses.cinema, scaledSize: defaultMarkerSize },
    },
    {
      content: {
        ua: '<div>Спортивний заклад</div>',
        ru: '<div>Спорт</div>',
        en: '<div>Sport</div>',
      },
      position: { lat: 50.472831, lng: 30.511344 },
      type: 'sport',
      icon: { url: markersAdresses.sport, scaledSize: defaultMarkerSize },
    },
    {
      content: {
        ua: '<div>Метро</div>',
        ru: '<div>Метро</div>',
        en: '<div>Metro</div>',
      },
      position: { lat: 50.474018, lng: 30.503866 },
      type: 'metro',
      icon: { url: markersAdresses.metro, scaledSize: defaultMarkerSize },
    },
    {
      content: {
        ua: '<div>Магазин</div>',
        ru: '<div>Магазин</div>',
        en: '<div>Shop</div>',
      },
      position: { lat: 50.471777, lng: 30.507165 },
      type: 'shop',
      icon: { url: markersAdresses.shop, scaledSize: defaultMarkerSize },
    },
    {
      content: {
        ua: '<div>Супермаркет</div>',
        ru: '<div>Супермаркет</div>',
        en: '<div>Supermarket</div>',
      },
      position: { lat: 50.471321, lng: 30.517450 },
      type: 'supermarket',
      icon: { url: markersAdresses.supermarket, scaledSize: defaultMarkerSize },
    },
  ];
  const markersCategoriesList = new Set();
  markersData.forEach((el) => { markersCategoriesList.add(el.type); });
  // console.log(markersCategoriesList);
  /* beautify preserve:end */
  const infowindow = new google.maps.InfoWindow({
    content: '',
    maxWidth: 200,
  });
  markersData.forEach((marker) => {
    const category = marker.type;
    const mapMarker = new google.maps.Marker({
      map,
      category,
      icon: marker.icon,
      position: new google.maps.LatLng(marker.position.lat, marker.position.lng),
    });


    google.maps.event.addListener(mapMarker, 'click', function () {
      infowindow.setContent(marker.content[currentLang]);
      infowindow.open(map, mapMarker);
      map.panTo(this.getPosition());
    });
    mapMarker.name = marker.type;
    gmarkers1.push(mapMarker);
  });
}

window.addEventListener('load', () => {
  /** Выдвижная панель маркеров на мобильной версии */
  const legend = document.querySelector('[data-mob-accordeon]');
  const legendTitle = legend.querySelector('.map-wrap__legend-title');
  legendTitle.addEventListener('click', () => {
    legend.classList.toggle('opened');
    // добавить плавность появление блока с маркерами
    if (legend.classList.contains('opened')) {
      gsap.fromTo('.map-wrap__legend-markers-wrap', { height: 0 },
        { height: '35vh' });
    } else {
      gsap.fromTo('.map-wrap__legend-markers-wrap', { height: '35vh' }, { height: 0 });
    }
  });
  legend.addEventListener('mouseenter', () => {
    if (locoScroll !== undefined) locoScroll.stop();
  });
  legend.addEventListener('mouseleave', () => {
    if (locoScroll !== undefined) locoScroll.start();
  });
});
