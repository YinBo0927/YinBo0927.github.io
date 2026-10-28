(function() {
  const filters = document.querySelector('.publication-filters');
  if (!filters) return;

  const buttons = filters.querySelectorAll('[data-filter]');
  const papers = Array.from(document.querySelectorAll('.paper-box[data-selected]'));
  const status = document.querySelector('.publication-status');

  function moveIndicator() {
    const active = filters.querySelector('[aria-pressed="true"]');
    filters.style.setProperty('--filter-left', active.offsetLeft + 'px');
    filters.style.setProperty('--filter-width', active.offsetWidth + 'px');
  }

  moveIndicator();
  filters.classList.add('is-ready');
  new ResizeObserver(moveIndicator).observe(filters);

  buttons.forEach(function(button) {
    const selected = button.dataset.filter === 'selected';

    button.addEventListener('click', function() {
      if (button.getAttribute('aria-pressed') === 'true') return;

      papers.forEach(function(paper) {
        paper.getAnimations().forEach(function(animation) { animation.cancel(); });
        paper.hidden = selected && paper.dataset.selected !== 'true';
      });
      buttons.forEach(function(item) {
        item.setAttribute('aria-pressed', String(item === button));
      });
      moveIndicator();
      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        papers.filter(function(paper) { return !paper.hidden; }).forEach(function(paper, index) {
          paper.animate([
            { opacity: .4, transform: 'translateY(8px)' },
            { opacity: 1, transform: 'translateY(0)' }
          ], {
            duration: 320,
            delay: Math.min(index, 5) * 25,
            easing: 'cubic-bezier(.22, 1, .36, 1)',
            fill: 'backwards'
          });
        });
      }
      status.textContent = selected ? 'Showing selected publications.' : 'Showing all publications.';
    });
  });
})();
