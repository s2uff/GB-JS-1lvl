"use strict";

let leftArrow = document.querySelector(".leftArrow");
let rightArrow = document.querySelector(".rightArrow");

rightArrow.addEventListener("click", function(event) {
    let zIndex2 = document.querySelector(".zIndex2");
    let zIndex1 = document.querySelector(".zIndex1");
    let zIndex0 = document.querySelector(".zIndex0");

    zIndex2.classList.add("toRightAni");
    setTimeout(function () {
        zIndex2.classList.remove("zIndex2")
        zIndex2.classList.add("zIndex0");
        zIndex2.classList.remove("toRightAni");

        zIndex1.classList.remove("zIndex1");
        zIndex1.classList.add("zIndex2");

        zIndex0.classList.remove("zIndex0");
        zIndex0.classList.add("zIndex1");
    }, 1000);

});

leftArrow.addEventListener("click", function(event) {
    let zIndex2 = document.querySelector(".zIndex2");
    let zIndex1 = document.querySelector(".zIndex1");
    let zIndex0 = document.querySelector(".zIndex0");

    zIndex0.classList.remove("zIndex0");
    zIndex0.classList.add("zIndex1");

    zIndex1.classList.remove("zIndex1");
    zIndex1.classList.add("zIndex0");

    zIndex2.classList.add("toLeftAni");
    setTimeout(function () {
        zIndex2.classList.remove("toLeftAni");
        zIndex2.classList.remove("zIndex2");
        zIndex2.classList.add("zIndex1");
        zIndex0.classList.remove("zIndex1");
        zIndex0.classList.add("zIndex2");
    }, 1000);
});