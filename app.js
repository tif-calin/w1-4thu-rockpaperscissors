// import functions and grab DOM elements
import { getComputerThrow, doesUserWin } from './utils.js';

const btnGo = document.querySelector('#button-go');
const btnReset = document.querySelector('#button-reset');
const imgCompThrow = document.querySelector('#computer-throw');

const sctStats = document.querySelector('#game-stats');
const spnTotal = document.querySelector('#stats-total');
const spnRecord = document.querySelector('#stats-record');

// initialize state
const gameState = {
    'compThrow': getComputerThrow(),
    'total': 1,
    'wins': 0,
    'losses': 0,
    'draws': 0
};

// set event listeners to update state and DOM
btnReset.addEventListener('click', () => {
    // hide computer's throw 
    imgCompThrow.src = './assets/question-mark.png';
    imgCompThrow.alt = 'question-mark emoji';

    // get new computer throw
    gameState['compThrow'] = getComputerThrow();

    // show or hide relevent buttons
    btnGo.disabled = false;
    btnReset.classList.add('hidden');

    // show stats
    gameState['total']++;
    spnTotal.textContent = gameState['total'];
    sctStats.classList.remove('hidden');
});

btnGo.addEventListener('click', () => {
    // reveal computer's throw
    imgCompThrow.src = './assets/' + gameState['compThrow'] + '.png';
    imgCompThrow.alt = gameState['compThrow'] + ' emoji';

    // win or lose?
    const userThrow = document.querySelector('input:checked').value;
    const result = doesUserWin(userThrow, gameState['compThrow']);
    switch (result) {
        case 'win':
            gameState['wins']++;
            break;
        case 'lose':
            gameState['losses']++;
            break;
        default:
            gameState['draws']++;
    }
    spnRecord.textContent = `(${gameState['wins']}-${gameState['draws']}-${gameState['losses']})`;

    // show and disable relevent buttons
    btnGo.disabled = true;
    btnReset.classList.remove('hidden');
});