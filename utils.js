
export const getComputerThrow = () => ['rock', 'paper', 'scissors'][Math.ceil(Math.random() * 3)];

export const doesUserWin = (userThrow, compThrow) => {
    const results = ['win', 'draw', 'lose'];

    switch (userThrow) {
        case 'rock':
            const result = ['scissors', 'rock', 'paper'].indexOf(compThrow);
            return results[result];
        case 'paper':
            const result = ['rock', 'paper', 'scissors'].indexOf(compThrow);
            return results[result];
        default: // scissors
            const result = ['paper', 'scissors', 'rock'].indexOf(compThrow);
            return results[result];
    }
};

/* golf pro

export const doesUserWin = (userThrow, compThrow) => {
    const results = ['win', 'draw', 'lose'];
    const throws = ['rock', 'paper', 'scissors'];

    switch (userThrow) {
        case 'rock': return results[(throws.indexOf(compThrow) + 1) % 3];
        case 'paper': return results[throws.indexOf(compThrow) % 3];
        default: return results[(throws.indexOf(compThrow) + 2) % 3];
    }
}

*/