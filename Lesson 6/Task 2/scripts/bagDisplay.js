"use strict";

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