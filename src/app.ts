import { Game } from './Game.js';

class App {
    private btnReset: HTMLButtonElement;
    private keyboardButtons: NodeListOf<HTMLButtonElement>;
    private keyboard: HTMLDivElement;
    private game: Game | null;

    constructor() {
        this.btnReset = document.getElementById('btn__reset') as HTMLButtonElement;
        this.keyboardButtons = document.querySelectorAll<HTMLButtonElement>('.key');
        this.keyboard = document.getElementById('qwerty') as HTMLDivElement;
        this.game = null;
        this.initializeEventListeners();
    }

    initializeEventListeners(): void {
        this.btnReset.addEventListener('click', this.resetGame.bind(this));
        this.keyboard.addEventListener('click', this.handleKeyboardClick.bind(this));
        document.addEventListener('keyup', this.handleKeyboardInput.bind(this));
    }

    resetGame(): void {
        const phraseUl = document.querySelector('#phrase ul') as HTMLUListElement;
        phraseUl.innerHTML = '';

        this.keyboardButtons.forEach(button => {
            button.disabled = false;
            button.classList.remove('chosen', 'wrong');
            button.classList.add('key');
        });

        const hearts = document.querySelectorAll<HTMLImageElement>('.tries img');
        hearts.forEach(heart => {
            heart.src = 'images/liveHeart.png';
        });

        this.game = new Game();
        this.game.startGame();
    }

    private handleKeyboardClick(e: MouseEvent): void {
        const target = e.target as HTMLElement;
        if (target.classList.contains('key')) {
            const clickedLetter = target as HTMLButtonElement;
            this.game?.handleInteraction(clickedLetter);
        }
    }

    private handleKeyboardInput(e: KeyboardEvent): void {
        const typedLetter = e.key.toLowerCase();
        const selectedKey = Array.from(this.keyboardButtons).find(key => key.textContent === typedLetter);
        if (selectedKey) {
            selectedKey.click();
        }
    }
}

const app = new App();
