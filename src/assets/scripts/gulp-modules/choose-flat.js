/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-disable prefer-destructuring */
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
const floorLinkPathes = document.querySelectorAll('.floor-plan [data-info-path]');
floorLinkPathes.forEach(renderPathesInfo);


function createTippyContent(path) {
  const some = document.createElement('div');
  const {
    rooms, all_room, live_room, section,
  } = path.dataset;
  console.log(path);
  // const some = document.querySelector('[data-clone-node-for-tippy]').cloneNode(true);
  some.innerHTML = `
    <table data-clone-node-for-tippy>
      <tr class="section-info-row">
        <td class="section-info-row-subtitle">Секція:</td>
        <td class="section-info-row-val" data-render="section">${section}</td>
      </tr>
      <tr class="section-info-row">
        <td class="section-info-row-subtitle">Кімнат:</td>
        <td class="section-info-row-val" data-render="rooms">${rooms}</td>
      </tr>
      <tr class="section-info-row">
        <td class="section-info-row-subtitle">Загальна площа:</td>
        <td class="section-info-row-val" data-render="all_room"> ${all_room} м2</td>
      </tr>
      <tr class="section-info-row">
        <td class="section-info-row-subtitle">Житлова площа:</td>
        <td class="section-info-row-val" data-render="live_room">${live_room} м2</td>
      </tr>
      <tr>
        <td>
          <a class="underlined-link-wrap" href="${path.parentElement.getAttribute('xlink:href')}">
            <div class="underlined-link">  Перейти до квартири</div>
            <svg class="icon--build-arrow" role="presentation">
              <use xlink:href="#icon-build-arrow"></use>
            </svg>
          </a>
        </td>
      </tr>
    </table>
  `;
  // some.querySelector('tbody').innerHTML += `
  //   <tr>
  //     <td>
  //       <a class="underlined-link-wrap" href="${path.parentElement.getAttribute('xlink:href')}">
  //         <div class="underlined-link">  Перейти до квартири</div>
  //         <svg class="icon--build-arrow" role="presentation">
  //           <use xlink:href="#icon-build-arrow"></use>
  //         </svg>
  //       </a>
  //     </td>
  //   </tr>
  //   `;
  //   some.innerHTML = `
  //       <div class="df fdc tooltip-inner">
  //         <span>
  //           <span class="tooltip-big-digit">${path.dataset.rooms || ''} </span>
  //           ${path.dataset.section || ''}
  //         </span>
  //         <a href="${path.parentElement.getAttribute('xlink:href')}">Перейти до квартири</a>
  //       </div>
  //     `;
  return some;
}

if (document.documentElement.clientWidth < 769) {
  floorLinkPathes.forEach((path) => {
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

const sectionFromUrl = new URLSearchParams(window.location.search);
document.querySelector(`.genplan-svg [data-section='${sectionFromUrl.get('section')}']`).style.fill = 'var(--color-gold)';
