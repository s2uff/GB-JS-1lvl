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

let a = parseInt(prompt("Введите число a: "));
let b = parseInt(prompt("Введите число b: "));

console.log(sum(a, b));
console.log(minus(a, b));
console.log(mult(a, b));
console.log(del(a, b));