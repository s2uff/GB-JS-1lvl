"use strict";

// Решение преподавателя

function numTransform(num) {
    if (Number.isInteger(num) || num < 0 || num > 999) {
        alert("Число должно быть целым в диапазоне от 0 до 999")
        return {};
    } 
    return {
        firstDigit: Math.floor(num / 100),
        secondDigit: Math.floor(num / 10) % 10,
        thirdDigit: num % 10,
    }
}

let n = prompt("Пожалуйста введите число:");
+n;
console.log(numTransform(n));