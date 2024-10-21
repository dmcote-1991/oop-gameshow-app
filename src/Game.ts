import { Phrase } from './Phrase.js'

export class Game {
    missed: number;
    phrases: Phrase[];
    activePhrase: Phrase | null;

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
     * Selects random phrase from the list of phrases
     * @return {Phrase} Returns a Phrase object randomly chosen to be used
     */
    getRandomPhrase(): Phrase {
        const randomIndex = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomIndex];
    };

    /**
    * Initiates the game by selecting a random phrase and displaying it on the screen.
    */
    startGame(): void{
        const overlay = document.getElementById(`overlay`) as HTMLDivElement;
        overlay.style.display = `none`;
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    };

    /**
    * Removes a heart and increases the missed property value by 1 for each wrong guess.
    * Displays the losing game-over message when the player runs out of hearts.
    */
    removeLife(): void {
        const hearts = document.querySelectorAll<HTMLImageElement>('.tries img');
        hearts[this.missed].src = 'images/lostHeart.png';
        this.missed++;
        if (this.missed === 5) {
            this.gameOver(false);
        }
    };

    /**
    * Checks if the game has been won by revealing all letters in the phrase.
    * @return {boolean} True if player wins, false if they lose.
    won
    */
    checkForWin(): boolean {
        const hiddenLetters = document.querySelectorAll('.hide');
        return hiddenLetters.length === 0;
    };

    /**
    * Displays the game over message based on the game outcome.
    * @param {boolean} win - True if player wins, false if they lose.
    */
    gameOver(win: boolean): void {
        const overlay = document.getElementById('overlay') as HTMLDivElement;
        overlay.style.display = 'flex';
        const message = document.getElementById('game-over-message')as HTMLHeadingElement;
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
    * Handles the interaction when an onscreen keyboard button is clicked.
    * @param {HTMLButtonElement} button - The clicked button element representing the selected letter.
    */
    handleInteraction(button: HTMLButtonElement): void {
        button.disabled = true;
        const guessedLetter = button.textContent || '';
        if(!this.activePhrase?.checkLetter(guessedLetter)) {
            button.classList.add(`wrong`);
            this.removeLife();
        } else {
            button.classList.add(`chosen`);
            this.activePhrase?.showMatchedLetter(guessedLetter);
            if (this.checkForWin()) {
                this.gameOver(true);
            }
        }
    };
}
