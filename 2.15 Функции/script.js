'use strict';

/* function showPrimes(n) {

    for (let i = 2; i < n; i++) {
        if (!isPrime(i)) continue;

        console.log(i);  // простое
    }
}

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if ( n % i == 0) return false;
    }
    return true;
}

showPrimes(3); */

// ==================== ЗАДАНИЕ №1
// Обязателен ли "else"?
//Следующая функция возвращает true, если параметр age больше 18. В ином случае она запрашивает подтверждение через confirm и возвращает его результат:

/* function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        // ...
        return confirm('Родители разрешили?');
    }
} */

/* checkAge(15);
function checkAge(age) {
    if (age > 18) {
        return true;
    }
    // ...
    return confirm('Родители разрешили?');
} */ // будет работать также, тк else не обязательный компонент условий


// ==================== ЗАДАНИЕ №2
//Перепишите функцию, используя оператор '?' или '||'

/* function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Родители разрешили?');
    }
} */

/* function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
}

function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
}
 */
// ==================== ЗАДАНИЕ №3
//Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
/* min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1

function getMinNumb (a, b) {
    if (a > b) {
        return b;
    } else {
        return a;
    }
}

console.log(getMinNumb(1, 1)); */

// ==================== ЗАДАНИЕ №3
//Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.
//Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).

/* pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1 */

let x = prompt ('Введите число'); 
let n = prompt ('Введите степень'); 

function pow (x, n) {
    if (n >= 1) {
        let result = x ** n;
        return result; 
    } else {
        alert ('Введите целое число для степени');
    }
}

console.log(pow (x, n)); 
