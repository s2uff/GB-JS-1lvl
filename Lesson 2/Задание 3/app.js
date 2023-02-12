"use strict";

let a = parseInt(prompt("Введите число a: "));
let b = parseInt(prompt("Введите число b: "));

if ((a >= 0) && (b >= 0)) {
    let result1 = a - b;
    alert(`Разность чисел равна ${result1}`);
} else if ((a < 0) && (b < 0)) {
    let result2 = a * b;
    alert(`Произведение чисел равно ${result2}`);
} else if (((a >= 0) && (b < 0)) || ((a < 0) && (b >= 0))) {
    let result3 = a + b;
    alert(`Сумма чисел равна ${result3}`);
} else {
    alert("Хотя бы одно не является числом!");
}