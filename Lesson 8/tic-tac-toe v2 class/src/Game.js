class Game {
    constructor() {
        this.phase = 'X'
    }

    /**
     * Метод получает другие игровые объекты, которые нужны ему
     * для работы.
     * @param {Status} status
     * @param {Board} board
     */
    init( status, board) {
        this.status = status;
        this.board = board;
    }

    /**
     * Инициализация игры.
     */
    run() {
        // Выводим все ячейки.
        this.board.renderMap();
        // Инициализируем обработчики событий.
        this.board.initEventHandlers();
    }

    /**
     * Обработчик события клика.
     * @param {MouseEvent} event
     */
    cellClickHandler(event) {
        // Если клик не нужно обрабатывать, уходим из функции.
        if (!this.isCorrectClick(event)) {
            return;
        }

        // Заполняем ячейку.
        this.fillCell(event);
        // Если кто-то выиграл, заходим в if.
        if (this.hasWon()) {
            // Ставим статус в "остановлено".
            this.status.setStatusStopped();
            // Сообщаем о победе пользователя.
            this.sayWonPhrase();
        }

        // Меняем фигуру (крестик или нолик).
        this.togglePhase();
    }

    /**
     * Проверка был ли корректный клик, что описан в событии event.
     * @param {Event} event
     * @returns {boolean} Вернет true в случае если статус игры "играем", клик что описан в объекте event был
     * по ячейке и ячейка куда был произведен клик был по пустой ячейке.
     */
    isCorrectClick(event) {
        return this.status.isStatusPlaying() && this.board.isClickByCell(event) && this.board.isCellEmpty(event);
    }

    /**
     * Заполняет ячейку в которую кликнул пользователь в событии event.
     * @param {Event} event
     * @param {HTMLElement} event.target
     */
    fillCell(event) {
        // Получаем строку и колонку куда кликнули.
        let row = +event.target.dataset.row;
        let col = +event.target.dataset.col;

        // Заполняем ячейку и ставим значение в массиве, в свойстве mapValues.
        this.board.mapValues[row][col] = this.phase;
        event.target.textContent = this.phase;
    }

    /**
     * Проверка есть ли выигрышная ситуация на карте.
     * @returns {boolean} Вернет true, если игра выиграна, иначе false.
     */
    hasWon() {

        return this.isLineWon({ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }) ||
            this.isLineWon({ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }) ||
            this.isLineWon({ x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }) ||

            this.isLineWon({ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }) ||
            this.isLineWon({ x: 1, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 2 }) ||
            this.isLineWon({ x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }) ||

            this.isLineWon({ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 2 }) ||
            this.isLineWon({ x: 0, y: 2 }, { x: 1, y: 1 }, { x: 2, y: 0 });
    }

    /**
     * Проверка есть ли выигрышная ситуация на линии.
     * @param {{x: int, y: int}} a 1-ая ячейка.
     * @param {{x: int, y: int}} b 2-ая ячейка.
     * @param {{x: int, y: int}} c 3-я ячейка.
     * @returns {boolean} Вернет true, если линия выиграна, иначе false.
     */
    isLineWon(a, b, c) {
        let value = this.board.mapValues[a.y][a.x] + this.board.mapValues[b.y][b.x] + this.board.mapValues[c.y][c.x];
        return value === 'XXX' || value === '000';
    }

    /**
     * Сообщает о победе.
     */
    sayWonPhrase() {
        let figure = this.phase === 'X' ? 'Крестики' : 'Нолики';
        alert(`${figure} выиграли!`);
    }

    /**
     * Меняет фигуру (крестик или нолик).
     */
    togglePhase() {
        this.phase = this.phase === 'X' ? '0' : 'X';
    }
}