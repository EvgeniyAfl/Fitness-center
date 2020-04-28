'use strict';
var $;
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

$(document).ready(function () {
  $('#user-phone').mask('00000000000');
});

var $tabs = function (target) {
  var elemTabs = (typeof target === 'string' ? document.querySelector(target) : target);
  var eventTabsShow;
  var showTab = function (tabsLinkTarget) {
    var tabsPaneTarget;
    var tabsLinkActive;
    var tabsPaneShow;
    tabsPaneTarget = document.querySelector(tabsLinkTarget.getAttribute('href'));
    tabsLinkActive = tabsLinkTarget.parentElement.querySelector('.tools__link--active');
    tabsPaneShow = tabsPaneTarget.parentElement.querySelector('.catalog__list--active');
    // если следующая вкладка равна активной, то завершаем работу
    if (tabsLinkTarget === tabsLinkActive) {
      return;
    }
    // удаляем классы у текущих активных элементов
    if (tabsLinkActive !== null) {
      tabsLinkActive.classList.remove('tools__link--active');
    }
    if (tabsPaneShow !== null) {
      tabsPaneShow.classList.remove('catalog__list--active');
    }
    // добавляем классы к элементам (в завимости от выбранной вкладки)
    tabsLinkTarget.classList.add('tools__link--active');
    tabsPaneTarget.classList.add('catalog__list--active');
    document.dispatchEvent(eventTabsShow);
  };

  var switchTabTo = function (tabsLinkIndex) {
    var tabsLinks = elemTabs.querySelectorAll('.tools__link');
    if (tabsLinks.length > 0) {
      if (tabsLinkIndex > tabsLinks.length) {
        tabsLinkIndex = tabsLinks.length;
      } else if (tabsLinkIndex < 1) {
        tabsLinkIndex = 1;
      }
      showTab(tabsLinks[tabsLinkIndex - 1]);
    }
  };

  elemTabs.addEventListener('click', function (e) {
    var tabsLinkTarget = e.target;
    // завершаем выполнение функции, если кликнули не по ссылке
    if (!tabsLinkTarget.classList.contains('tools__link')) {
      return;
    }
    // отменяем стандартное действие
    e.preventDefault();
    showTab(tabsLinkTarget);
  });

  return {
    showTab: function () {
      showTab(target);
    },
    switchTabTo: function (index) {
      switchTabTo(index);
    }
  };

};

$tabs('.suggestions__wrapper');
