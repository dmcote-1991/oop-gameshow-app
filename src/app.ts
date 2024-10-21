import { Game } from './Game.js';

const btnReset = document.getElementById(`btn__reset`) as HTMLButtonElement;
const keyboardButtons = document.querySelectorAll<HTMLButtonElement>('.key');
let game: Game;

/**
 * Resets the gameboard between games when the Start Game button is clicked.
 */
btnReset.addEventListener(`click`, () => {
    const phraseUl = document.querySelector('#phrase ul') as HTMLUListElement;
    phraseUl.innerHTML = ``;

    keyboardButtons.forEach(button => {
        button.disabled = false;
        button.classList.remove('chosen', 'wrong');
        button.classList.add('key'); 
    });

    const hearts = document.querySelectorAll<HTMLImageElement>('.tries img');
    hearts.forEach(heart => {
        heart.src = 'images/liveHeart.png';
    });

    game = new Game();
    game.startGame();
});

/**
 * Gives click functionality to the on-screen keyboard.
 */
const keyboard = document.getElementById('qwerty') as HTMLDivElement;
keyboard.addEventListener('click', (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains('key')) {
        const clickedLetter = e.target as HTMLButtonElement;
        game.handleInteraction(clickedLetter);
    }
});

/**
 * Gives keyboard functionality to the on-screen keyboard.
 */
  document.addEventListener('keyup', (e) => {
    const typedLetter = e.key.toLowerCase();
    const selectedKey = Array.from(keyboardButtons).find(key => key.textContent === typedLetter);
    if (selectedKey) {
      selectedKey.click();
    }
  });
  