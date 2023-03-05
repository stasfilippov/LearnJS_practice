'use strict';
if ("0") {
	alert( 'Привет' );
}  // да, выведется тк строка не пустая

//=====================================

const nameJs = prompt ('Какое «официальное» название JavaScript?', ' ');

if (nameJs = 'ECMAScript') {
	alert ('Верно!'); // забыл ; 
} else {
	alert ('Не знаете? ECMAScript!'); // забыл ; 
};

//=====================================

const numb = +prompt('Введите число');

if (numb > 0) {
	alert (1);
} else if (numb < 0) {
	alert (-1);
} else {
	alert (0);
}