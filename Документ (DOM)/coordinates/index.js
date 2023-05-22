const elem = document.querySelector('#field');

const elemCoordinates = elem.getBoundingClientRect();

let dotOne = {
    x: elemCoordinates.left,
    y: elemCoordinates.top
}

let dotTwo = {
    x: elemCoordinates.right,
    y: elemCoordinates.bottom
}

let dotThree = {
    x: elemCoordinates.left + elem.clientLeft,
    y: elemCoordinates.top + elem.clientTop
}

let dotFour = {
    x: elemCoordinates.left + elem.clientLeft + elem.clientWidth,
    y: elemCoordinates.top + elem.clientTop + elem.clientHeight
}

console.log(dotOne)
console.log(dotTwo)
console.log(dotThree)
console.log(dotFour)


