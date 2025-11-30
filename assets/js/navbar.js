// // Event delegation: tunggu klik di seluruh dokumen
// document.addEventListener('click', function (e) {
//   // 1) Toggle bar (mobile)
//   const toggle = e.target.closest('.toggle-bar');
//   if (toggle) {
//     const nav = document.querySelector('.navigation');
//     if (nav) nav.classList.toggle('open');
//     return; // selesai jika klik toggle
//   }

//   // 2) Klik menu (elemen dengan atribut data-page)
//   const menu = e.target.closest('[data-page]');
//   if (menu) {
//     const page = menu.getAttribute('data-page');
//     if (page) {
//       // ubah hash — ini akan memicu 'hashchange' dan menjalankan router
//       location.hash = page;
//       // jika menu dibuka di mobile, tutup setelah klik
//       const nav = document.querySelector('.navigation');
//       if (nav && nav.classList.contains('open')) nav.classList.remove('open');
//     }
//   }
// });
