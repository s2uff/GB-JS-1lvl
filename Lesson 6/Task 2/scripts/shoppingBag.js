"use strict";

const shoppingBag = {
    buyButtons: document.querySelectorAll(".buyBtn"),
    bagTable: document.querySelector("tbody"),
    bagTotalAmount: document.querySelector(".shoppingBag-totalAmount"),
    currentProduct: undefined,
    allDelButtons: undefined,
    clickedDelButton: undefined,
    clickedDelButtonIndex: null,
    productsInBag: [],
    bagTotalPrice: 0,

    init() {
        this.addToBagButtons();
    },

    addToBagButtons() {
        for (let n = 0; n < this.buyButtons.length; n++) {
            this.buyButtons[n].addEventListener("click", function (event) {
                shoppingBag.currentProduct = event.target.parentNode;
                shoppingBag.addProductToBag();
                shoppingBag.clearShoppingTable();
                shoppingBag.drawShoppingBag();
                shoppingBag.countBagTotal();
                shoppingBag.addListenToDelButtons();
                shoppingBag.showBag();
             });
        }
    },

    addListenToDelButtons() {
        shoppingBag.allDelButtons = document.querySelectorAll(".delete");
        shoppingBag.allDelButtons.forEach(function (element) {
            element.addEventListener("click", function (event){
                shoppingBag.clickedDeleter = event.target;
                shoppingBag.findDeleterIndex();
                shoppingBag.deleteProductFromBag();
                shoppingBag.clearShoppingTable();
                shoppingBag.countBagTotal();
                shoppingBag.drawShoppingBag();
                shoppingBag.addListenToDelButtons();
            })
        });
    },

    findDeleterIndex() {
        for (let n = 0; n < shoppingBag.allDelButtons.length; n++) {
            if (shoppingBag.allDelButtons[n] === shoppingBag.clickedDeleter) {
                shoppingBag.clickedDelButtonIndex = n;
            }
        }
    },

    addProductToBag() {
            this.productsInBag.push({
                name: `${shoppingBag.currentProduct.children[0].innerText}`,
                price: +(shoppingBag.currentProduct.children[2].children[0].innerText)});
    },

    countBagTotal() {
        shoppingBag.bagTotalAmount.innerText = "";
        shoppingBag.bagTotalPrice = 0;
        for (let n = 0; n < shoppingBag.productsInBag.length; n++) {
            shoppingBag.bagTotalPrice += shoppingBag.productsInBag[n].price;
        }
        shoppingBag.bagTotalAmount.innerText = `${shoppingBag.bagTotalPrice} руб.`;
    },

    deleteProductFromBag(){
        if (shoppingBag.clickedDelButtonIndex > 0) {
            shoppingBag.productsInBag.splice(shoppingBag.clickedDelButtonIndex, 1);
        } else {
            shoppingBag.productsInBag.shift();
        }
    },

    clearShoppingTable() {
        let shoppingRows = document.querySelectorAll("tr");
        for (let n = 1; n < shoppingRows.length; n++) {
            shoppingRows[n].remove();
        }

    },

    drawShoppingBag() {
        for (let n = 0; n < shoppingBag.productsInBag.length; n++) {
            shoppingBag.bagTable.insertAdjacentHTML("beforeend", `<tr><td>${n+1}</td><td>${shoppingBag.productsInBag[n].name}</td><td>1</td><td>${shoppingBag.productsInBag[n].price} руб.</td><td><button class="delete"></button></td>`);
        }
    },

    showBag() {
        if (bag.classList.contains("displayNone")) {
            bag.classList.remove("displayNone");
            bag.classList.add("bagOpen");
            setTimeout(function () {
                bag.classList.remove("bagOpen");
            }, 1000)
        }
    }
}

shoppingBag.init();