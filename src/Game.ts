/**
 * Game Class for the Phrase Hunter Game
 * 
 * This module defines the Game class, which manages the core logic and state
 * of the Phrase Hunter game. It tracks the number of missed attempts, 
 * holds available phrases, and manages the active phrase being played.
 * 
 * Key Features:
 * - Initializes with a predefined list of phrases for gameplay.
 * - Provides functionality to start the game and display the selected phrase.
 * - Handles user interactions, including letter guesses and game state updates.
 * - Manages the player's lives and determines win/lose conditions.
 * - Displays game-over messages and handles game resets.
 * 
 * Dependencies:
 * - Phrase: Represents the phrases used in the game and includes methods 
 *   for phrase management and display.
 */

import { Phrase } from './Phrase.js'

export class Game {
    // Properties to track the number of missed attempts, available phrases, and the active phrase in play
    missed: number;
    phrases: Phrase[];
    activePhrase: Phrase | null;

    constructor() {
        this.missed = 0; // Counter for incorrect guesses
        // List of phrases available in the game, each phrase is an instance of the Phrase class
        this.phrases = [
            new Phrase(`She sells seashells by the seashore`),
            new Phrase(`All is well that ends well`),
            new Phrase(`To infinity and beyond`),
            new Phrase(`Actions speak louder than words`),
            new Phrase(`Contentment makes poor men rich`)
        ];
        this.activePhrase = null; // The current phrase being guessed
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
        // Hide the game overlay to start the game
        const overlay = document.getElementById(`overlay`) as HTMLDivElement;
        overlay.style.display = `none`;

        // Get a random phrase and set it as the active phrase
        this.activePhrase = this.getRandomPhrase();
        // Display the active phrase on the screen
        this.activePhrase.addPhraseToDisplay();
    };

    /**
     * Removes a heart and increases the missed property value by 1 for each wrong guess.
     * Displays the losing game-over message when the player runs out of hearts.
     */
    removeLife(): void {
        // Change the heart image to indicate a missed guess
        const hearts = document.querySelectorAll<HTMLImageElement>('.tries img');
        hearts[this.missed].src = 'images/lostHeart.png';
        this.missed++; // Increment missed counter
        // Check if the player has missed 5 times
        if (this.missed === 5) {
            this.gameOver(false); // Trigger game over if all lives are lost
        }
    };

    /**
     * Checks if the game has been won by revealing all letters in the phrase.
     * @return {boolean} True if player wins, false if they lose.
    won
     */
    checkForWin(): boolean {
        // Check if there are any letters still hidden in the phrase
        const hiddenLetters = document.querySelectorAll('.hide');
        return hiddenLetters.length === 0; // Return true if no hidden letters remain
    };

    /**
     * Displays the game over message based on the game outcome.
     * @param {boolean} win - True if player wins, false if they lose.
     */
    gameOver(win: boolean): void {
        // Show the game overlay when the game ends
        const overlay = document.getElementById('overlay') as HTMLDivElement;
        overlay.style.display = 'flex';
        const message = document.getElementById('game-over-message')as HTMLHeadingElement;
        // Update the game-over message and styling based on win or lose
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
        // Disable the clicked button to prevent repeated guesses
        button.disabled = true;
        const guessedLetter = button.textContent || ''; // Get the letter from the button text

        // Check if the guessed letter is in the active phrase
        if(!this.activePhrase?.checkLetter(guessedLetter)) {
            // If not, mark the button as wrong and remove a life
            button.classList.add(`wrong`);
            this.removeLife();
        } else {
            // If the guess is correct, mark the button as chosen
            button.classList.add(`chosen`);
            this.activePhrase?.showMatchedLetter(guessedLetter); // Reveal the letter in the phrase
            // Check if the game is won after the letter is revealed
            if (this.checkForWin()) {
                this.gameOver(true); // Trigger game over with a win status
            }
        }
    };
}
