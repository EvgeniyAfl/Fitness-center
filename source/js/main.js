'use strict';
var pageBody = document.querySelector('.page-body');

pageBody.classList.remove('page-body--nojs');

// При наведении на занятие подсвечивается соответствующий день и время.
// Стиль при наведении/время column__item--active
// Стиль при наведении/день table-header__item--active

$(document).ready(function () {
  $('.trainers__list').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [{
      breakpoint: 1199,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  $('.reviews__list').slick();
});
