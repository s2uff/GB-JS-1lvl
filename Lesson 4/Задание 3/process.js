let process = {
    ask() {
        let score = 0;
        for (let n = 0; n < rightAnswers.length; n++) {
            let answer = Number(prompt(questions[n]));
            let rightAnswer = rightAnswers[n];
            if (answer !== 1 && answer !== 2 && answer !== 3 && answer !== 4) {
                alert("Ответ не принимается!\nОтвет должен содержать номер ответа (1, 2, 3 или 4)!");
                n--;
                continue;
            }
            if (answer == rightAnswer) {
                alert("Угадал!");
                score++
                if (!(n === rightAnswers.length-1)) {
                    let continueGame = confirm("Продолжаем игру?");
                    if (continueGame === false){
                        break;
                    }
                }
            } else {
                alert("Вы ввели неверный ответ((");
            }

        }
        alert("Твой счет: " + score);
    }
}