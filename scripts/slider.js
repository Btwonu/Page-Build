const allImages = document.querySelectorAll('.slider-image');
const leftBtn = document.querySelector('#slider-btn-left');
const rightBtn = document.querySelector('#slider-btn-right');
let current = 0;

//Main
init();

leftBtn.addEventListener('click', () => {
  if (current === 0) {
    current = allImages.length;
  }
  slideLeft();
});

rightBtn.addEventListener('click', () => {
  if (current === allImages.length - 1) {
    current = -1;
  }
  slideRight()
});

//Declarations
function hide() {
  for (let i = 0; i < allImages.length; i++) {
    allImages[i].style.display = 'none';
  }
}

function init() {
  hide();
  allImages[0].style.display = 'block';
}

function slideLeft() {
  hide();
  allImages[current - 1].style.display = 'block';
  current--;
}

function slideRight() {
  hide();
  allImages[current + 1].style.display = 'block';
  current++;
}
