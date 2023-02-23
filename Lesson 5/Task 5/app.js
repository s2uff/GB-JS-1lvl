"use strict";

let inputName = document.querySelector("#name");
let inputPhone = document.querySelector("#phone");
let inputPassword1 = document.querySelector("#password1");
let inputPassword2 = document.querySelector("#password2");
let comments = document.querySelectorAll(".comment");

let validator = function () {
    reseter();
    // inputName
    if (inputName.value.length < 1) {
        comments[0].classList.add("visible");
        inputName.classList.remove("greenBorder");
        inputName.classList.add("redBorder");
    } else if(inputName.value.length > 50) {
        comments[0].classList.add("visible");
        inputName.classList.remove("greenBorder");
        inputName.classList.add("redBorder");
    } else {
        inputName.classList.remove("redBorder");
        comments[0].classList.remove("visible");
        inputName.classList.add("greenBorder");
    }

    //inputPhone
    if (inputPhone.value.length !== 11) {
        comments[1].classList.add("visible");
        inputPhone.classList.remove("greenBorder");
        inputPhone.classList.add("redBorder");
    } else {
        inputPhone.classList.remove("redBorder");
        comments[1].classList.remove("visible");
        inputPhone.classList.add("greenBorder");
    }

    //inputPassword1
    if (inputPassword1.value.length < 5) {
        comments[2].classList.add("visible");
        inputPassword1.classList.remove("greenBorder");
        inputPassword1.classList.add("redBorder");
        passwordComparer();
    } else if(inputPassword1.value.length > 20) {
        comments[2].classList.add("visible");
        inputPassword1.classList.remove("greenBorder");
        inputPassword1.classList.add("redBorder");
    } else {
        inputPassword1.classList.remove("redBorder");
        comments[2].classList.remove("visible");
        inputPassword2.classList.remove("greenBorder");
        passwordComparer();
    }

}

let passwordComparer = function () {
    if(inputPassword1.value !== inputPassword2.value) {
        comments[3].classList.add("visible");
        inputPassword1.classList.remove("greenBorder");
        inputPassword1.classList.add("redBorder");
        inputPassword2.classList.add("redBorder");
    } else if(inputPassword2.value === "") {
        inputPassword2.classList.remove("greenBorder");
        inputPassword2.classList.add("redBorder");
    } else {
        inputPassword1.classList.remove("redBorder");
        inputPassword2.classList.remove("redBorder");
        comments[3].classList.remove("visible");
        inputPassword1.classList.add("greenBorder");
        inputPassword2.classList.add("greenBorder");
    }
}

let reseter = function() {
    inputName.classList.remove("redBorder");
    comments[0].classList.remove("visible");
    inputName.classList.remove("greenBorder");
    inputPhone.classList.remove("redBorder");
    comments[1].classList.remove("visible");
    inputPhone.classList.remove("greenBorder");
    inputPassword1.classList.remove("redBorder");
    comments[2].classList.remove("visible");
    inputPassword1.classList.remove("greenBorder");
    comments[3].classList.remove("visible");
    inputPassword2.classList.remove("redBorder");
    inputPassword2.classList.remove("greenBorder");
}


document.querySelector(".submit").addEventListener("click", validator);
document.querySelector(".reset").addEventListener("click", reseter);