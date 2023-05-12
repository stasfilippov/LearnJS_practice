'use strict';


// Они независимы? Что покажет второй счётчик? 0,1 или 2,3 или что-то ещё?
// function makeCounter() {
//     let count = 0;
  
//     return function() {
//       return count++;
//     };
//   }
  
//   let counter = makeCounter();
//   let counter2 = makeCounter();
  
//   alert( counter() ); // 0
//   alert( counter() ); // 1
  
//   alert( counter2() ); // ? будет 0
//   alert( counter2() ); // ? будет 1 

/**
 * Они независимы!
 * так как при вызове каждой функции создатся свое логическое окружение для counter() и для counter2()
 * при первом вызове counter() она будет иметь ссылку на внешнее окружение с переменной count = 0 и вернет данное значение, после этого будет изменено значение переменной на count=1
 * при втором вызове, будет создано опять же новое окружение, но у же со ссылкой на внешнее окружение с переменной count = 1
*/


//----------------------------------------------------------
/**
 * Здесь объект счётчика создан с помощью функции-конструктора.
 * Будет ли он работать? Что покажет? 
*/
function Counter() {
    let count = 0;
  
    this.up = function() {
      return ++count;
    };
    this.down = function() {
      return --count;
    };
  }
  
  let counter = new Counter();
  
  alert( counter.up() ); // ? здесь будет 1
  alert( counter.up() ); // ? здесь будет 2
  alert( counter.down() ); // ? здесь будет -1 <--- сделал ошибку, будет 1, тк counter() имеет одну и ту же ссылку на внешнее окружения с переменной count


//----------------------------------------------------------
/**
 * Посмотрите на код. Какой будет результат у вызова на последней строке?
 */

let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi(); //Hello, John <----- будет ошибка, тк sayHi не будет найдена

//--------------------------------------------------------------------

const sum = function(a) {
    return function (b) {
        return a + b;
    }
}

console.log(sum(1)(2))
sum(5)(-1)