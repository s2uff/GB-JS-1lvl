class Board {
    constructor() {
        this.gameTableElement = document.getElementById('game');
        this.mapValues = [
            ['', '', ''],
            ['', '', ''],
            ['', '', ''],
        ]
    }

    /**
     * Метод получает другие игровые объекты, которые нужны ему
     * для работы.
     * @param {Game} game
     */
    init(game) {
        this.game = game;
    }
    /**
     * Вывод ячеек в html.
     */
    renderMap() {
        for (let row = 0; row < 3; row++) {
            const tr = document.createElement('tr');
            this.gameTableElement.appendChild(tr);
            for (let col = 0; col < 3; col++) {
                let td = document.createElement('td');
                td.dataset.row = row.toString();
                td.dataset.col = col.toString();
                tr.appendChild(td);
            }
        }
    }

    /**
     * Инициализация обработчиков событий.
     */
    initEventHandlers() {
        // Ставим обработчик, при клике на таблицу вызовется функция this.cellClickHandler.
        this.gameTableElement.addEventListener('click', event => this.game.cellClickHandler(event));
    }

    /**
     * Проверка что клик был по ячейке.
     * @param {Event} event
     * @param {HTMLElement} event.target
     * @returns {boolean} Вернет true, если клик был по ячейке, иначе false.
     */
    isClickByCell(event) {
        return event.target.tagName === 'TD';
    }

    /**
     * Проверка что в ячейку не ставили значение (крестик или нолик).
     * @param {Event} event
     * @param {HTMLElement} event.target
     * @returns {boolean} Вернет true, если ячейка пуста, иначе false.
     */
    isCellEmpty(event) {
        // Получаем строку и колонку куда кликнули.
        let row = +event.target.dataset.row;
        let col = +event.target.dataset.col;

        return this.mapValues[row][col] === '';
    }
}