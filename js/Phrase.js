/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
    /**
    * Displays phrase on game board
    */
    addPhraseToDisplay(){
        const phraseUl = document.querySelector(`#phrase ul`);
        const phraseChars = this.phrase.split(``);
        phraseChars.forEach(char => {
            const li = document.createElement(`li`);
            if (char !== ` `){
                li.className = `hide letter ${char}`;
                li.textContent = char;
            } else {
                li.className = `space`;
            }
            phraseUl.appendChild(li);
        });
    }
}