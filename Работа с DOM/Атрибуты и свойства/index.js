//Напишите код для выбора элемента с атрибутом data-widget-name из документа и прочитайте его значение.

const elem = document.querySelector('[data-widget-name]')

console.log(elem.dataset.widgetName);