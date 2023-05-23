// #1. Спрячьте сообщения с помощью делегирования
// const container = document.querySelector('#container');
// const closeBtn = document.querySelector('.remove-button');

// container.addEventListener('click', (event) => {
//     let target = event.target;

//     if(target.className != 'remove-button') return;

//     let pane = target.closest('.pane');
//     pane.remove();
// })


// #2. Раскрывающееся дерево

const tree = document.querySelector('.tree')

for (let li of tree.querySelectorAll('li')) {
    let span = document.createElement('span');

    li.prepend(span);
    span.append(span.nextSibling);
}

tree.addEventListener('click', (event) => {
    if (event.target.tagName != 'SPAN') return;

    let child = event.target.parentNode.querySelector('ul')

    if(!child) return;

    child.hidden = !child.hidden;
    
})