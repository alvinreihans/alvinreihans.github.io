// loadComponent mengembalikan Promise sehingga kita bisa menunggu selesai
function loadComponent(id, url) {
  return fetch(url)
    .then((res) => {
      if (!res.ok) throw new Error('Failed loading ' + url);
      return res.text();
    })
    .then((html) => {
      document.getElementById(id).innerHTML = html;
    });
}

// loadContent juga Promise-friendly
function loadContent(page) {
  const url = `contents/${page}.html`;
  return fetch(url)
    .then((res) => {
      if (!res.ok) throw new Error('Failed loading ' + url);
      return res.text();
    })
    .then((html) => {
      document.getElementById('content').innerHTML = html;
      if (page === 'home') initHeroContactButton();
      // opsional: jalankan fungsi inisialisasi untuk page (mis: initHome())
    })
    .catch((err) => {
      // fallback kalau file tidak ditemukan
      document.getElementById('content').innerHTML = '<p>Page not found.</p>';
      console.error(err);
    });
}

// Setelah navbar dan footer selesai dimuat
Promise.all([
  loadComponent('navbar', 'components/navbar.html'),
  loadComponent('footer', 'components/footer.html'),
])
  .then(() => {
    initNavbar(); // <— panggil fungsi init navbar
    initHeroContactButton(); // <— tambahkan ini
    if (typeof router === 'function') router();
  })
  .catch((err) => console.error('Component load failed', err));

// ===============================
//  NAVBAR INIT
// ===============================
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
        navigation.classList.remove('open');

        // GANTI HALAMAN
        if (page) location.hash = page;
      });
    });
  }
}

function initHeroContactButton() {
  const btn = document.getElementById('hero-contact-btn');

  if (btn) {
    btn.addEventListener('click', () => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth',
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
