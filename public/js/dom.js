const nav = document.querySelector('.nav');
const main = document.querySelector('.main');
function slide() {
    nav.classList.remove('-translate-x-80');
    main.classList.add('black');
    console.log('oke')
};
function offSlide() {
    nav.classList.add('-translate-x-80');
    main.classList.remove('black');
};