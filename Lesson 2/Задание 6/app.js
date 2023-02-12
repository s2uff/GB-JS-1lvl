"use strict";

/**
 * Функция получает строку, пытается привести ее к типу число и проверяет результат.
 * @param num - строка
 * @returns {boolean} - true либо ничего
 */
function sumCheck(num) {
    num = Number(num);
    if (!isNaN(num)) {
        return true;
    }
}

/**
 * Функция получает сумму в виде строчного элемента и выводит сообщение подставляя верное окончание в слове рубль.
 * @param sum - строчный элемент
 */
function rubles(sum) {
    if (sumCheck(sum) == true) {
        if ((sum.slice(-1) == "1") && (sum.slice(-2) != "11")) {
             alert(`Сумма Вашего вклада составляет: ${sum} рубль.`);
        } else if ((sum.slice(-1) == "2") && (sum.slice(-2) != "12")) {
             alert(`Сумма Вашего вклада составляет: ${sum} рубля.`);
        } else if ((sum.slice(-1) == "3") && (sum.slice(-2) != "13")) {
            alert(`Сумма Вашего вклада составляет: ${sum} рубля.`);
        } else if ((sum.slice(-1) == "4") && (sum.slice(-2) != "14")) {
            alert(`Сумма Вашего вклада составляет: ${sum} рубля.`);
        } else {
            alert(`Сумма Вашего вклада составляет: ${sum} рублей.`);
        }
    } else {
        alert('Вы ввели не число!');
    }
}

let sum = prompt('Пожалуйста введите сумму вклада: ');
rubles(sum);
