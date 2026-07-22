// Theme toggle — standalone on purpose so it never depends on script.js.
// The <head> already set data-theme before paint; this just wires up
// the two toggle buttons (desktop + mobile menu) to flip and persist it.
(function () {
  function currentTheme() {
    return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('theme', theme);
    } catch (e) {
      /* localStorage unavailable (private mode, etc.) — theme still applies for this session */
    }
    var meta = document.getElementById('themeColorMeta');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#0A0A0B' : '#FFFFFF');
    var label = theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme';
    document.querySelectorAll('.theme-toggle').forEach(function (btn) {
      btn.setAttribute('aria-label', label);
    });
  }

  function toggleTheme() {
    applyTheme(currentTheme() === 'dark' ? 'light' : 'dark');
  }

  document.addEventListener('DOMContentLoaded', function () {
    applyTheme(currentTheme()); // sync aria-labels with whatever <head> already set
    document.querySelectorAll('.theme-toggle').forEach(function (btn) {
      btn.addEventListener('click', toggleTheme);
    });
  });
})();
