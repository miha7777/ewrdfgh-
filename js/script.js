const start = document.querySelector('#header__start');
const skip = document.querySelector('#skip');
const back = document.querySelector('#back');
const elem = document.querySelector('.block__navigation').firstElementChild;
const buttonStart = document.querySelector('.block__navigation').lastElementChild;
const start2 = document.querySelector('.header__start-2');
const start3 = document.querySelector('.header__start-3');
const start4 = document.querySelector('.header__start-4');
const inputButton = document.querySelector('.button__input');

window.addEventListener('load', function (e) {
    setTimeout(typeWriter, 4000)

    start.classList.add('header__start-no__active')
})
buttonStart.addEventListener('click', function (params) {
    start2.classList.add('header__start-no__active2');
    start2.classList.remove('header__start-no__show');
    setTimeout(typeWriter4, 1000)
})
inputButton.addEventListener('click', function (e) {
    start3.classList.add('header__start-no__active2');
    setTimeout(typeWriter4, 1000)
    start4.classList.add('header__start-4__active');
})
const inputText = document.querySelector('.block__text');
let txt = 'Welcome';
let i = 0;
let speed = 200;
function typeWriter() {
    if (i < txt.length + 1) {
        elem.innerHTML = txt.slice(0, i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
ti = 0;
let txt4 = 'Create Account'
function typeWriter4() {
    if (ti < txt4.length + 1) {
        inputText.innerHTML = txt4.slice(0, ti);
        ti++;
        setTimeout(typeWriter4, speed);
    }
}
skip.addEventListener('click', function (e) {
    start2.classList.add('header__start-no__active2');
    start3.classList.add('header__start-no__active2');
    start2.classList.remove('header__start-no__show');
    start4.classList.add('header__start-4__active');
})
back.addEventListener('click', function (e) {
    start2.classList.add('header__start-no__show');
})

