const navbar = document.querySelector('nav');
const hamburgerButton = document.querySelector('.menu-btn');
const navbarUl = document.querySelector('.ul-nav');
let menuOpened = false;


navbarUl.classList.add('hidden');
hamburgerButton.addEventListener('click', (e) => {
  if (!menuOpened) {
    hamburgerButton.classList.add('open');
    menuOpened = true;
  } else {
    
    hamburgerButton.classList.remove('open');
    menuOpened = false;
  }


  if (menuOpened) {
    navbar.style.height = 'auto';
  } else {
    navbar.style.height = '4rem';
  }

  navbarUl.classList.toggle('hidden');
  
});