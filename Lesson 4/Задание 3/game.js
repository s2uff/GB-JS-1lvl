"use strict";

let game = {
    start(){
        do {
            process.ask();
            var playAgain = confirm("Хочешь попробовать еще раз?");
        } while (playAgain === true);
        alert("Спасибо за игру!");
    }
}

alert('Добро пожаловать в игру "Кто хочет стать миллионером"!');
let letsPlay = confirm('Сыграем?');
if (letsPlay === true) {
    game.start();
} else {
    alert("Ну как хочешь...");
}
