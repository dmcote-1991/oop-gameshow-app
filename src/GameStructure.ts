export class GameStructure {
  private containerId: string;

  constructor(containerId: string) {
    this.containerId = containerId;
    this.injectGameHTML();
  }

  injectGameHTML(): void {
    const gameContainer = document.getElementById(this.containerId);

    if (gameContainer) {
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
