"use strict";

let buttons = document.querySelectorAll(".product-button");

let openText = function (event) {
    let element = event.target;
    element.parentNode.querySelector(".product-img").classList.add("displayNone");
    element.parentNode.querySelector(".product-button").innerText = 'Закрыть';
    element.parentNode.querySelector(".product-name").insertAdjacentHTML("afterend", '<p class="product-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, necessitatibus?</p>');
    element.removeEventListener("click", openText);
    element.addEventListener('click', closeText);
}

let closeText = function (event) {
    let element = event.target;
    element.parentNode.querySelector(".product-img").classList.remove("displayNone");
    element.parentNode.querySelector(".product-button").innerText = 'Описание';
    element.parentNode.querySelector('.product-text').remove();
    element.removeEventListener('click', closeText);
    element.addEventListener('click', openText);
}


 buttons.forEach(element => element.addEventListener('click', openText)); // В функцию улетает событие, а не объект!!!

// От Андрея: Лучше не баловаться добавлением и удалением слушателей, а отслеживать состояние.