"use strict";

for (let i = 0; i <= 10; i++) {
    if (i == 0) {
        console.log(i + " - ноль");
    }
    if ( (i % 2) == 1) {
        console.log(i + " - нечетное число");
    }
    if (((i % 2) == 0) && (i > 0)) {
        console.log(i + " - четное число");
    }
}