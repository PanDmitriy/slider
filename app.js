const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const sidebar = document.querySelector('.sidebar');
const slidersBlock = document.querySelector('.main-slide');
const containerBlock = document.querySelector('.container');

const slidersNumber = slidersBlock.querySelectorAll('div').length;
sidebar.style.top = `-${( slidersNumber - 1 ) * 100 }vh`;

let activeSlideIndex = 0;

const changeSlide = (direction) => {
  if(direction === 'up') {
    activeSlideIndex++;
    if(activeSlideIndex === slidersNumber) {
      activeSlideIndex = 0;
    }
  } else if(direction === 'down') {
    activeSlideIndex--;
    if(activeSlideIndex < 0) {
      activeSlideIndex = slidersNumber - 1;
    }
  }
  const height = containerBlock.clientHeight;

  slidersBlock.style.transform = `translateY(-${activeSlideIndex * height}px)`;
  sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}

upBtn.addEventListener('click', () => changeSlide('up'));
downBtn.addEventListener('click',() => changeSlide('down'));