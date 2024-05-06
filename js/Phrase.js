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

    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
    checkLetter(letter) {
        return this.phrase.includes(letter.toLowerCase());
    }

    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter) {
        const phraseLetters = document.querySelectorAll('.letter');
        phraseLetters.forEach((phraseLetter) => {
            if (phraseLetter.textContent === letter) {
                phraseLetter.classList.remove('hide');
                phraseLetter.classList.add('show');
            }
        });
    }
}