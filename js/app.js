const btnReset = document.getElementById(`btn__reset`);
const keyboardButtons = document.querySelectorAll('.key');
let game;

/**
 * Resets the gameboard between games when the Start Game button is clicked.
 */
btnReset.addEventListener(`click`, () => {
    const phraseUl = document.querySelector('#phrase ul');
    phraseUl.innerHTML = ``;

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
 * Gives click functionality to the on-screen keyboard.
 */
const keyboard = document.getElementById('qwerty');
keyboard.addEventListener('click', (e) => {
    if (e.target.classList.contains('key')) {
        const clickedLetter = e.target;
        game.handleInteraction(clickedLetter);
    }
});

/**
 * Gives keyboard functionality to the on-screen keyboard.
 */
keyboardButtons.forEach(key => {
    key.addEventListener('click', () => {
    });
  });
  document.addEventListener('keyup', (e) => {
    const typedLetter = e.key.toLowerCase();
    const selectedKey = Array.from(keyboardButtons).find(key => key.textContent === typedLetter);
    if (selectedKey) {
      selectedKey.click();
      game.handleInteraction(typedLetter);
    }
  });