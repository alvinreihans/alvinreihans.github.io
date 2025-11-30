// =========================
// SPA ROUTER FINAL
// =========================

function router() {
  // ambil hash tanpa '#'
  let page = location.hash.replace('#', '').trim();

  // jika hash kosong → halaman default: home
  if (!page) page = 'home';

  // validasi: apakah file nya ada?
  const validPages = ['home', 'works', 'blog'];
  if (!validPages.includes(page)) {
    page = '404'; // fallback ke halaman error
  }

  // jalankan animasi fade-out sebelum ganti halaman
  const container = document.getElementById('content');
  if (container) {
    container.classList.add('fade-out');
  }

  // delay agar animasi jalan sebelum ganti konten
  setTimeout(() => {
    loadContent(page).then(() => {
      setActiveNav(page);
      // setelah konten masuk → fade-in animasi
      container.classList.remove('fade-out');
      container.classList.add('fade-in');

      // scroll ke atas
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }, 150);

  // otomatis tutup menu mobile setelah navigasi
  const nav = document.querySelector('.navigation');
  if (nav && nav.classList.contains('open')) {
    nav.classList.remove('open');
  }
}

// trigger router:
window.addEventListener('hashchange', router);
window.addEventListener('load', router);
