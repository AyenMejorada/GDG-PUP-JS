// Document Object Model (DOM), stuffs in the HTML that we can use or control in this JavaScript file
// below, the names inside the parenthesis are the id or names of the elements that we will control with JavaScript

let startButton = document.getElementById('startButton'); // so we could control the Start Game button (and the variables below this, too)
let userChoiceDisplay = document.querySelector('#userChoice');
let computerChoiceDisplay = document.querySelector('#computerChoice');
let resultDisplay = document.querySelector('#result');
let winsDisplay = document.querySelector('#wins');
let lossesDisplay = document.querySelector('#losses');
let tiesDisplay = document.querySelector('#ties');

// initializing the variables for the state of the game
let userChoice = ''; // store the user's selected weapon (rock, paper, or scissors)
let wins = 0; 
let losses = 0;
let ties = 0;

// this array holds the possible choices for the game
const choices = ['rock', 'paper', 'scissors'];

// as user pick what, it would appear as what they pick (if they pick rock, it would appear rock as their chosen one)
document.getElementById('rock').addEventListener('click', () => selectChoice('rock'));
document.getElementById('paper').addEventListener('click', () => selectChoice('paper'));
document.getElementById('scissors').addEventListener('click', () => selectChoice('scissors'));

// when start button is clicked, play the game
startButton.addEventListener('click', playGame);

// as they click reset button, it will restart everything (eg. the scores)
document.getElementById('resetButton').addEventListener('click', resetGame);

function selectChoice(choice) {
    userChoice = choice;

    // this line is to display the image of the selected choice inside the user area
    userChoiceDisplay.innerHTML = `<img src="./assets/icon-${choice}.png" alt="${choice}" class='choice--img'/>`;

    // as the user chose, the start button game should not be disabled anymore since they already chose what they will play with
    startButton.disabled = false;
}

// this part is for the computer choice which is randomized
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length); // Get a number between 0–2
    return choices[randomIndex]; // Return rock, paper, or scissors
}

// winner
function determineWinner(userChoice, computerChoice) {
    // draw if both selected same
    if (userChoice === computerChoice) {
        return 'draw';
    } 
    // rock paper scissors mechanics
    else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'win';
    } else {
        return 'lose'; // if computer wins
    }
}

// update score
function updateScore(result) {
    if (result === 'win') {
        wins++; // increment, add 1 to win score
        winsDisplay.textContent = wins; // update the UI
    } else if (result === 'lose') {
        losses++; // increment, add 1 to lose score
        lossesDisplay.textContent = losses; // update the UI
    } else {
        ties++; // increment, add 1 to ties
        tiesDisplay.textContent = ties; // update the UI
    }
}


// play
function playGame() {
    const computerChoice = getComputerChoice(); // get computer's random choice (calling its function)
    const result = determineWinner(userChoice, computerChoice); // comparing, and decide who won

    // show computer's choice visually
    computerChoiceDisplay.innerHTML = `<img src="./assets/icon-${computerChoice}.png" alt="${computerChoice}" class='choice--img'/>`;

    // show result message
    if (result === 'draw') {
        resultDisplay.textContent = "It's a Draw!";
    } else if (result === 'win') {
        resultDisplay.textContent = "You Win!";
    } else {
        resultDisplay.textContent = "You Lose!";
    }

    updateScore(result); // call function, update win/loss/tie counters
    startButton.disabled = true; // disable again the Start button until a new choice is made
}

// for reset
function resetGame() {
    userChoice = ''; // to clear user's current choice

    // reset both user and computer images to their original icons
    userChoiceDisplay.innerHTML = `<img src="./assets/icon-user.png" alt="user" class="choice--img">`;
    computerChoiceDisplay.innerHTML = `<img src="./assets/icon-computer.png" alt="computer" class="choice--img">`;

    resultDisplay.textContent = 'Choose your weapon!';

    wins = 0;
    losses = 0;
    ties = 0;

    // as what initialized above, we are going to update the variables on what is the initialized value (all 0)
    winsDisplay.textContent = wins;
    lossesDisplay.textContent = losses;
    tiesDisplay.textContent = ties;

    // disable the Start button again until a new choice is made
    startButton.disabled = true;
}
