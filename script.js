const WORDS = [
    { word: 'APPLE', hint: 'A popular fruit that keeps the doctor away' },
    { word: 'BREAD', hint: 'Baked food made from flour and water' },
    { word: 'CHAIR', hint: 'Furniture you sit on' },
    { word: 'DANCE', hint: 'Move rhythmically to music' },
    { word: 'EARTH', hint: 'The planet we live on' },
    { word: 'FLAME', hint: 'Hot glowing gas from a fire' },
    { word: 'GRAPE', hint: 'Small fruit used to make wine' },
    { word: 'HOUSE', hint: 'A building where people live' },
    { word: 'IMAGE', hint: 'A picture or photograph' },
    { word: 'JUICE', hint: 'Liquid extracted from fruits' },
    { word: 'KNIFE', hint: 'A cutting tool with a blade' },
    { word: 'LIGHT', hint: 'Opposite of darkness' },
    { word: 'MOUSE', hint: 'Small rodent or computer device' },
    { word: 'NIGHT', hint: 'Time when it is dark outside' },
    { word: 'OCEAN', hint: 'Large body of salt water' },
    { word: 'PLANT', hint: 'Living organism that grows in soil' },
    { word: 'QUEEN', hint: 'Female ruler of a kingdom' },
    { word: 'RIVER', hint: 'Natural flowing watercourse' },
    { word: 'STONE', hint: 'Hard solid mineral matter' },
    { word: 'TIGER', hint: 'Large striped wild cat' },
    { word: 'UNCLE', hint: 'Your parent\'s brother' },
    { word: 'VOICE', hint: 'Sound made when speaking' },
    { word: 'WATER', hint: 'Clear liquid essential for life' },
    { word: 'YOUTH', hint: 'The period of being young' },
    { word: 'ZEBRA', hint: 'Black and white striped animal' },
    { word: 'BEACH', hint: 'Sandy shore by the sea' },
    { word: 'CLOUD', hint: 'Visible mass of water vapor in sky' },
    { word: 'DREAM', hint: 'Images and thoughts during sleep' },
    { word: 'FRESH', hint: 'Recently made or not stale' },
    { word: 'HAPPY', hint: 'Feeling of joy and contentment' },
    { word: 'MAGIC', hint: 'Supernatural power or illusion' },
    { word: 'PIANO', hint: 'Musical instrument with black and white keys' },
    { word: 'ROBOT', hint: 'Programmable mechanical device' },
    { word: 'SMART', hint: 'Intelligent and clever' },
    { word: 'TRAIN', hint: 'Railway vehicle with many carriages' },
    { word: 'WORLD', hint: 'Earth and all its inhabitants' },
    { word: 'WRITE', hint: 'Put words on paper or screen' },
    { word: 'SPORT', hint: 'Physical activity or game' },
    { word: 'MUSIC', hint: 'Art of combining sounds' },
    { word: 'MONEY', hint: 'Medium of exchange, currency' },
    { word: 'PHONE', hint: 'Device for making calls' },
    { word: 'SHIRT', hint: 'Garment for the upper body' },
    { word: 'PIZZA', hint: 'Italian dish with cheese and toppings' },
    { word: 'HORSE', hint: 'Large four-legged animal used for riding' },
    { word: 'CLOCK', hint: 'Device that shows time' },
    { word: 'TRUCK', hint: 'Large motor vehicle for transporting goods' },
    { word: 'SWEET', hint: 'Having a sugary taste' },
    { word: 'TOWER', hint: 'Tall narrow building or structure' },
    { word: 'BRAIN', hint: 'Organ in your head that controls thinking' },
    { word: 'OCEAN', hint: 'Vast body of salt water' },
    { word: 'STORM', hint: 'Violent weather with wind and rain' },
    { word: 'PEACE', hint: 'Freedom from war and conflict' },
    { word: 'HEART', hint: 'Organ that pumps blood' },
    { word: 'FRUIT', hint: 'Sweet edible product of a plant' },
    { word: 'SMILE', hint: 'Happy facial expression' },
    { word: 'GIANT', hint: 'Extremely large in size' },
    { word: 'BRAVE', hint: 'Showing courage' },
    { word: 'ANGEL', hint: 'Spiritual being or very kind person' },
    { word: 'CROWN', hint: 'Headwear worn by royalty' },
    { word: 'POWER', hint: 'Ability to do something or control' },
    { word: 'SPACE', hint: 'The universe beyond Earth' },
    { word: 'SWORD', hint: 'Weapon with a long metal blade' },
    { word: 'SOLAR', hint: 'Relating to the sun' },
    { word: 'ROYAL', hint: 'Related to a king or queen' },
    { word: 'LAUGH', hint: 'Make sounds of amusement' },
    { word: 'PARTY', hint: 'Social gathering for celebration' },
    { word: 'CANDY', hint: 'Sweet confection or treat' },
    { word: 'LUCKY', hint: 'Having good fortune' },
    { word: 'SHARK', hint: 'Large predatory fish' },
    { word: 'WHALE', hint: 'Largest marine mammal' },
    { word: 'SNAKE', hint: 'Legless reptile' },
    { word: 'EAGLE', hint: 'Large bird of prey' },
    { word: 'FROST', hint: 'Ice crystals formed in cold weather' },
    { word: 'GRASS', hint: 'Green plants covering lawns' },
    { word: 'BLOOM', hint: 'When flowers open' },
    { word: 'PEARL', hint: 'Precious gem from oysters' },
    { word: 'CORAL', hint: 'Marine organism forming reefs' }
];

let targetWordObj = null;
let targetWord = '';
let currentRow = 0;
let currentTile = 0;
let gameOver = false;
let currentGuess = '';
let hintsUsed = 0;
const keyboardState = {};

