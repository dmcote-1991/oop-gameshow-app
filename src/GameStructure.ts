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
        <div id="overlay" class="start">
          <h2 class="title">Phrase Hunter</h2>
          <h1 id="game-over-message"></h1>
          <button id="btn__reset">Start Game</button>
        </div>

        <div id="banner" class="section">
          <h2 class="header">Phrase Hunter</h2>
        </div>

        <div id="phrase" class="section">
          <ul></ul>
        </div>

        <div id="qwerty" class="section">
          <div class="keyrow">
            <button class="key">q</button>
            <button class="key">w</button>
            <button class="key">e</button>
            <button class="key">r</button>
            <button class="key">t</button>
            <button class="key">y</button>
            <button class="key">u</button>
            <button class="key">i</button>
            <button class="key">o</button>
            <button class="key">p</button>
          </div>

          <div class="keyrow">
            <button class="key">a</button>
            <button class="key">s</button>
            <button class="key">d</button>
            <button class="key">f</button>
            <button class="key">g</button>
            <button class="key">h</button>
            <button class="key">j</button>
            <button class="key">k</button>
            <button class="key">l</button>
          </div>

          <div class="keyrow">
            <button class="key">z</button>
            <button class="key">x</button>
            <button class="key">c</button>
            <button class="key">v</button>
            <button class="key">b</button>
            <button class="key">n</button>
            <button class="key">m</button>
          </div>
        </div>

        <div id="scoreboard" class="section">
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
