"use strict";

let a = 2;
let x = 1 + (a *= 2);
console.log(x);

// Результат: 5
// На 4й строк приоритетное действие в скобках. Оператор "*=" выполняет операцию умножения значения переменной слева на значение справа, после чего происходит перезапись результата в переменную. Полученный результат (4) складывается с числом 1 и результат записывается в переменную х.