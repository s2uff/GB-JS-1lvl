"use strict";

let game = {
    start(){ // Запускает игру и позволяет ее перезапускать после проигрыша всех вопросов
        do {
            asker();
            var playAgain = confirm("Хочешь попробовать еще раз?");
        } while (playAgain === true);
        alert("Спасибо за игру!");
    },

    init () { // Метод, запускаемый при загрузке страницы
        alert('Добро пожаловать в игру "Кто хочет стать миллионером"!');
        let letsPlay = confirm('Сыграем?');
        if (letsPlay === true) {
            game.start();
        } else {
            alert("Ну как хочешь...");
        }
    }
}

game.init();

