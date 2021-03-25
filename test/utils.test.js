// IMPORT MODULES under test here:
import { getComputerThrow, doesUserWin } from '../utils.js';

const test = QUnit.test;

test('getComputerThrow', (expect) => {
    // Set up your arguments and expectations
    const expected = true;

    // Call the function you're testing and set the result to a const
    const actual = getComputerThrow();

    // Make assertions about what is expected versus the actual result
    expect.equal((actual === 'rock' || actual === 'paper' || actual === 'scissors'), expected);
});

test('doesUserWin: test cases', (expect) => {
    const win = 'win';
    const draw = 'draw';
    const lose = 'lose';

    // Make assertions about what is expected versus the actual result
    expect.equal(doesUserWin('rock', 'scissors'), win);
    expect.equal(doesUserWin('paper', 'rock'), win);

    expect.equal(doesUserWin('paper', 'paper'), draw);
    expect.equal(doesUserWin('scissors', 'scissors'), draw);
    
    expect.equal(doesUserWin('scissors', 'rock'), lose);
    expect.equal(doesUserWin('rock', 'paper'), lose);
});
