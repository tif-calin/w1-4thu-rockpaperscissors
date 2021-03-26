// import functions and grab DOM elements
import { getComputerThrow, doesUserWin } from './utils.js';

const btnGo = document.querySelector('#button-go');
const btnReset = document.querySelector('#button-reset');
const imgCompThrow = document.querySelector('#computer-throw');

const sctStats = document.querySelector('#game-stats');
const spnTotal = document.querySelector('#stats-total');
const spnRecord = document.querySelector('#stats-record');
const spnResets = document.querySelector('#stats-resets');

// initialize state
const gameState = {
    'compThrow': getComputerThrow(),
    'resets': 1,
    'total': 0,
    'wins': 0,
    'losses': 0,
    'draws': 0
};

// set event listeners to update state and DOM
const showStats = () => {
    spnTotal.textContent = gameState['total'];
    spnRecord.textContent = `(${gameState['wins']}-${gameState['draws']}-${gameState['losses']})`;
    spnResets.textContent = `Game ${gameState['resets']}`;
    sctStats.classList.remove('hidden');
};

btnReset.addEventListener('click', () => {
    // reset gameState
    gameState['compThrow'] = getComputerThrow();
    gameState['resets']++;
    gameState['total'] = 0;
    gameState['wins'] = 0;
    gameState['draws'] = 0;
    gameState['losses'] = 0;

    // hide computer's throw 
    imgCompThrow.src = './assets/question-mark.png';
    imgCompThrow.alt = 'question-mark emoji';

    // show or hide relevent buttons
    btnReset.classList.add('hidden');
    spnResets.classList.remove('hidden');

    // show stats
    showStats();
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
    gameState['total']++;

    // show and disable relevent buttons
    btnReset.classList.remove('hidden');
    showStats();

    // new throw
    gameState['compThrow'] = getComputerThrow();
});