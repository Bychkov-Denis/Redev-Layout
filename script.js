const header = document.querySelector('.header');
const menuBtn = document.querySelector('.header__menu-btn');

menuBtn.addEventListener('click', () => {
  header.classList.toggle('menu-open');
  document.body.classList.toggle('menu-open');
});
