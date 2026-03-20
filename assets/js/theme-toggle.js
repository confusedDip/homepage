(function() {
  var storageKey = 'theme';
  var root = document.documentElement;
  var button = document.getElementById('theme-toggle');

  if (!button) {
    return;
  }

  function getTheme() {
    return root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  }

  function persistTheme(theme) {
    try {
      localStorage.setItem(storageKey, theme);
    } catch (error) {}
  }

  function renderTheme(theme) {
    var nextTheme = theme === 'dark' ? 'dark' : 'light';
    var isDark = nextTheme === 'dark';
    var icon = button.querySelector('.theme-toggle__icon');
    var label = button.querySelector('.theme-toggle__label');

    root.setAttribute('data-theme', nextTheme);
    button.setAttribute('aria-pressed', isDark ? 'true' : 'false');
    button.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');

    if (icon) {
      icon.textContent = isDark ? '☀' : '☾';
    }

    if (label) {
      label.textContent = isDark ? 'Light mode' : 'Dark mode';
    }
  }

  renderTheme(getTheme());

  button.addEventListener('click', function() {
    var nextTheme = getTheme() === 'dark' ? 'light' : 'dark';
    renderTheme(nextTheme);
    persistTheme(nextTheme);
  });
})();