function init() {
    targetWordObj = WORDS[Math.floor(Math.random() * WORDS.length)];
    targetWord = targetWordObj.word;
    
    // DEBUG: Shows answer in console so you can test wins
    console.log('Target word:', targetWord);
    
    document.getElementById('keyboard').addEventListener('click', handleKeyboardClick);
    document.addEventListener('keydown', handlePhysicalKeyboard);
}

function handleKeyboardClick(e) {
    if (gameOver) return;
    
    const key = e.target.closest('.key');
    if (!key) return;
    
    const letter = key.dataset.key;
    handleInput(letter);
}

function handlePhysicalKeyboard(e) {
    if (gameOver) return;
    
    const key = e.key.toUpperCase();
    
    if (key === 'ENTER') {
        handleInput('ENTER');
    } else if (key === 'BACKSPACE') {
        handleInput('BACKSPACE');
    } else if (/^[A-Z]$/.test(key)) {
        handleInput(key);
    }
}

function handleInput(input) {
    if (input === 'ENTER') {
        submitGuess();
    } else if (input === 'BACKSPACE') {
        deleteLetter();
    } else if (currentTile < 5) {
        addLetter(input);
    }
}

function addLetter(letter) {
    if (currentTile < 5) {
        const tiles = document.querySelectorAll('.row')[currentRow].querySelectorAll('.tile');
        tiles[currentTile].textContent = letter;
        tiles[currentTile].classList.add('filled');
        currentGuess += letter;
        currentTile++;
    }
}

function deleteLetter() {
    if (currentTile > 0) {
        currentTile--;
        const tiles = document.querySelectorAll('.row')[currentRow].querySelectorAll('.tile');
        tiles[currentTile].textContent = '';
        tiles[currentTile].classList.remove('filled');
        currentGuess = currentGuess.slice(0, -1);
    }
}

function submitGuess() {
    if (currentTile !== 5) {
        showMessage('Not enough letters');
        return;
    }

    const validWords = WORDS.map(w => w.word);
    if (!validWords.includes(currentGuess)) {
        showMessage('Not in word list');
        shakeTiles();
        return;
    }

    flipTiles();
}

function flipTiles() {
    const tiles = document.querySelectorAll('.row')[currentRow].querySelectorAll('.tile');
    const targetLetters = targetWord.split('');
    const guessLetters = currentGuess.split('');
    const letterCount = {};
    
    // Count letter frequency in the target word
    targetLetters.forEach(letter => {
        letterCount[letter] = (letterCount[letter] || 0) + 1;
    });

    const results = Array(5).fill('absent'); // Default all to gray
    
    // 1. Pass: Find Green (Correct position)
    guessLetters.forEach((letter, i) => {
        if (letter === targetLetters[i]) {
            results[i] = 'correct';
            letterCount[letter]--; // Use up one count of this letter
        }
    });

    // 2. Pass: Find Yellow (Wrong position)
    guessLetters.forEach((letter, i) => {
        if (results[i] === 'absent' && letterCount[letter] > 0) {
            results[i] = 'present';
            letterCount[letter]--; // Use up one count of this letter
        }
    });

    // 3. Apply Animations & Colors
    tiles.forEach((tile, i) => {
        setTimeout(() => {
            tile.classList.add('flip');
            
            // Wait for flip to be halfway done (90deg) before changing color
            setTimeout(() => {
                tile.classList.add(results[i]);
                updateKeyboardColor(guessLetters[i], results[i]);
            }, 250);
        }, i * 300);
    });

    // Check game end after all animations finish
    setTimeout(() => {
        checkGameEnd(results);
    }, 1500);
}

function updateKeyboardColor(letter, state) {
    const key = document.querySelector(`[data-key="${letter}"]`);
    if (!key) return;
    
    const currentState = keyboardState[letter];
    
    // Prioritize Correct > Present > Absent
    if (state === 'correct') {
        key.classList.remove('present', 'absent');
        key.classList.add('correct');
        keyboardState[letter] = 'correct';
    } else if (state === 'present' && currentState !== 'correct') {
        key.classList.remove('absent');
        key.classList.add('present');
        keyboardState[letter] = 'present';
    } else if (state === 'absent' && !currentState) {
        key.classList.add('absent');
        keyboardState[letter] = 'absent';
    }
}

function checkGameEnd(results) {
    if (results.every(r => r === 'correct')) {
        gameOver = true;
        showModal('Amazing!', 'You guessed the word!', targetWord);
    } else if (currentRow === 5) {
        gameOver = true;
        showModal('Game Over', `The word was:`, targetWord);
    } else {
        currentRow++;
        currentTile = 0;
        currentGuess = '';
    }
}

function shakeTiles() {
    const tiles = document.querySelectorAll('.row')[currentRow].querySelectorAll('.tile');
    tiles.forEach(tile => {
        tile.style.animation = 'none';
        setTimeout(() => {
            tile.style.animation = 'shake 0.5s';
        }, 10);
    });
}

function showMessage(text) {
    const message = document.getElementById('message');
    message.textContent = text;
    message.classList.add('show');
    setTimeout(() => {
        message.classList.remove('show');
    }, 2000);
}

function showModal(title, message, word) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-message').textContent = message;
    document.getElementById('word-reveal').textContent = word;
    document.getElementById('modal').classList.add('show');
}

function showHint() {
    if (gameOver) {
        showMessage('Game is over!');
        return;
    }

    const hintDisplay = document.getElementById('hintDisplay');
    
    if (hintsUsed === 0) {
        hintDisplay.textContent = `💡 Hint: ${targetWordObj.hint}`;
        hintDisplay.classList.add('show');
        hintsUsed++;
        showMessage('Hint revealed!');
    } else {
        showMessage('You already used your hint!');
    }
}

init();