'use strict';

var menuBtn = document.querySelector('.menu__btn');
var menu = document.querySelector('.menu');
var menuLink = document.querySelectorAll('.menu__link');

menuBtn.addEventListener('click', function () {
  menu.classList.toggle('show');
});

menuLink.forEach(function (item) {
  item.addEventListener('click', function () {
    menu.classList.toggle('show');
  });
});