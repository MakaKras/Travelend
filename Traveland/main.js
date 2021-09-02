const MenuBgr = document.querySelector('.header__burger-btn');
const BrgBlock = document.querySelector('.header__nav');
const Body = document.querySelector('.lock');


MenuBgr.addEventListener('click', function () {
   MenuBgr.classList.toggle('active');
   BrgBlock.classList.toggle('active');
   // Body.classList.toggleClass('lock')
});