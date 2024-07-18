window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'; // Change background color on scroll
    } else {
      navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Revert back to default background color
    }
  });
  