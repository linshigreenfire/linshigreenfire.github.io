// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Highlight active nav link based on current page
(function () {
  var path = window.location.pathname.split('/').pop() || 'index.html';
  var links = document.querySelectorAll('header nav a');
  links.forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === path) {
      link.classList.add('active');
    }
  });
})();
