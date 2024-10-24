/**
 * Phrase Class for the Phrase Hunter Game
 * 
 * This module defines the Phrase class, which is responsible for managing 
 * the game phrase used in the Phrase Hunter game. It provides methods 
 * to add the phrase to the game board, check for letter matches, and 
 * display the matched letters on the screen.
 * 
 * Key Features:
 * - Initializes with a phrase string, automatically converting it to 
 *   lowercase to ensure consistent comparisons during gameplay.
 * - Adds the phrase to the display as a series of list items, with 
 *   hidden letters and designated classes for spaces.
 * - Checks if a specified letter is present in the phrase, returning 
 *   a boolean value for game logic.
 * - Reveals matched letters on the game board by modifying their 
 *   CSS classes, enhancing user interaction during the game.
 * 
 * Usage:
 * To use this class, create an instance of Phrase with the desired 
 * phrase. Use the `addPhraseToDisplay` method to display the phrase 
 * on the game board, `checkLetter` to verify letter matches, and 
 * `showMatchedLetter` to reveal the letters on the board during the game.
 */

export class Phrase {
    // Property to store the phrase string, converted to lowercase
    phrase: string;

    constructor(phrase: string) {
        this.phrase = phrase.toLowerCase(); // Ensures the phrase is in lowercase for consistency
    }

    /**
     * Adds the phrase to the game board, displaying it as a series of list items.
     * Each letter in the phrase is represented as a hidden list item, while spaces are given a separate class.
     */
    addPhraseToDisplay(): void {
        // Select the <ul> element within the #phrase section where the phrase letters will be displayed
        const phraseUl = document.querySelector(`#phrase ul`) as HTMLUListElement;
        // Split the phrase into individual characters to iterate over each one
        const phraseChars = this.phrase.split(``);

        // Loop through each character in the phrase
        phraseChars.forEach(char => {
            const li = document.createElement(`li`); // Create a new <li> element for each character

            // Check if the character is a space
            if (char !== ` `){
                // If it's a letter, add the classes 'hide' and 'letter' along with the specific character
                li.className = `hide letter ${char}`;
                li.textContent = char; // Set the text content to the character itself
            } else {
                // If it's a space, assign it the class 'space'
                li.className = `space`;
            }
            // Append the <li> element to the <ul> in the game board
            phraseUl.appendChild(li);
        });
    };

    /**
    * Checks if the passed letter is present in the phrase.
    * @param {string} letter - The letter to check
    * @return {boolean} Returns true if the letter is found in the phrase, false if not.
    */
    checkLetter(letter: string): boolean {
        // Converts the letter to lowercase and checks if it is included in the phrase
        return this.phrase.includes(letter.toLowerCase());
    };

    /**
     * Displays the passed letter on the screen when it matches a letter in the phrase.
     * This method will reveal the letter on the game board by changing its CSS class.
     * @param {string} letter - The letter to display on the screen.
     */
    showMatchedLetter(letter: string): void {
        // Select all elements with the class 'letter' to find the phrase letters
        const phraseLetters = document.querySelectorAll('.letter');
        
        // Iterate over each phrase letter element
        phraseLetters.forEach((phraseLetter) => {
            // Check if the text content of the element matches the passed letter
            if (phraseLetter.textContent === letter) {
                // If there's a match, remove the 'hide' class to make the letter visible
                phraseLetter.classList.remove('hide');
                // Add the 'show' class to apply the visible styling
                phraseLetter.classList.add('show');
            }
        });
    };
}
