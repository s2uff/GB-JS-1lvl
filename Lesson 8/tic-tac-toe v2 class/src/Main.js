"use strict";

window.addEventListener('load', () => {
    const game = new Game();
    const status = new Status();
    const board = new Board();

    game.init(status, board);
    board.init(game);

    game.run();
});