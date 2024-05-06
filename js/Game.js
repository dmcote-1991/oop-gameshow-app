/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase(`She sells seashells by the seashore`),
            new Phrase(`All is well that ends well`),
            new Phrase(`To infinity and beyond`),
            new Phrase(`Actions speak louder than words`),
            new Phrase(`Contentment makes poor men rich`)
        ];
        this.activePhrase = null;
    }

    /**
     * Selects random phrase from phrases property
     * @return {object} Phrase object chosen to be used
     */
    getRandomPhrase(){
        const randomIndex = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomIndex];
    };

    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame(){
        const overlay = document.getElementById(`overlay`);
        overlay.style.display = `none`;
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    };

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
        const hearts = document.querySelectorAll('.tries img');
        hearts[this.missed].src = 'images/lostHeart.png';
        this.missed++;
        if (this.missed === 5) {
            this.gameOver(false);
        }
    };

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
    checkForWin() {
        const hiddenLetters = document.querySelectorAll('.hide');
        return hiddenLetters.length === 0;
    };

    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(win) {
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'flex';
        const message = document.getElementById('game-over-message');
        if (win) {
            message.textContent = 'Congratulations! You win!';
            overlay.classList.remove('start', 'lose');
            overlay.classList.add('win');
        } else {
            message.textContent = 'Sorry, you lost! Try Again?';
            overlay.classList.remove('start', 'win');
            overlay.classList.add('lose');
        }
    };

    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    */
    handleInteraction(button) {
        button.disabled = true;
        const guessedLetter = button.textContent;
        if(!this.activePhrase.checkLetter(guessedLetter)) {
            button.classList.add(`wrong`);
            this.removeLife();
        } else {
            button.classList.add(`chosen`);
            this.activePhrase.showMatchedLetter(guessedLetter);
            if (this.checkForWin()) {
                this.gameOver(true);
            }
        }
        console.log(button);
    };
}