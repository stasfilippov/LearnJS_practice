//1. У нас есть пустой DOM-элемент elem и строка text.
//Какие из этих 3-х команд работают одинаково?

// elem.append(document.createTextNode(text)) //+
// elem.innerHTML = text
// elem.textContent = text // +

//2. Создайте функцию clear(elem), которая удаляет всё содержимое из elem.
const elem = document.querySelector('#elem');

function clear (elem) { 
    elem.innerHTML = '';
}

clear(elem); // очищает список