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
