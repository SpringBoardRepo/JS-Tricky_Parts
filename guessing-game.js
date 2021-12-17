function guessingGame() {

    let randomnumber = Math.floor(Math.random() * 100);
    let isOver = false;
    let numOfGuessess = 0;

    return function guess(num) {
        if (isOver) return "The game is over, you already won!";
        numOfGuessess++;
        if (num === randomnumber) {
            isOver = true;
            const countGusses = numOfGuessess === 1 ? "guess" : "guesses";
            return `You win! You found ${num} in ${numOfGuessess} ${countGusses}.`
        }
        if (num > randomnumber) {
            return `${num} is too high!`;
        }
        if (num < randomnumber) {
            return `${num} is too low!`;
        }
    }

}

module.exports = { guessingGame };
