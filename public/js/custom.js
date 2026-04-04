// static/js/custom.js
document.querySelectorAll('.navigation-item a').forEach(link => {
  // Check if the link's URL matches the current window's URL
  if (link.href === window.location.href || (window.location.pathname === '/' && link.getAttribute('href') === '/')) {
    link.style.color = '#F59E0B';
    link.style.fontWeight = 'bold';
    link.style.borderBottom = '2px solid #F59E0B';
  }
});