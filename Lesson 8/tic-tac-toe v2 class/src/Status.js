class Status {
    constructor() {
        this.status = 'playing'
    }

    /**
     * Проверка что мы "играем", что игра не закончена.
     * @returns {boolean} Вернет true, статус игры "играем", иначе false.
     */
    isStatusPlaying() {
        return this.status === 'playing';
    }

    /**
     * Ставит статус игры в "остановлена".
     */
    setStatusStopped() {
        this.status = 'stopped';
    }
}