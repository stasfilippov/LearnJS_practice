//1. У нас есть пустой DOM-элемент elem и строка text.
//Какие из этих 3-х команд работают одинаково?

// elem.append(document.createTextNode(text)) //+
// elem.innerHTML = text
// elem.textContent = text // +

//2. =====================================
//Создайте функцию clear(elem), которая удаляет всё содержимое из elem.
// const elem = document.querySelector('#elem');

// function clear (elem) { 
//     elem.innerHTML = '';
// }

// clear(elem); // очищает список

//3. ===================================
// alert(table); // 

// table.remove();

//4. ==================================
// const ul = document.createElement('ul');

// document.body.append(ul);

// while (true) {
//     let data = prompt('Введите значение', '')

//     if (!data) {
//         break;
//     }

//     let li = document.createElement('li');
//     li.textContent = data;
//     ul.append(li);
// }

//5 ===============================================

let data = {
    "Рыбы": {
        "форель": {},
        "лосось": {}
    },

    "Деревья": {
        "Огромные": {
        "секвойя": {},
        "дуб": {}
        },
        "Цветковые": {
        "яблоня": {},
        "магнолия": {}
        }
    }
};


function createTree(container, obj) {
    container.append(createTreeDom(obj));
}

function createTreeDom(obj) {
    // если нет дочерних элементов, то вызов возвращает undefined
    // и элемент <ul> не будет создан
    if (!Object.keys(obj).length) return;

    let ul = document.createElement('ul');

    for (let key in obj) {
        let li = document.createElement('li');
        li.innerHTML = key;

        let childrenUl = createTreeDom(obj[key]);
        if (childrenUl) {
            li.append(childrenUl);
        }

        ul.append(li);
    }

    return ul;
}

let container = document.getElementById('container');
createTree(container, data);


