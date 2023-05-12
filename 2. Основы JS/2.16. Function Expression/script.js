'use strict';

/* function ask (question, yes, no) {
    if (confirm (question)) yes()
    else no();
}

function showOk () {
    alert ("Вы согласились");
}

function showCancel () {
    alert ('Вы отменили выполнение');
}

ask ('Вы согласны?', showOk, showCancel); */


function ask (question, yes, no) {
    if (confirm (question)) yes()
    else no();
}

ask (
    'Вы согласны?',
    function () {alert ("Вы согласились");},
    function () {alert ('Вы отменили выполнение');}
)