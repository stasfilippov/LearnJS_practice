//1. Напишите код для выбора элемента с атрибутом data-widget-name из документа и прочитайте его значение.

// const elem = document.querySelector('[data-widget-name]')

// console.log(elem.dataset.widgetName);

//2. Сделайте все внешние ссылки оранжевыми, изменяя их свойство style.

// добавление стиля для одной ссылки
let links = document.querySelectorAll('a');

for (let link of links) {
    const href = link.getAttribute('href');

    if(!href) continue;

    if (!href.includes('://')) continue;

    if (href.startsWith('http://internal.com')) continue;

    link.style.color = 'orange';
}

//Другой вариант проверки 
// let selector = 'a[href*="://"]:not([href^="http://internal.com"])';
// let links = document.querySelectorAll(selector);

// links.forEach(link => link.style.color = 'orange');