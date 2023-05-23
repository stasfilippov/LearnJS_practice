// #1. Скрыть элемент по нажатию кнопки
// const btn = document.querySelector('#hider');
// const text = document.querySelector('#text');

// btn.addEventListener('click', () => {
//     text.style.display = 'none';
// })

// #2. Создайте кнопку, которая будет скрывать себя по нажатию.
// const btn = document.querySelector('#hider');

// btn.addEventListener('click', () => {
//     btn.hidden = true;
// })

//#4. Передвиньте мяч по полю
const ball = document.querySelector('#ball');
const field = document.querySelector('#field');

let fieldCoords = field.getBoundingClientRect();

field.addEventListener('click', (event) => {
    let ballCoords = {
        left: event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2,

        top: event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2 
    }


    if (ballCoords.top < 0) ballCoords.top = 0;

    // запрещаем пересекать левую границу поля
    if (ballCoords.left < 0) ballCoords.left = 0;


    // // запрещаем пересекать правую границу поля
    if (ballCoords.left + ball.clientWidth > field.clientWidth) {
        ballCoords.left = field.clientWidth - ball.clientWidth;
    }

    // запрещаем пересекать нижнюю границу поля
    if (ballCoords.top + ball.clientHeight > field.clientHeight) {
        ballCoords.top = field.clientHeight - ball.clientHeight;
    }

    ball.style.left = ballCoords.left + 'px';
    ball.style.top = ballCoords.top + 'px';

})