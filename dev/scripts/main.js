const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu');
const menuLink = document.querySelectorAll('.menu__link');

menuBtn.addEventListener('click', function(){
  menu.classList.toggle('show');
})

menuLink.forEach((item) => {
  item.addEventListener('click', function(){
    menu.classList.toggle('show');
  })
})

