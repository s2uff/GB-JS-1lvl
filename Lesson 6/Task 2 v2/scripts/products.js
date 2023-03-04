"use strict";

const productsList = {
    container: document.querySelector(".products"),
    products: [
        {
            id: 0,
            name: 'Macbook Air 13"',
            img: "img/mbAir13.png",
            price: 96980
        },
        {
            id: 1,
            name: 'Macbook Pro 14"',
            img: "img/mbPro14.png",
            price: 181980
        },
        {
            id: 2,
            name: 'Macbook Pro 16"',
            img: "img/mbPro16.png",
            price: 249980
        }
    ],

    addProductsToPage() {
        for (let n = 0; n < this.products.length; n++) {
            this.container.insertAdjacentHTML("beforeend", `<div class="product"><span class="product-name">${this.products[n].name}</span><img class="product-img" src="${this.products[n].img}" alt="Macbook" width="250" height="230"><span class="product-price">Цена: <span class="product-price-value">${this.products[n].price}</span> &#8381;</span><button class="product-button buyBtn">В корзину</button></div>`);
        }
    }
};

productsList.addProductsToPage();