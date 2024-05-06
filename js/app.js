/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const btnReset = document.getElementById(`btn__reset`);
let game;

/**
 * Resets the gameboard between games
 */
btnReset.addEventListener(`click`, () => {
    const phraseUl = document.querySelector('#phrase ul');
    phraseUl.innerHTML = ``;
    const keyboardButtons = document.querySelectorAll('.key');
    keyboardButtons.forEach(button => {
        button.disabled = false;
        button.classList.remove('chosen', 'wrong');
        button.classList.add('key'); 
    });
    const hearts = document.querySelectorAll('.tries img');
    hearts.forEach(heart => {
        heart.src = 'images/liveHeart.png';
    });
    game = new Game();
    game.startGame();
});

/**
 * Gives functionality to the keyboard
 */
const keyboard = document.getElementById('qwerty');
keyboard.addEventListener('click', (e) => {
    if (e.target.classList.contains('key')) {
        const letter = e.target;
        game.handleInteraction(letter);
    }
});