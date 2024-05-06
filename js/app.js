/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const btnReset = document.getElementById(`btn__reset`);
let game;

btnReset.addEventListener(`click`, () => {
    game = new Game();
    game.startGame();
});

const keyboard = document.getElementById('qwerty');
keyboard.addEventListener('click', (e) => {
    if (e.target.classList.contains('key')) {
        const letter = e.target;
        game.handleInteraction(letter);
    }
});