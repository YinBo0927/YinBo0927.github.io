(function() {
  const panel = document.querySelector('.news-panel');
  if (!panel) return;

  const button = panel.querySelector('.news-toggle');
  const archive = panel.querySelector('.news-archive');
  const label = button.querySelector('span');

  archive.inert = true;
  panel.classList.add('news-collapsible');
  button.hidden = false;

  button.addEventListener('click', function() {
    const expanded = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(expanded));
    panel.classList.toggle('is-expanded', expanded);
    archive.inert = !expanded;
    label.textContent = expanded ? 'Show less' : 'Earlier updates';
  });
})();
