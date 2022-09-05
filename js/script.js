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
    300: {
      slidesPerView: 0.95,
      spaceBetween: 10,
    },
    375: {
      slidesPerView: 1.05,
    },
    440: {
      slidesPerView: 1.2,
    },
    540: {
      slidesPerView: 1.4,
    },
    640: {
      slidesPerView: 1.3,
    },
    870: {
      slidesPerView: 1.6,
    },
    840: {
      slidesPerView: 1.7,
    },
    1000: {
      slidesPerView: 1.9,
    },
    1100: {
      slidesPerView: 2.1,
    },
    1400: {
      slidesPerView: 2.5,
    },
    1600: {
      slidesPerView: 3,
      spaceBetween: 33,
    }
  },
});


new Swiper(".swiper-second", {
  loop: true,
  breakpoints: {
  300: {
    slidesPerView: 0.95,
    spaceBetween: 10,
  },
  1600: {
    slidesPerView: 3,
    spaceBetween: 33,
  }
  }
});
