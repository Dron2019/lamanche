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
    lat: 50.472626, lng: 30.5142653,
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
    console.log(categoriesArray.size);
    gmarkers1.forEach((el) => {
      if (categoriesArray.has(el.category) || categoriesArray.size <= 1) {
        el.setMap(map);
        el.setAnimation(google.maps.Animation.DROP);
      } else {
        el.setMap(null);
      }
    });
  };
  filterItems.forEach((item) => {
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

  const baseFolder = './assets/images/map/';
  // const baseFolder = './assets/images/markers/';
  const defaultMarkerSize = new google.maps.Size(40, 50);
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
  };
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
      content: '<div>PARK</div>',
      position: { lat: 50.472626, lng: 30.5142653 },
      type: 'main',
      icon: { url: markersAdresses.main, scaledSize: buildLogoSize },
    },
    {
      content: '<div>PARK</div>',
      position: { lat: 50.473626, lng: 30.5153653 },
      type: 'cinema',
      icon: { url: markersAdresses.cinema, scaledSize: defaultMarkerSize },
    },
    {
      content: '<div>PARK</div>',
      position: { lat: 50.474626, lng: 30.5153653 },
      type: 'game',
      icon: { url: markersAdresses.game, scaledSize: defaultMarkerSize },
    },
    {
      content: '<div>PARK</div>',
      position: { lat: 50.475626, lng: 30.5153653 },
      type: 'metro',
      icon: { url: markersAdresses.metro, scaledSize: defaultMarkerSize },
    },
    {
      content: '<div>PARK</div>',
      position: { lat: 50.476626, lng: 30.5153653 },
      type: 'education',
      icon: { url: markersAdresses.shop, scaledSize: defaultMarkerSize },
    },
    {
      content: '<div>PARK</div>',
      position: { lat: 50.477626, lng: 30.5153653 },
      type: 'forest',
      icon: { url: markersAdresses.forest, scaledSize: defaultMarkerSize },
    },
    {
      content: '<div>PARK</div>',
      position: { lat: 50.478626, lng: 30.5153653 },
      type: 'med',
      icon: { url: markersAdresses.med, scaledSize: defaultMarkerSize },
    },
    {
      content: '<div>PARK</div>',
      position: { lat: 50.479626, lng: 30.5153653 },
      type: 'supermarket',
      icon: { url: markersAdresses.supermarket, scaledSize: defaultMarkerSize },
    },
  ];

  const markersCategoriesList = new Set();
  markersData.forEach((el) => { markersCategoriesList.add(el.type); });
  console.log(markersCategoriesList);
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
      infowindow.setContent(marker.content);
      infowindow.open(map, mapMarker);
      map.panTo(this.getPosition());
    });
    mapMarker.name = marker.type;
    gmarkers1.push(mapMarker);
  });
}

window.addEventListener('load', () => {
  /** Выдвижная панель маркеров на мобильной версии */
//   const legend = document.querySelector('[data-mob-accordeon]');
//   const legendTitle = legend.querySelector('.map__legend-title');
//   legendTitle.addEventListener('click', () => {
//     legend.classList.toggle('opened');
//     // добавить плавность появление блока с маркерами
//     if (legend.classList.contains('opened')) {
//       gsap.fromTo('.map__legend-markers-wrap', { height: 0 },
//         { height: '50vh' });
//     } else {
//       gsap.fromTo('.map__legend-markers-wrap', { height: '50vh' }, { height: 0 });
//     }
//   });
//   legend.addEventListener('mouseenter', () => {
//     if (locoScroll !== undefined) locoScroll.stop();
//   });
//   legend.addEventListener('mouseleave', () => {
//     if (locoScroll !== undefined) locoScroll.start();
//   });
});
