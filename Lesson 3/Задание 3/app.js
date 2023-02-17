"use strict";

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

const discount = products.forEach(function (object) {
    object.price /= 2;
});

console.log(products);


// Преподаватель сделал вариант когда создается новый массив со скидочными ценами. Но правильнее было как у меня применить скидку на каждый товар в оригинальном массиве. Но вообще очень ситуативно.