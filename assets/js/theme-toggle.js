(function(){
  function applyTheme(theme){
    if(theme === 'dark'){
      document.documentElement.setAttribute('data-theme','dark');
      document.getElementById('theme-toggle').textContent = '☀️';
    } else {
      document.documentElement.removeAttribute('data-theme');
      document.getElementById('theme-toggle').textContent = '🌙';
    }
  }

  // Read saved theme
  var saved = localStorage.getItem('site-theme');
  if(saved){
    applyTheme(saved);
  } else {
    // if user prefers dark
    var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark ? 'dark' : 'light');
  }

  // Event listener
  var btn = document.getElementById('theme-toggle');
  if(!btn) return;
  btn.addEventListener('click', function(){
    var current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    var next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('site-theme', next);
  });
})();
