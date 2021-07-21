const sectionFromUrl = new URLSearchParams(window.location.search);
const sectionToPaint = document.querySelector(`.genplan-svg [data-section='${sectionFromUrl.get('section')}']`);
if (sectionToPaint !== null) {
  sectionToPaint.style.fill = 'var(--color-gold)';
}
