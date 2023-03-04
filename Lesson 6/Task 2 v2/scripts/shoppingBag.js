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
        this.bagShower();
    },

    bagShower() {
        let bag = document.querySelector(".shoppingBag");
        let bagButton = document.querySelector(".bag");

        bagButton.addEventListener("click", function (){
            if (bag.classList.contains("displayNone")) {
                bag.classList.remove("displayNone");
                bag.classList.add("bagOpen");
                setTimeout(function(){
                    bag.classList.remove("bagOpen");
                }, 1000)
            } else {
                bag.classList.add("bagClose");
                setTimeout(function(){
                    bag.classList.add("displayNone");
                    bag.classList.remove("bagClose");
                }, 1000)
            }
        });
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
        if (shoppingBag.productsInBag.length === 0) {
            shoppingBag.productsInBag.push({
                name: `${shoppingBag.currentProduct.children[0].innerText}`,
                price: +(shoppingBag.currentProduct.children[2].children[0].innerText),
                amount: 1,
            });
        } else {
            shoppingBag.increaseAmount();
        }
    },

    increaseAmount() {
        if (!shoppingBag.productsInBag.find(item => item.name === shoppingBag.currentProduct.children[0].innerText)) {
            shoppingBag.productsInBag.push({
                name: `${shoppingBag.currentProduct.children[0].innerText}`,
                price: +(shoppingBag.currentProduct.children[2].children[0].innerText),
                amount: 1,
            });
        } else {
            for (let n = 0; n < shoppingBag.productsInBag.length; n++) {
                if (shoppingBag.productsInBag[n].name === shoppingBag.currentProduct.children[0].innerText) {
                    shoppingBag.productsInBag[n].price += +(shoppingBag.currentProduct.children[2].children[0].innerText);
                    shoppingBag.productsInBag[n].amount += 1;
                }
            }
        }
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
            if (shoppingBag.productsInBag[shoppingBag.clickedDelButtonIndex].amount > 1) {
                shoppingBag.decreaseAmount();
            } else {
                shoppingBag.productsInBag.splice(shoppingBag.clickedDelButtonIndex, 1);
            }
        } else {
            if (shoppingBag.productsInBag[shoppingBag.clickedDelButtonIndex].amount > 1) {
                shoppingBag.decreaseAmount();
            } else {
            shoppingBag.productsInBag.shift();
            }
        }
    },

    decreaseAmount () {
        shoppingBag.productsInBag[shoppingBag.clickedDelButtonIndex].price = shoppingBag.productsInBag[shoppingBag.clickedDelButtonIndex].price / shoppingBag.productsInBag[shoppingBag.clickedDelButtonIndex].amount;
        shoppingBag.productsInBag[shoppingBag.clickedDelButtonIndex].amount -= 1;
        shoppingBag.productsInBag[shoppingBag.clickedDelButtonIndex].price *= shoppingBag.productsInBag[shoppingBag.clickedDelButtonIndex].amount;
    },

    clearShoppingTable() {
        let shoppingRows = document.querySelectorAll("tr");
        for (let n = 1; n < shoppingRows.length; n++) {
            shoppingRows[n].remove();
        }

    },

    drawShoppingBag() {
        for (let n = 0; n < shoppingBag.productsInBag.length; n++) {
            shoppingBag.bagTable.insertAdjacentHTML("beforeend", `<tr><td>${n+1}</td><td>${shoppingBag.productsInBag[n].name}</td><td>${shoppingBag.productsInBag[n].amount}</td><td>${shoppingBag.productsInBag[n].price} руб.</td><td><button class="delete"></button></td>`);
        }
    },

    showBag() {
        let bag = document.querySelector(".shoppingBag");

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