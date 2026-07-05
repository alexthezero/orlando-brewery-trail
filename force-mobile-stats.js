function forceMobileStatsRow() {
  const grid = document.querySelector('.summary-grid');
  if (!grid) return;

  const isMobile = window.matchMedia('(max-width: 720px)').matches;
  const cards = Array.from(grid.querySelectorAll('article'));

  if (!isMobile) {
    grid.removeAttribute('style');
    cards.forEach((card) => card.removeAttribute('style'));
    cards.forEach((card) => {
      const number = card.querySelector('span');
      const label = card.querySelector('p');
      if (number) number.removeAttribute('style');
      if (label) label.removeAttribute('style');
    });
    return;
  }

  grid.style.setProperty('display', 'grid', 'important');
  grid.style.setProperty('grid-template-columns', 'repeat(3, minmax(0, 1fr))', 'important');
  grid.style.setProperty('gap', '8px', 'important');
  grid.style.setProperty('margin', '12px 0', 'important');

  cards.forEach((card) => {
    card.style.setProperty('width', 'auto', 'important');
    card.style.setProperty('min-width', '0', 'important');
    card.style.setProperty('min-height', '76px', 'important');
    card.style.setProperty('padding', '10px 5px', 'important');
    card.style.setProperty('display', 'grid', 'important');
    card.style.setProperty('place-items', 'center', 'important');
    card.style.setProperty('align-content', 'center', 'important');
    card.style.setProperty('border-radius', '18px', 'important');
  });

  cards.forEach((card) => {
    const number = card.querySelector('span');
    const label = card.querySelector('p');

    if (number) {
      number.style.setProperty('font-size', '1.38rem', 'important');
      number.style.setProperty('line-height', '1', 'important');
      number.style.setProperty('margin-bottom', '5px', 'important');
    }

    if (label) {
      label.style.setProperty('font-size', '0.68rem', 'important');
      label.style.setProperty('line-height', '1.1', 'important');
      label.style.setProperty('margin', '0', 'important');
      label.style.setProperty('text-align', 'center', 'important');
    }
  });
}

window.addEventListener('load', forceMobileStatsRow);
window.addEventListener('resize', forceMobileStatsRow);

const originalRenderForStats = typeof renderBreweries === 'function' ? renderBreweries : null;
if (originalRenderForStats) {
  renderBreweries = function (...args) {
    originalRenderForStats.apply(this, args);
    forceMobileStatsRow();
  };
}

setTimeout(forceMobileStatsRow, 150);
setTimeout(forceMobileStatsRow, 500);
