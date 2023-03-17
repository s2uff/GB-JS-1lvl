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
        let bagButton = document.querySelector(".bag");
        let shoppingBag = document.querySelector ('.shoppingBag');
        bagButton.addEventListener("click", function (){
            if (shoppingBag.classList.contains("displayNone")) {
                shoppingBag.classList.remove("displayNone");
                shoppingBag.classList.add("bagOpen");
                setTimeout(function (){
                    shoppingBag.classList.remove("bagOpen");
                }, 1000)
            } else {
                shoppingBag.classList.add("bagClose");
                setTimeout(function (){
                    shoppingBag.classList.add("displayNone");
                    shoppingBag.classList.remove("bagClose");
                }, 1000)
            }
        });
    },

    addToBagButtons() {
        for (let n = 0; n < this.buyButtons.length; n++) {
            this.buyButtons[n].addEventListener("click", (event) => {
                this.currentProduct = event.target.parentNode;
                this.addProductToBag();
                this.clearShoppingTable();
                this.drawShoppingBag();
                this.countBagTotal();
                this.addListenToDelButtons();
                this.showBag();
             });
        }
    },

    addListenToDelButtons() {
        this.allDelButtons = document.querySelectorAll(".delete");
        this.allDelButtons.forEach((element) => {
            element.addEventListener("click", (event) =>{
                this.clickedDeleter = event.target;
                this.findDeleterIndex();
                this.deleteProductFromBag();
                this.clearShoppingTable();
                this.countBagTotal();
                this.drawShoppingBag();
                this.addListenToDelButtons();
            })
        });
    },

    findDeleterIndex() {
        for (let n = 0; n < this.allDelButtons.length; n++) {
            if (this.allDelButtons[n] === this.clickedDeleter) {
                this.clickedDelButtonIndex = n;
            }
        }
    },

    addProductToBag() {
        if (this.productsInBag.length === 0) {
            this.productsInBag.push({
                name: `${this.currentProduct.children[0].innerText}`,
                price: +(this.currentProduct.children[2].children[0].innerText),
                amount: 1,
            });
        } else {
            this.increaseAmount();
        }
    },

    increaseAmount() {
        if (!this.productsInBag.find(item => item.name === this.currentProduct.children[0].innerText)) {
            this.productsInBag.push({
                name: `${this.currentProduct.children[0].innerText}`,
                price: +(this.currentProduct.children[2].children[0].innerText),
                amount: 1,
            });
        } else {
            for (let n = 0; n < this.productsInBag.length; n++) {
                if (this.productsInBag[n].name === this.currentProduct.children[0].innerText) {
                    this.productsInBag[n].price += +(this.currentProduct.children[2].children[0].innerText);
                    this.productsInBag[n].amount += 1;
                }
            }
        }
    },

    countBagTotal() {
        this.bagTotalAmount.innerText = "";
        this.bagTotalPrice = 0;
        for (let n = 0; n < this.productsInBag.length; n++) {
            this.bagTotalPrice += this.productsInBag[n].price;
        }
        this.bagTotalAmount.innerText = `${this.bagTotalPrice} руб.`;
    },

    deleteProductFromBag(){
        if (this.clickedDelButtonIndex > 0) {
            if (this.productsInBag[this.clickedDelButtonIndex].amount > 1) {
                this.decreaseAmount();
            } else {
                this.productsInBag.splice(this.clickedDelButtonIndex, 1);
            }
        } else {
            if (this.productsInBag[this.clickedDelButtonIndex].amount > 1) {
                this.decreaseAmount();
            } else {
                this.productsInBag.shift();
            }
        }
    },

    decreaseAmount () {
        this.productsInBag[this.clickedDelButtonIndex].price = this.productsInBag[this.clickedDelButtonIndex].price / this.productsInBag[this.clickedDelButtonIndex].amount;
        this.productsInBag[this.clickedDelButtonIndex].amount -= 1;
        this.productsInBag[this.clickedDelButtonIndex].price *= this.productsInBag[this.clickedDelButtonIndex].amount;
    },

    clearShoppingTable() {
        let shoppingRows = document.querySelectorAll("tr");
        for (let n = 1; n < shoppingRows.length; n++) {
            shoppingRows[n].remove();
        }

    },

    drawShoppingBag() {
        for (let n = 0; n < this.productsInBag.length; n++) {
            this.bagTable.insertAdjacentHTML("beforeend", `<tr><td>${n+1}</td><td>${this.productsInBag[n].name}</td><td>${this.productsInBag[n].amount}</td><td>${this.productsInBag[n].price} руб.</td><td><button class="delete"></button></td>`);
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