function initNavbar() {
  // sticky navbar
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    if (window.scrollY > 20) navbar.classList.add('sticky');
    else navbar.classList.remove('sticky');
  });

  const toggleBar = document.querySelector('.toggle-bar');
  const navigation = document.querySelector('.navigation');
  const navLinks = document.querySelectorAll('.navigation li');

  if (toggleBar && navigation) {
    // toggle hamburger
    toggleBar.addEventListener('click', () => {
      toggleBar.classList.toggle('active'); // animasi X
      navigation.classList.toggle('open');
    });
  }

  if (navLinks && navLinks.length) {
    // active menu switch & change hash
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        const page = link.getAttribute('data-page');

        // highlight
        navLinks.forEach((l) => l.classList.remove('active'));
        link.classList.add('active');

        // close mobile menu
        if (toggleBar) toggleBar.classList.remove('active');
        if (navigation) navigation.classList.remove('open'); // Tambahkan cek untuk navigation

        // GANTI HALAMAN
        if (page) location.hash = page;
      });
    });
  }
}

function setActiveNav(page) {
  const links = document.querySelectorAll('.navigation li');
  if (!links) return;
  links.forEach((l) => {
    l.classList.toggle('active', l.getAttribute('data-page') === page);
  });
}
