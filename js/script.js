(function openMenu() {
  const burger = document.querySelector('.burger-menu');
  const navbar = document.querySelector('.navbar');

  burger.addEventListener('click', () => {
    navbar.classList.toggle('navbar-active')
    burger.classList.toggle('burger-menu_active');
  });
}())
