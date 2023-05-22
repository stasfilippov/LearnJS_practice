'use strict';

const user = {}

user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

console.log(user)

//--------------------------
let shedule = {};
shedule.name = 'Stas'

function isEmpty(obj) {
    for (let key in obj) {
            return true
        } 
    return false
}

console.log(isEmpty(shedule))

//--------------------------------
const user = {
    name: "John"
};

// это будет работать?
user.name = "Pete";
/**
 * да, будет работать
 * объект - это ссылочный тип -- мы меняем сам объект, а не значение переменной
 */

//-----------------------------------
let salaries = {
    // John: 100,
    // Ann: 160,
    // Pete: 130
}

function sumSalaries (obj) {
    let sum = 0;

    for (let key in obj) {
        sum += obj[key]
    }

    return sum;
}

console.log(sumSalaries(salaries))

//-----------------------------
// до вызова функции
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof(obj[key] === 'Number')) {
            obj[key] *= 2
        }
    }
}

multiplyNumeric(menu);

console.log(menu)

// после вызова функции
menu = {
    width: 400,
    height: 600,
    title: "My menu"
};