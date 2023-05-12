//Возможно ли создать функции A и B, чтобы new A() == new B()?
/* let obj = {}

function A() {return obj}
function B() {return obj}

let a = new A();
let b = new B();

console.log(a)

console.log( a == b ); */ // true

//Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

/* function Calculator () {
    this.read = function () {
        this.a = +prompt ('a?', '')
        this.b = +prompt ('b?', '')
    }
    this.sum = function () {
        return this.a + this.b;
    }
    this.mul = function () {
        return this.a * this.b;
    }
}
let calculator = new Calculator();


calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() ); */


//Создайте функцию-аккумулятор
function Accumulator (startingValue) {
    this.value = startingValue;
    this.read = function () {
        return this.value += +prompt ("Сколько нужно добавить?", '0')
    }
}
let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

alert(accumulator.value); // выведет сумму этих значений