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
const floorLinkPathes = document.querySelectorAll('[data-info-path]');
floorLinkPathes.forEach(renderPathesInfo);

const sectionFromUrl = new URLSearchParams(window.location.search);
document.querySelector(`.genplan-svg [data-section='${sectionFromUrl.get('section')}']`).style.fill = 'var(--color-gold)';
console.log();
