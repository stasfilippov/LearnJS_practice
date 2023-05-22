//1. У нас есть пустой DOM-элемент elem и строка text.
//Какие из этих 3-х команд работают одинаково?

// elem.append(document.createTextNode(text)) //+
// elem.innerHTML = text
// elem.textContent = text // +

//2. Создайте функцию clear(elem), которая удаляет всё содержимое из elem.
// const elem = document.querySelector('#elem');

// function clear (elem) { 
//     elem.innerHTML = '';
// }

// clear(elem); // очищает список

//3. 
// alert(table); // 

// table.remove();

//4. 

const ul = document.createElement('ul');

document.body.append(ul);

while (true) {
    let data = prompt('Введите значение', '')

    if (!data) {
        break;
    }

    let li = document.createElement('li');
    li.textContent = data;
    ul.append(li);
}

