'use strict';

//Перепишите с использованием функции-стрелки
//Замените код Function Expression стрелочной функцией:

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
);