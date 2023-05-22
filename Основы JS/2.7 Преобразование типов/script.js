'use strict';

// Строковое преобразование 
//let value = true;

//value = String(value); // преобразовываем в строку
//alert(typeof(value)); // теперь это строка

//Численное преобразование
let numb = '1234';

let str = Number(numb);
alert(typeof(str));

alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN (ошибка чтения числа на месте символа "z")
alert( Number(true) );        // 1
alert( Number(false) );       // 0