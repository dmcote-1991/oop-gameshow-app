export class Phrase {
    phrase: string;

    constructor(phrase: string) {
        this.phrase = phrase.toLowerCase();
    }

    /**
    * Displays the randomly selected phrase on the game board
    */
    addPhraseToDisplay(): void {
        const phraseUl = document.querySelector(`#phrase ul`) as HTMLUListElement;
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
    };

    /**
    * Checks if the passed letter is present in the phrase.
    * @param {string} letter - The letter to check
    * @return {boolean} Returns true if the letter is found in the phrase, false if not.
    */
    checkLetter(letter: string): boolean {
        return this.phrase.includes(letter.toLowerCase());
    };

    /**
    * Displays the passed letter on the screen when it matches a letter in the phrase.
    * @param {string} letter - The letter to display
    */
    showMatchedLetter(letter: string): void {
        const phraseLetters = document.querySelectorAll('.letter');
        phraseLetters.forEach((phraseLetter) => {
            if (phraseLetter.textContent === letter) {
                phraseLetter.classList.remove('hide');
                phraseLetter.classList.add('show');
            }
        });
    };
}
