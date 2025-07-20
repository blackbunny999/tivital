// script.js
function toggleTheme() {
  const h = document.documentElement;
  h.setAttribute(
    'data-theme',
    h.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
  );
}
