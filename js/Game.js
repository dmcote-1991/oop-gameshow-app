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
    handleInteraction(){
        const keys = document.getElementsByClassName(`key`);
        const keyArray = [];
        for (let i = 0; i < keys.length; i++) {
            keyArray.push(keys[i]);
        }
        keyArray.forEach((button) => {
            button.addEventListener(`click`, (e) => {
                console.log('Button clicked:', e.target.textContent);

                e.target.disabled = true;
                const guessedLetter = e.target.textContent;
                if (this.activePhrase.phrase.includes(guessedLetter)) {
                    e.target.classList.add(`chosen`);
                } else {
                    e.target.classList.add(`wrong`);
                }
            });
        });
    };
}