'use strict';
var pageBody = document.querySelector('.page-body');

pageBody.classList.remove('page-body--nojs');

var trainersSection = document.querySelector('.trainers');

/* конфигурация */
var width = 300; // ширина картинки
var count = 4; // видимое количество изображений

var list = trainersSection.querySelector('.trainers__list');
var listElems = trainersSection.querySelectorAll('.trainers__item');

var position = 0; // положение ленты прокрутки

trainersSection.querySelector('.trainers__btn--left').onclick = function () {
  // сдвиг влево
  position += width * count;
  // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
  position = Math.min(position, 0);
  list.style.marginLeft = position + 'px';
};

trainersSection.querySelector('.trainers__btn--right').onclick = function () {
  // сдвиг вправо
  position -= width * count;
  // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
  position = Math.max(position, -width * (listElems.length - count));
  list.style.marginLeft = position + 'px';
};
