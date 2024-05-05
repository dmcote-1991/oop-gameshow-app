/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const btnReset = document.getElementById(`btn__reset`);
let game;

btnReset.addEventListener(`click`, () => {
    game = new Game();
    game.startGame();
});