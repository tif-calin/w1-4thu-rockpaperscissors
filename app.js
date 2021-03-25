// import functions and grab DOM elements
import { getComputerThrow, doesUserWin } from './utils.js';

const btnGo = document.querySelector('#button-go');
const btnReset = document.querySelector('#button-reset');
const imgCompThrow = document.querySelector('#computer-throw');

// initialize state
const gameState = {
    'compThrow': getComputerThrow()
};
const pastGames = [];

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
});

btnGo.addEventListener('click', () => {
    // reveal computer's throw
    imgCompThrow.src = './assets/' + gameState['compThrow'] + '.png';
    imgCompThrow.alt = gameState['compThrow'] + ' emoji';

    // show and disable relevent buttons
    btnGo.disabled = true;
    btnReset.classList.remove('hidden');
});