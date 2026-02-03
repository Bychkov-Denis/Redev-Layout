const swiper = new Swiper('.testimonials__slider', {
  spaceBetween: 20,
  speed: 500,
  grabCursor: true,
  freeMode: false,
  centeredSlides: true,
  centerInsufficientSlides: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesOffsetBefore: 20,
    },
  },
});

const header = document.querySelector('.header');
const menuBtn = document.querySelector('.header__menu-btn');

menuBtn.addEventListener('click', () => {
  header.classList.toggle('menu-open');
  document.body.classList.toggle('menu-open');
});
