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


const breakpoints = {
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
}

new Swiper(".swiper-first", {
  loop: true,
  breakpoints: breakpoints,
  navigation: {
    nextEl: '.first-swiper-button-next',
  }
});


new Swiper(".swiper-second", {
  loop: true,
  breakpoints: breakpoints,
  navigation: {
    nextEl: '.second-swiper-button-next',
  }
});

new Swiper(".swiper-third", {
  loop: true,
  navigation: {
    nextEl: '.third-swiper-button-next',
  },
  breakpoints: {
    300: {
      slidesPerView: .5,
    },
    350: {
      slidesPerView: 1,
    },
    440: {
      spaceBetween: 24.56,
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

// $(document).ready(function () {
//   $('.right-block__title').click(function () {
//     $(this).togg
//   });
// });

(function () {
  const title = document.querySelectorAll('.right-block__title');
  const text = document.querySelectorAll('.right-block__text');


  title.forEach(item => {
    item.addEventListener('click', (evt => {
      const element = evt.target;
      const sibling = evt.target.nextElementSibling;

      title.forEach(t1 => {
        if (t1 !== element) {
          t1.classList.remove('active-accordion');
        }
      });
      text.forEach(t2 => {
        if (t2 !== sibling) {
          t2.classList.remove('active-accordion');
        }
      });

      element.classList.toggle('active-accordion');
      sibling.classList.toggle('active-accordion');
    }));
  });

}())
