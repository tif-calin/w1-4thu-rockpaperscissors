// import functions and grab DOM elements
import { getComputerThrow, doesUserWin } from './utils.js';

const btnGo = document.querySelector('#button-go')

// initialize state
gameState = {
    compThrow: getComputerThrow()
};
pastGames = [];

// set event listeners to update state and DOM