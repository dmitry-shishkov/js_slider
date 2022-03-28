'use strict';

const imgs = document.querySelectorAll('.sliders img');
const btnPrev = document.querySelector('.prev');
const btnNext = document.querySelector('.next');
const dots = document.querySelector('.dots');
const slidesCounter = document.querySelector('.counter');

let counter = 0;

imgs[counter].classList.add('slider-active');

let numSlide = document.createElement('span');
numSlide.innerHTML = `${counter + 1}/${imgs.length}`;
slidesCounter.append(numSlide);

for (let i = 0; i < imgs.length; i++) {
  let dot = document.createElement('span');
  dot.classList.add('dot');
  dots.append(dot);
}

const arrDots = document.querySelectorAll('.dot');
arrDots[counter].classList.add('dot-active');


arrDots.forEach(function(elem, index) {
  elem.addEventListener('click', function() {
    btnPrev.addEventListener('click', prev);
    btnNext.addEventListener('click', next);
    arrDots.forEach( (elem) => elem.classList.remove('dot-active'));
    elem.classList.add('dot-active');
    imgs[counter].classList.remove('slider-active');
    counter = index;
    imgs[counter].classList.add('slider-active');
    numSlide.innerHTML = `${counter + 1}/${imgs.length}`;
  })
})

function prev() {
  imgs[counter].classList.remove('slider-active');
  arrDots[counter].classList.remove('dot-active');

  if (counter == 0) {
    this.removeEventListener('click', prev);
  } else {
    counter--;
  }

  imgs[counter].classList.add('slider-active');
  arrDots[counter].classList.add('dot-active');
  numSlide.innerHTML = `${counter + 1}/${imgs.length}`;

  if (counter == 0) {
    btnPrev.removeEventListener('click', prev);
  }
}

function next() {
  imgs[counter].classList.remove('slider-active');
  arrDots[counter].classList.remove('dot-active');

  if (counter == imgs.length - 1) {
    this.removeEventListener('click', next);
  } else {
    counter++;
  }

  imgs[counter].classList.add('slider-active');
  arrDots[counter].classList.add('dot-active');
  numSlide.innerHTML = `${counter + 1}/${imgs.length}`;
}

btnPrev.addEventListener('click', prev);
btnNext.addEventListener('click', next);
