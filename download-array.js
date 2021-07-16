/* eslint-disable array-callback-return */
/* eslint-disable prefer-template */
const fetch = require('node-fetch');
const fs = require('fs');

const urls = [
  'https://perfect-group.ua/wp-content/uploads/Logos/PG-_Terracotta-RU-white.svg',
  'https://perfect-group.ua/wp-content/uploads/Logos/Lebediny-svg-white_ru.svg',
  'https://perfect-group.ua/wp-content/uploads/Logos/ALL_PG_logos-_Stanford-mono.svg',
  'https://perfect-group.ua/wp-content/uploads/la-manche-bb-final.svg',
  'https://perfect-group.ua/wp-content/uploads/chisto-belyj-bez-podlozhki.png',
  'https://perfect-group.ua/wp-content/uploads/logo_polaris_transparent.svg',
  'https://perfect-group.ua/wp-content/uploads/Logos/PG_white-V.svg',
  'https://perfect-group.ua/wp-content/uploads/Logos/Rybalsky_ua-white.svg',
  'https://perfect-group.ua/wp-content/uploads/logo.svg',
  'https://perfect-group.ua/wp-content/uploads/Trabotti_LOGObook2.svg',
  'https://perfect-group.ua/wp-content/uploads/kandinsky_logo_white.svg',
  'https://perfect-group.ua/wp-content/uploads/Logos/PG-_Rusaniv-RU-mono.svg',
  'https://perfect-group.ua/wp-content/uploads/Logos/Philadelphia-mono-1.svg',
  'https://perfect-group.ua/wp-content/uploads/PTL_white.svg',
  'https://perfect-group.ua/wp-content/uploads/logo_FRANKLIN_white.svg',
  'https://perfect-group.ua/wp-content/uploads/Logos/garden-white.svg',
  'https://perfect-group.ua/wp-content/uploads/Logos/5kv_ru-white.svg',
  'https://perfect-group.ua/wp-content/uploads/Logos/new-_woods_ru-white.svg',
  'https://perfect-group.ua/wp-content/uploads/Logos/PG_white-V.svg',
  'https://perfect-group.ua/wp-content/uploads/Logos/bereg1_ru-white.svg',
];
urls.map((file) => {
  fetch(file).then((response) => {
    console.log(response);
    response.body.pipe(fs.createWriteStream('src/assets/images/developer/' + response.url.split('/').pop()));
  });
});
