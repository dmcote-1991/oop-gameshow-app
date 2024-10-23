# OOP-GameShow-App (Phrase Hunter Game)

Phrase Hunter is a word guessing game where players must figure out the hidden phrase by selecting letters on an on-screen keyboard. The game provides feedback for correct and incorrect guesses and tracks the player's progress with a life system represented by hearts. If the player runs out of lives (misses 5 guesses), the game ends.

## Table of Contents
- [How to Play](#how-to-play)
- [Project Structure](#project-structure)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)

## How to Play

1. Click the "Start Game" button to begin.
2. Use the on-screen keyboard or your physical keyboard to guess letters.
3. Correct guesses will reveal the letters in the phrase.
4. Incorrect guesses will result in losing a heart. After 5 incorrect guesses, the game ends.
5. You win by correctly guessing all the letters in the phrase before running out of hearts.

## Project Structure

```bash
/oop-gameshow-app
├── index.html   
├── css
│   ├── animate.css   
│   └── styles.css    
├── images
│   ├── liveHeart.png  # Heart life icon
│   └── lostHeart.png  # Empty heart life icon
├── dist   #Compiled JavaScript files
│   ├── app.js    
│   ├── GameStructure.js     
│   ├── Game.js       
│   └── Phrase.js      
├── src
│   ├── app.ts            # Main entry point for the game logic
│   ├── GameStructure.ts  # Contains the main game structure HTML
│   ├── Game.ts           # Contains the game mechanics and logic
│   └── Phrase.ts         # Handles the phrase management and display
├── README.md     
└── .gitignore
```

## Features

- **Random Phrase Selection**: The game randomly selects a phrase from a predefined list.
- **On-screen and Keyboard Input**: You can interact with the game using the on-screen buttons or your physical keyboard.
- **Life System**: The game tracks incorrect guesses with a heart system. Players get 5 hearts, and the game ends when all hearts are lost.
- **Game Over Logic**: Displays a winning or losing message based on the player's performance.
- **Dynamic Phrase Display**: The selected phrase is revealed letter by letter as the player guesses correctly.
- **Accessible**: The game supports keyboard navigation for better accessibility.

## Installation

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/dmcote-1991/oop-gameshow-app.git

2. Navigate into the project directory:
   ```bash
   cd phrase-hunter

3. Open the `index.html` file in your browser to start the game.

## Usage

- **Starting the Game**: Click the "Start Game" button to initialize a new game.
- **Making Guesses**: Click a letter on the on-screen keyboard or type on your physical keyboard to guess a letter.
- **Resetting the Game**: After the game ends, you can click the "Start Game" button again to reset the game and start over.

## Technologies Used

- **HTML5**: For the structure of the game.
- **CSS3**: For the visual styling and layout.
- **JavaScript**: (ES6 Modules): For the game logic and interactions.
- **Animate.css**: For animations (optional).

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check out the [issues page](https://github.com/dmcote-1991/oop-gameshow-app/issues) or open a [pull request](https://github.com/dmcote-1991/oop-gameshow-app/pulls).
