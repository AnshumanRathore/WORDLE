# Wordle (Web-Based)

A fully functional, web-based clone of the popular word guessing game **Wordle**, built using pure **HTML, CSS, and Vanilla JavaScript**.

This project demonstrates DOM manipulation, event handling, CSS animations, and game logic implementation without relying on external frameworks or libraries.

##  Features

* **Classic Gameplay:** 6 tries to guess a 5-letter word.
* **Visual Feedback:**
    * 🟩 **Green:** Correct letter, correct spot.
    * 🟨 **Yellow:** Correct letter, wrong spot.
    * ⬛ **Gray:** Letter not in the word.
* **Interactive Keyboard:** On-screen keyboard updates colors to match game state; supports physical keyboard input.
* **Hint System:** A custom feature allowing users to get a cryptic clue if they are stuck.
* **Animations:** Smooth flip animations for guesses and shake effects for invalid words.
* **Responsive Design:** Works on desktop and mobile devices.
* **Offline Capable:** The word bank is built-in, requiring no server connection.

##  Tech Stack

* **HTML5:** Semantic structure.
* **CSS3:** Flexbox, CSS Grid, and Keyframe Animations.
* **JavaScript (ES6+):** Game logic, state management, and DOM interaction.

##  How to Run

1.  Clone or download this repository.
2.  Open the folder in VS Code.
3.  Open `index.html`.
4.  **Recommended:** Use the "Live Server" extension in VS Code to run the game.

##  How to Play

1.  Type a 5-letter word and press **ENTER**.
2.  Watch the tile colors change to see how close you are.
3.  If you get stuck, click the **💡 Get Hint** button.
4.  Reload the page to play again with a new random word!

##  Developer Cheat (Debug Mode)

If you are testing the app and need to know the answer immediately:
1.  Open your browser's **Developer Tools** (Right-click -> Inspect -> Console).
2.  The target word is logged to the console at the start of every game!
