/**
 * App Class for the Phrase Hunter Game
 * 
 * This module initializes the main application for the Phrase Hunter game. 
 * It manages the game structure, handles user interactions through the on-screen 
 * keyboard and physical keyboard input, and resets the game state when necessary.
 * 
 * Key Features:
 * - Initializes the game structure and UI elements
 * - Sets up event listeners for the reset button and keyboard interactions
 * - Handles game state management, including resetting the game and displaying phrases
 * - Facilitates the interaction between the user and the game logic
 * 
 * Dependencies:
 * - GameStructure: Handles the game's HTML structure
 * - Game: Manages the game's logic and state
 */

import { GameStructure } from './GameStructure.js';
import { Game } from './Game.js';

class App {
    // Private properties to store references to game structure, reset button, keyboard, and the game instance
    private gameStructure: GameStructure
    private btnReset: HTMLButtonElement;
    private keyboardButtons: NodeListOf<HTMLButtonElement>;
    private keyboard: HTMLDivElement;
    private game: Game | null;

    constructor() {
        // Initialize GameStructure with the specified container for the game content
        this.gameStructure = new GameStructure('game-container');

        // Get references to HTML elements after the game content is injected into the DOM
        this.btnReset = document.getElementById('btn__reset') as HTMLButtonElement;
        this.keyboardButtons = document.querySelectorAll<HTMLButtonElement>('.key');
        this.keyboard = document.getElementById('qwerty') as HTMLDivElement;
        this.game = null;

        // Set up event listeners for reset button, on-screen keyboard, and keyboard input
        this.initializeEventListeners();
    }

    /**
     * Add event listeners for game interaction 
     */
    initializeEventListeners(): void {
        this.btnReset.addEventListener('click', this.resetGame.bind(this));
        this.keyboard.addEventListener('click', this.handleKeyboardClick.bind(this));
        document.addEventListener('keyup', this.handleKeyboardInput.bind(this)); // Handle physical keyboard input
        document.addEventListener('keydown', this.handleEnterKey.bind(this)); // Handle Enter key press
    }

    /**
     * Resets the game state when the reset button is clicked 
     */
    resetGame(): void {
        // Clear the displayed phrase
        const phraseUl = document.querySelector('#phrase ul') as HTMLUListElement;
        phraseUl.innerHTML = '';

        // Enable all keyboard buttons and reset their classes
        this.keyboardButtons.forEach(button => {
            button.disabled = false;
            button.classList.remove('chosen', 'wrong');
            button.classList.add('key');
        });

        // Reset heart icons to show life status
        const hearts = document.querySelectorAll<HTMLImageElement>('.tries img');
        hearts.forEach(heart => {
            heart.src = 'images/liveHeart.png'; // Change to full heart image
        });

        // Start a new game instance
        this.game = new Game();
        this.game.startGame();
    }

    /**
     * Handles clicks on the on-screen keyboard 
     */
    private handleKeyboardClick(e: MouseEvent): void {
        const target = e.target as HTMLElement;

        // Check if the clicked element is a valid keyboard button
        if (target.classList.contains('key')) {
            const clickedLetter = target as HTMLButtonElement;
            this.game?.handleInteraction(clickedLetter); // Pass the clicked letter to the game for processing
        }
    }

    /** 
     * Handles keyboard input from the physical keyboard 
     */
    private handleKeyboardInput(e: KeyboardEvent): void {
        const typedLetter = e.key.toLowerCase();
        // Find the corresponding on-screen key and simulate a click
        const selectedKey = Array.from(this.keyboardButtons).find(key => key.textContent === typedLetter);
        if (selectedKey) {
            selectedKey.click(); // Trigger the click event for the corresponding key
        }
    }

    /**
     * Handles Enter key press to start game
     */
    private handleEnterKey(e: KeyboardEvent): void {
        if (e.key === 'Enter') {
            this.btnReset.click(); // Trigger the Start Game button on Enter key press
        }
    }
}

// Initialize the app and start the event loop
const app = new App();
