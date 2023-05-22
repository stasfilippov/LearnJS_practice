//#1. Найти размер прокрутки снизу
/* const box = document.querySelector('.box');
box.scrollTop = 1e9
let scrollBottom = box.scrollHeight - box.scrollTop - box.clientHeight
console.log(scrollBottom) */


//#2. Узнать ширину полосы прокрутки
// const box = document.querySelector('.box');
// let scrollBarWidth = box.offsetWidth - box.clientWidth - box.clientLeft * 2; 
// console.log(scrollBarWidth)


//#3. Поместите мяч в центр поля
const ball = document.querySelector('#ball');
const field = document.querySelector('#field');

let widthField = field.clientWidth;
let heightField = field.clientHeight;

// ball.style.left = widthField / 2 - 20 + 'px'; мое решение
// ball.style.top = heightField / 2 - 20 + 'px';

ball.style.left = widthField / 2 - ball.offsetWidth / 2 + 'px'; 
ball.style.top = heightField / 2 - ball.offsetHeight / 2 + 'px';