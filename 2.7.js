// Задание 1: Найти сумму всех элементов массива
let numbers1 = [1, 2, 3, 4, 5]; // Пример массива

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(sumArray(numbers1)); // Вывод: 15

// Задание 2: Найти максимальный элемент массива
let numbers2 = [3, 1, 4, 1, 5, 9]; // Пример массива

function findMax(arr) {
    let max = arr[0]; // Предполагаем, что первый элемент — максимальный
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(findMax(numbers2)); // Вывод: 9

// Задание 3: Фильтрация массива по условию (четные числа)
let numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // Пример массива

function filterArray(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(filterArray(numbers3)); // Вывод: [2, 4, 6, 8]

// Задание 4: Реализация метода массива "map" через цикл
let numbers4 = [1, 2, 3, 4, 5]; // Пример массива

function multiplyByTwo(num) {
    return num * 2;
}

function mapArray(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
}

console.log(mapArray(numbers4, multiplyByTwo)); // Вывод: [2, 4, 6, 8, 10]

// Задание 5: Реализация метода массива "forEach" через цикл
let numbers5 = [1, 2, 3, 4, 5]; // Пример массива

function printElement(element) {
    console.log(element);
}

function forEachArray(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

forEachArray(numbers5, printElement); // Вывод: 1 2 3 4 5 (по одному числу на строку)

// Задание 6: Развернуть массив
let numbers6 = [1, 2, 3, 4, 5]; // Пример массива

function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}

console.log(reverseArray(numbers6)); // Вывод: [5, 4, 3, 2, 1]
