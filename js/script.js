(function() {
  const body = document.querySelector('body');
  const burger = document.querySelector('.burger-menu');
  const navbar = document.querySelector('.navbar');

  burger.addEventListener('click', () => {
    body.classList.toggle('body-active')
    navbar.classList.toggle('navbar-active')
    burger.classList.toggle('burger-menu_active');
  });
}())


new Swiper(".swiper-first", {
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1.13,
      spaceBetween: 22,
    },
    450: {
      slidesPerView: 1.4,
      spaceBetween: 25,
    },
    500: {
      slidesPerView: 1.5,
      spaceBetween: 25,
    },
    560: {
      slidesPerView: 1.7,
      spaceBetween: 33,
    },
    641: {
      slidesPerView: 1.5,
      spaceBetween: 33,
    },
    1051: {
      slidesPerView: 2.1,
      spaceBetween: 33,
    },
    1110: {
      slidesPerView: 2.3,
      spaceBetween: 33,
    },
    1210: {
      slidesPerView: 2.5,
      spaceBetween: 33,
    },
    1600: {
      slidesPerView: 3,
      spaceBetween: 33,
    }
  },
});
