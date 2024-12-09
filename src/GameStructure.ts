/**
 * GameStructure Class for the Phrase Hunter Game
 * 
 * This module defines the GameStructure class, which is responsible for 
 * injecting the HTML layout of the Phrase Hunter game into a specified 
 * container element in the DOM. It sets up the visual components of the 
 * game interface, including the overlay, game banner, phrase display, 
 * on-screen keyboard, and scoreboard.
 * 
 * Key Features:
 * - Initializes with a container ID to specify where the game structure 
 *   will be injected.
 * - Automatically injects the complete HTML structure of the game 
 *   upon creation of the GameStructure instance.
 * - Ensures that the HTML is only injected if the target container 
 *   element exists in the DOM, promoting robustness.
 * 
 * Usage:
 * To use this class, create an instance of GameStructure by passing 
 * the ID of the desired container element. The game structure will 
 * be injected into that element immediately upon instantiation.
 */

export class GameStructure {
  // Property to store the ID of the container where the game HTML will be injected
  private containerId: string;

  constructor(containerId: string) {
    this.containerId = containerId;
    // Inject the game structure into the specified container element when the object is created
    this.injectGameHTML();
  }

  /**
   * Injects the HTML structure of the game into the specified container element.
   * This includes the overlay, game banner, phrase display area, on-screen keyboard, and scoreboard.
   */  
  injectGameHTML(): void {
    // Find the container element using the provided container ID
    const gameContainer = document.getElementById(this.containerId);

    // Check if the container element exists before injecting the HTML
    if (gameContainer) {
      // Set the innerHTML of the container to the complete game layout
      gameContainer.innerHTML = `
        <div id="overlay" class="start" role="dialog" aria-labelledby="dialog-title" aria-describedby="dialog-description">
          <h2 id ="dialog-title" class="title">Phrase Hunter</h2>          
          <h1 id="game-over-message"></h1>
          <button id="btn__reset" aria-label="Start Game">Start Game</button>
        </div>

        <div id="banner" class="section" aria-hidden="true">
          <h2 class="header">Phrase Hunter</h2>
        </div>

        <div id="phrase" class="section" aria-label="Phrase Display">
          <ul></ul>
        </div>

        <div id="qwerty" class="section" aria-label="Keyboard">
          <div class="keyrow">
            <button class="key" aria-label="Letter Q">q</button>
            <button class="key" aria-label="Letter W">w</button>
            <button class="key" aria-label="Letter E">e</button>
            <button class="key" aria-label="Letter R">r</button>
            <button class="key" aria-label="Letter T">t</button>
            <button class="key" aria-label="Letter Y">y</button>
            <button class="key" aria-label="Letter U">u</button>
            <button class="key" aria-label="Letter I">i</button>
            <button class="key" aria-label="Letter O">o</button>
            <button class="key" aria-label="Letter P">p</button>
          </div>

          <div class="keyrow">
            <button class="key" aria-label="Letter A">a</button>
            <button class="key" aria-label="Letter S">s</button>
            <button class="key" aria-label="Letter D">d</button>
            <button class="key" aria-label="Letter F">f</button>
            <button class="key" aria-label="Letter G">g</button>
            <button class="key" aria-label="Letter H">h</button>
            <button class="key" aria-label="Letter J">j</button>
            <button class="key" aria-label="Letter K">k</button>
            <button class="key" aria-label="Letter L">l</button>
          </div>

          <div class="keyrow">
            <button class="key" aria-label="Letter Z">z</button>
            <button class="key" aria-label="Letter X">x</button>
            <button class="key" aria-label="Letter C">c</button>
            <button class="key" aria-label="Letter V">v</button>
            <button class="key" aria-label="Letter B">b</button>
            <button class="key" aria-label="Letter N">n</button>
            <button class="key" aria-label="Letter M">m</button>
          </div>
        </div>

        <div id="scoreboard" class="section" aria-label="Scoreboard">
          <ol>
            <li class="tries">
              <img
                src="images/liveHeart.png"
                alt="Heart Icon"
                height="35"
                width="30"
              />
            </li>
            <li class="tries">
              <img
                src="images/liveHeart.png"
                alt="Heart Icon"
                height="35"
                width="30"
              />
            </li>
            <li class="tries">
              <img
                src="images/liveHeart.png"
                alt="Heart Icon"
                height="35"
                width="30"
              />
            </li>
            <li class="tries">
              <img
                src="images/liveHeart.png"
                alt="Heart Icon"
                height="35"
                width="30"
              />
            </li>
            <li class="tries">
              <img
                src="images/liveHeart.png"
                alt="Heart Icon"
                height="35"
                width="30"
              />
            </li>
          </ol>
        </div>
      `;
    }
  }
}
