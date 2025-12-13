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
    })
    .catch((err) => {
      document.getElementById('content').innerHTML = '<p>Page not found.</p>';
      console.error(err);
    });
}

Promise.all([
  loadComponent('navbar', 'components/navbar.html'),
  loadComponent('footer', 'components/footer.html'),
])
  .then(() => {
    if (typeof initNavbar === 'function') initNavbar();
    initHeroContactButton();
    if (typeof router === 'function') router();
  })
  .catch((err) => console.error('Component load failed', err));

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
