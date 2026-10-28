(function() {
  const filters = document.querySelector('.publication-filters');
  if (!filters) return;

  const buttons = filters.querySelectorAll('[data-filter]');
  const papers = Array.from(document.querySelectorAll('.paper-box[data-selected]'));
  const status = document.querySelector('.publication-status');

  buttons.forEach(function(button) {
    const selected = button.dataset.filter === 'selected';

    button.addEventListener('click', function() {
      papers.forEach(function(paper) {
        paper.hidden = selected && paper.dataset.selected !== 'true';
      });
      buttons.forEach(function(item) {
        item.setAttribute('aria-pressed', String(item === button));
      });
      status.textContent = selected ? 'Showing selected publications.' : 'Showing all publications.';
    });
  });
})();
