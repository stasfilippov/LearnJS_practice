'use strict'

/* let promise = new Promise(function(resolve, reject) {
    // функция-исполнитель (executor)
    // после ее выполнения вызовутся колбэки- resolve и reject
}); */

let promiseNew = new Promise(function(resolve, reject) {
    // эта функция выполнится автоматически, при вызове new Promise

    // через 1 секунду сигнализировать, что задача выполнена с результатом "done"
    setTimeout(() => resolve("done"), 1000); // функция - исполнитель вызовет функцию resolve
});

// Пример рефакторинга асинхронного кода, записанного с помощью коллбеков 

/* function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
  
    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Ошибка загрузки скрипта ${src}`));
  
    document.head.append(script);
  } */

function loadScript (src) {
    return new Promise (function (resolve, result) {
        let script = document.createElement('script');
        script.src = src;

        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error (`Ошибка загрузки скрипта ${src}`));

        document.head.append(script);
    })
}

let promise = loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js')

promise.then (
    script => alert (`${script.src} загружен!`),
    error => alert (`Ошибка ${error.message}`)
)

//-------------------------------------------------------

//Задача № 1 Можно ли "перевыполнить" промис? Что выведет код ниже?
let promiseSecond = new Promise(function (resolve, reject) {
    resolve(1);
  
    setTimeout(() => resolve(2), 1000);
  });
  
promiseSecond.then(alert); 

// Мой ответ выведет 1, переиспользовать нельзя 
// Дополнение - второй вызов будет проигнорирован, тк учитывается только первый вызов

//-------------------------------------------------------
//Задача № 2 Задержка на промисах

function delay(ms) {
    return new Promise (function (resolve, reject) {
        setTimeout (resolve, ms)
    })
}

delay(3000).then(() => alert('выполнилось через 3 секунды'));

//-------------------------------------------------------
//Задача № 3 Анимация круга с помощью промиса

function go() {
    showCircle(150, 150, 100).then(div => {
        div.classList.add('message-ball');
        div.append("Привет, мир!");
    });
}

function showCircle(cx, cy, radius) {
    let div = document.createElement('div');
    div.style.width = 0;
    div.style.height = 0;
    div.style.left = cx + 'px';
    div.style.top = cy + 'px';
    div.className = 'circle';
    document.body.append(div);

    return new Promise (resolve => {
        setTimeout(() => {
            div.style.width = radius * 2 + 'px';
            div.style.height = radius * 2 + 'px';
      
            div.addEventListener('transitionend', function handler() {
                div.removeEventListener('transitionend', handler);
                resolve(div);
            });
        }, 0);
    }
)}