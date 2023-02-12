"use strict";

/** Функция считает сумму двух принимаемых чисел
 @param num1 первое число;
 @param num2 второе число;
 @return сумма чисел */
function sum(num1, num2) {
    return num1 + num2;
}

/** Функция считает разность двух принимаемых чисел
 @param num1 первое число;
 @param num2 второе число;
 @return разность чисел */
function minus(num1, num2) {
    return num1 - num2;
}

/** Функция считает произведение двух принимаемых чисел
 @param num1 первое число;
 @param num2 второе число;
 @return произведение чисел */
function mult(num1, num2) {
    return num1 * num2;
}

/** Функция считает частное от деления двух принимаемых чисел
 @param num1 первое число;
 @param num2 второе число;
 @return частное от деления чисел */
function del(num1, num2) {
    return num1 / num2;
}

/** Функция выполняет указанное арифметическое действие.
 * @param num1 - число 1.
 * @param num2 - число 2.
 * @param operation - название операции (сумма, разность, произведение, деление).
 * @returns {*} - результат выполненной операции.
 */
function arifmetic(num1, num2, operation) {
    let result = 0;
    switch (operation) {
        case "сумма":
            result = sum(num1, num2);
            break;
        case "разность":
            result = minus(num1, num2);
            break;
        case "произведение":
            result = mult(num1, num2);
            break;
        case "деление":
            result = del(num1, num2);
            break;
        default:
            result = "Проверьте вводимые данные";
    }
    return result;
}

let a = parseInt(prompt("Введите число a: "));
let b = parseInt(prompt("Введите число b: "));
let oper = prompt("Введите название операции: ");

alert("Результат вашей операции: " + arifmetic(a, b, oper));