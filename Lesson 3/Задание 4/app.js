"use strict";

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg"
        ]
    },
    {
        id: 5,
        price: 499
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78
    }
];


const prWithPhotos = products.filter(product => "photos" in product);
console.log(prWithPhotos);

products.sort( (a, b) => (a.price - b.price) );
console.log(products);
