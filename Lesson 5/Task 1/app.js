"use strict";

let modalOpenBtn = document.querySelector(".modal-open");
let modalWindow = document.querySelector(".modal");
let modalCloseBtn = document.querySelector(".modal-close");

/**
 * Функция добавляет модальному окну класс с display:flex и анимацией появления
 */
let openModalFn = function () {
    modalWindow.classList.add("displayForModal");
}

/**
 * Функция удаляет класс с display:flex и анимацией появления
 * Добавляет класс с display:flex и анимацией исчезновения
 * Выжидает 1s и удаляет класс с display:flex и анимацией исчезновения
 * Таким образом получаем изначальное состояние всех классов
 */
let closeModalFn = function () {
    modalWindow.classList.remove("displayForModal");
    modalWindow.classList.add("scaleBack");
    setTimeout(function (){
        modalWindow.classList.remove("scaleBack");
    }, 1000);
}

modalOpenBtn.addEventListener("click", openModalFn);
modalCloseBtn.addEventListener("click", closeModalFn);