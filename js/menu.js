// (() => {
//   const refs = {
//     openMenuBtn: document.querySelector('.menu-open-btn'),
//     closeMenuBtn: document.querySelector('.menu-close-btn'),
//     menu: document.querySelector('.mob-menu-top'),
//     body: document.querySelector('body'),
//   };
//   refs.openMenuBtn.addEventListener('click', toggleMenu);
//   refs.closeMenuBtn.addEventListener('click', toggleMenu);
//   function toggleMenu() {
//     refs.menu.classList.toggle('is-hidden');
//     refs.body.classList.toggle('no-scroll');
//   }
// })();

// (() => {
//   const refs = {
//     openMenuBtn: document.querySelector('[menu-open-btn]'),
//     closeMenuBtn: document.querySelector('[menu-close-btn]'),
//     menu: document.querySelector('[mob-menu]'),
//     body: document.querySelector('body'),
//   };
//   refs.openMenuBtn.addEventListener('click', toggleMenu);
//   refs.closeMenuBtn.addEventListener('click', toggleMenu);
//   function toggleMenu() {
//     refs.menu.classList.toggle('is-hidden');
//     refs.body.classList.toggle('no-scroll');
//   }
// })();

(() => {
  const refs = {
    openMenuBtn: document.querySelector('.menu-open-btn'),
    closeMenuBtn: document.querySelector('.menu-close-btn'),
    menu: document.querySelector('.mob-menu'),
    body: document.querySelector('body'),
  };
  console.log('refs :>> ', refs);
  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  function toggleMenu() {
    console.log('111 :>> ', 111);
    refs.menu.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
