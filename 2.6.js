// Задание 1: Определение функций (Function Declaration)
function greet(name) {
    console.log("Привет, " + name + "!");
}

// Пример вызова функции:
greet("Иван");

// Задание 2: Function Expression
let multiply = function(a, b) {
    return a * b;
};

// Пример вызова функции:
let result = multiply(3, 4);
console.log(result); // 12

// Задание 3: Анонимные функции
(function() {
    console.log("Анонимная функция вызвана!");
})();

// Задание 4: Самовызывающаяся функция (IIFE)
(function() {
    console.log("IIFE выполнена");
})();

// Задание 5: Вложенные функции
function outer() {
    function inner() {
        return "Внутренняя функция";
    }
    return inner();
}

// Пример вызова функции:
let message = outer();
console.log(message); // "Внутренняя функция"

// Задание 6: Привязка функции к контексту (bind)
let person = {
    name: "Иван"
};

function sayName() {
    console.log(this.name);
}

let boundSayName = sayName.bind(person);
boundSayName(); // "Иван"

// Задание 7: Замыкания
function counter() {
    let count = 0;
    return function() {
        count++;
        console.log(count);
    };
}

// Пример использования:
let count = counter();
count(); // 1
count(); // 2
count(); // 3

// Задание 8: Передача функции в качестве аргумента
function execute(fn, a, b) {
    console.log(fn(a, b));
}

// Пример использования:
execute(multiply, 2, 5); // 10
