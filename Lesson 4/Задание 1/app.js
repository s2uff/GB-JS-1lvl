"use strict";

// Мое решение

/**
 * Функция проверяет длину получаемоего числа и добавляет 0 перед ним если длина не равна 3
 * @param num число в виде строки
 * @returns {string} полученное число в виде строки c необходимыми преобразованиями
 */
function numLengthCheck(num) {
    String(num);
    if (num.length < 3 && num.length > 1) {
        return "0" + num;
    }
    if (num.length < 2) {
        return "0" + "0" + num;
    }
    if (num.length === 3) {
        return num;
    }
}

/**
 * Конструктор объекта, в котором значениями свойств будут разряды полученного числа
 */
class Digits {
    constructor(num) {
        this.firstDigit = num.charAt(0);
        this.secondDigit = num.charAt(1);
        this.thirdDigit = num.charAt(2);
    }
}

let num = prompt( "Пожалуйста введите число:");
numLengthCheck(num);

const digit1 = new Digits(num);
console.log(digit1);